import React, { useState } from 'react';
import { Bell, Moon, Volume2, Globe, User, Lock, Palette, Monitor } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    dailyReminders: true,
    readingGoals: false,
    darkMode: false,
    autoPlay: true,
    volume: 75,
    language: 'english',
    fontSize: 'medium'
  });

  const handleToggle = (setting: string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev]
    }));
  };

  const handleSliderChange = (setting: string, value: number) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const settingsGroups = [
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        {
          key: 'notifications',
          label: 'Push Notifications',
          description: 'Receive updates about new content and community activities',
          type: 'toggle'
        },
        {
          key: 'dailyReminders',
          label: 'Daily Reading Reminders',
          description: 'Get gentle reminders for your daily reading practice',
          type: 'toggle'
        },
        {
          key: 'readingGoals',
          label: 'Reading Goal Notifications',
          description: 'Receive notifications about your reading progress',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Appearance',
      icon: Palette,
      settings: [
        {
          key: 'darkMode',
          label: 'Dark Mode',
          description: 'Switch to a darker theme for comfortable reading',
          type: 'toggle'
        },
        {
          key: 'fontSize',
          label: 'Font Size',
          description: 'Adjust text size for better readability',
          type: 'select',
          options: [
            { value: 'small', label: 'Small' },
            { value: 'medium', label: 'Medium' },
            { value: 'large', label: 'Large' },
            { value: 'extra-large', label: 'Extra Large' }
          ]
        }
      ]
    },
    {
      title: 'Audio & Media',
      icon: Volume2,
      settings: [
        {
          key: 'autoPlay',
          label: 'Auto-play Chants',
          description: 'Automatically play Sanskrit chants when available',
          type: 'toggle'
        },
        {
          key: 'volume',
          label: 'Audio Volume',
          description: 'Adjust the volume for chants and audio content',
          type: 'slider',
          min: 0,
          max: 100
        }
      ]
    },
    {
      title: 'Language & Region',
      icon: Globe,
      settings: [
        {
          key: 'language',
          label: 'Content Language',
          description: 'Choose your preferred language for translations',
          type: 'select',
          options: [
            { value: 'english', label: 'English' },
            { value: 'hindi', label: 'Hindi' },
            { value: 'sanskrit', label: 'Sanskrit' },
            { value: 'tamil', label: 'Tamil' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-primary mb-2">Settings</h1>
          <p className="text-earth-600 text-lg">Customize your Veda reading experience</p>
        </div>

        {/* Settings Groups */}
        <div className="space-y-8">
          {settingsGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.title} className="bg-glass rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 border-b border-gold-200/20">
                  <h2 className="font-serif text-2xl font-bold text-primary flex items-center">
                    <GroupIcon className="w-6 h-6 mr-3 text-gold-500" />
                    {group.title}
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    {group.settings.map((setting, settingIndex) => (
                      <div key={setting.key} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
                        <div className="flex-1 mr-4">
                          <h3 className="font-semibold text-primary mb-1">{setting.label}</h3>
                          <p className="text-earth-600 text-sm">{setting.description}</p>
                        </div>
                        
                        <div className="flex-shrink-0">
                          {setting.type === 'toggle' && (
                            <button
                              onClick={() => handleToggle(setting.key)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 ${
                                settings[setting.key as keyof typeof settings] ? 'bg-gold-500' : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  settings[setting.key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          )}
                          
                          {setting.type === 'select' && setting.options && (
                            <select
                              value={settings[setting.key as keyof typeof settings] as string}
                              onChange={(e) => setSettings(prev => ({ ...prev, [setting.key]: e.target.value }))}
                              className="border border-gold-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                            >
                              {setting.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          )}
                          
                          {setting.type === 'slider' && (
                            <div className="flex items-center space-x-3">
                              <input
                                type="range"
                                min={setting.min}
                                max={setting.max}
                                value={settings[setting.key as keyof typeof settings] as number}
                                onChange={(e) => handleSliderChange(setting.key, parseInt(e.target.value))}
                                className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                              />
                              <span className="text-sm font-medium text-primary min-w-[3rem] text-right">
                                {settings[setting.key as keyof typeof settings]}%
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Account Settings */}
        <div className="bg-glass rounded-2xl shadow-xl mt-8">
          <div className="p-6 border-b border-gold-200/20">
            <h2 className="font-serif text-2xl font-bold text-primary flex items-center">
              <User className="w-6 h-6 mr-3 text-gold-500" />
              Account
            </h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gold-200 hover:border-gold-300 hover:bg-gold-50 transition-all">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 mr-3 text-gold-600" />
                  <span className="font-medium text-primary">Change Password</span>
                </div>
                <span className="text-earth-600">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-maroon-200 hover:border-maroon-300 hover:bg-maroon-50 transition-all">
                <div className="flex items-center">
                  <Monitor className="w-5 h-5 mr-3 text-maroon-600" />
                  <span className="font-medium text-primary">Export Reading Data</span>
                </div>
                <span className="text-earth-600">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-gold-500 hover:to-gold-700 transition-all transform hover:scale-105 shadow-lg">
            Save All Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;