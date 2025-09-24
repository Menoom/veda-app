import React, { useState } from 'react';
import { Calendar, Book, Clock, TrendingUp, Award, Target, Filter } from 'lucide-react';

const History = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedVeda, setSelectedVeda] = useState('all');

  const readingHistory = [
    {
      date: '2024-01-15',
      veda: 'Rigveda',
      chapter: 'Mandala 1, Hymn 15',
      duration: 45,
      verses: 23,
      type: 'completed'
    },
    {
      date: '2024-01-14',
      veda: 'Yajurveda',
      chapter: 'Chapter 7',
      duration: 35,
      verses: 18,
      type: 'in-progress'
    },
    {
      date: '2024-01-13',
      veda: 'Samaveda',
      chapter: 'Melody 12',
      duration: 25,
      verses: 12,
      type: 'completed'
    },
    {
      date: '2024-01-12',
      veda: 'Rigveda',
      chapter: 'Mandala 1, Hymn 14',
      duration: 50,
      verses: 27,
      type: 'completed'
    },
    {
      date: '2024-01-11',
      veda: 'Atharvaveda',
      chapter: 'Book 1, Hymn 5',
      duration: 30,
      verses: 15,
      type: 'completed'
    }
  ];

  const achievements = [
    {
      title: '45-Day Streak',
      description: 'Maintained daily reading for 45 consecutive days',
      date: '2024-01-15',
      type: 'streak',
      color: 'gold'
    },
    {
      title: 'Rigveda Scholar',
      description: 'Completed 85% of Rigveda',
      date: '2024-01-10',
      type: 'progress',
      color: 'sage'
    },
    {
      title: 'Early Bird',
      description: 'Read for 7 days in a row before 8 AM',
      date: '2024-01-08',
      type: 'habit',
      color: 'maroon'
    }
  ];

  const weeklyStats = [
    { day: 'Mon', minutes: 45, verses: 23 },
    { day: 'Tue', minutes: 35, verses: 18 },
    { day: 'Wed', minutes: 25, verses: 12 },
    { day: 'Thu', minutes: 50, verses: 27 },
    { day: 'Fri', minutes: 30, verses: 15 },
    { day: 'Sat', minutes: 60, verses: 32 },
    { day: 'Sun', minutes: 40, verses: 22 }
  ];

  const maxMinutes = Math.max(...weeklyStats.map(stat => stat.minutes));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getVedaColor = (veda: string) => {
    const colors = {
      'Rigveda': 'text-gold-600 bg-gold-100',
      'Yajurveda': 'text-maroon-600 bg-maroon-100',
      'Samaveda': 'text-sage-600 bg-sage-100',
      'Atharvaveda': 'text-earth-600 bg-earth-100'
    };
    return colors[veda as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-primary mb-2">Reading History</h1>
          <p className="text-earth-600 text-lg">Track your journey through ancient wisdom</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-glass rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-gold-500" />
              <span className="text-xs text-earth-500 bg-gold-100 px-2 py-1 rounded-full">This Week</span>
            </div>
            <div className="text-2xl font-bold text-primary mb-1">285 min</div>
            <div className="text-earth-600 text-sm">Total Reading Time</div>
          </div>
          
          <div className="bg-glass rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Book className="w-8 h-8 text-sage-500" />
              <span className="text-xs text-earth-500 bg-sage-100 px-2 py-1 rounded-full">This Week</span>
            </div>
            <div className="text-2xl font-bold text-primary mb-1">149</div>
            <div className="text-earth-600 text-sm">Verses Read</div>
          </div>
          
          <div className="bg-glass rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-maroon-500" />
              <span className="text-xs text-earth-500 bg-maroon-100 px-2 py-1 rounded-full">Goal</span>
            </div>
            <div className="text-2xl font-bold text-primary mb-1">85%</div>
            <div className="text-earth-600 text-sm">Weekly Target</div>
          </div>
          
          <div className="bg-glass rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-earth-500" />
              <span className="text-xs text-earth-500 bg-earth-100 px-2 py-1 rounded-full">Streak</span>
            </div>
            <div className="text-2xl font-bold text-primary mb-1">45</div>
            <div className="text-earth-600 text-sm">Days</div>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="bg-glass rounded-2xl p-8 mb-8 shadow-xl">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-gold-500" />
            Weekly Reading Activity
          </h2>
          
          <div className="flex items-end space-x-4 h-48 mb-4">
            {weeklyStats.map((stat, index) => (
              <div key={stat.day} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-gold-400 to-gold-600 rounded-t-lg transition-all duration-300 hover:from-gold-500 hover:to-gold-700 relative group"
                  style={{ height: `${(stat.minutes / maxMinutes) * 100}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.minutes}min
                  </div>
                </div>
                <div className="text-sm font-medium text-primary mt-2">{stat.day}</div>
                <div className="text-xs text-earth-500">{stat.verses} verses</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reading History */}
          <div className="lg:col-span-2">
            <div className="bg-glass rounded-2xl shadow-xl">
              <div className="p-6 border-b border-gold-200/20">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-bold text-primary">Recent Sessions</h2>
                  <div className="flex space-x-2">
                    <select 
                      value={selectedVeda}
                      onChange={(e) => setSelectedVeda(e.target.value)}
                      className="border border-gold-200 rounded-lg px-3 py-1 text-sm bg-white"
                    >
                      <option value="all">All Vedas</option>
                      <option value="Rigveda">Rigveda</option>
                      <option value="Yajurveda">Yajurveda</option>
                      <option value="Samaveda">Samaveda</option>
                      <option value="Atharvaveda">Atharvaveda</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {readingHistory.map((session, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                          <Book className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getVedaColor(session.veda)}`}>
                            {session.veda}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            session.type === 'completed' ? 'bg-sage-100 text-sage-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {session.type === 'completed' ? 'Completed' : 'In Progress'}
                          </span>
                        </div>
                        <div className="font-semibold text-primary mb-1">{session.chapter}</div>
                        <div className="text-sm text-earth-600">
                          {session.duration} minutes • {session.verses} verses • {formatDate(session.date)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <div className="bg-glass rounded-2xl shadow-xl">
              <div className="p-6 border-b border-gold-200/20">
                <h2 className="font-serif text-2xl font-bold text-primary flex items-center">
                  <Award className="w-6 h-6 mr-2 text-gold-500" />
                  Recent Achievements
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => {
                    const colorMap = {
                      gold: 'bg-gold-500',
                      sage: 'bg-sage-500',
                      maroon: 'bg-maroon-500'
                    };
                    
                    return (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-white/50">
                        <div className={`w-10 h-10 ${colorMap[achievement.color as keyof typeof colorMap]} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-primary mb-1">{achievement.title}</div>
                          <div className="text-sm text-earth-600 mb-2">{achievement.description}</div>
                          <div className="text-xs text-earth-500">{formatDate(achievement.date)}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;