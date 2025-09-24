import {
  User,
  Award,
  BookOpen,
  Calendar,
  TrendingUp,
  Star,
} from "lucide-react";

const Profile = () => {
  const achievements = [
    { name: "Rigveda Scholar", icon: BookOpen, progress: 85, color: "gold" },
    { name: "Daily Reader", icon: Calendar, progress: 100, color: "sage" },
    { name: "Wisdom Seeker", icon: Star, progress: 75, color: "maroon" },
    {
      name: "Community Helper",
      icon: TrendingUp,
      progress: 60,
      color: "earth",
    },
  ];

  const readingStats = [
    { label: "Total Verses Read", value: "2,847", change: "+23 today" },
    { label: "Reading Streak", value: "45 days", change: "Personal best!" },
    { label: "Vedas Completed", value: "2/4", change: "50% complete" },
    { label: "Time Spent", value: "127 hours", change: "+2.5 this week" },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-glass rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="font-serif text-3xl font-bold text-primary mb-2">
                Arjun Sharma
              </h1>
              <p className="text-earth-600 text-lg mb-4">
                Dedicated Seeker of Ancient Wisdom
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm">
                  Level 5 Scholar
                </span>
                <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm">
                  45 Day Streak
                </span>
                <span className="px-3 py-1 bg-maroon-100 text-maroon-700 rounded-full text-sm">
                  Rigveda Expert
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">127</div>
              <div className="text-earth-600">Hours Read</div>
            </div>
          </div>
        </div>

        {/* Reading Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {readingStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-glass rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-2xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-earth-600 text-sm mb-1">{stat.label}</div>
              <div className="text-gold-600 text-xs font-medium">
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-glass rounded-2xl p-8 shadow-xl">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center">
            <Award className="w-6 h-6 mr-2 text-gold-500" />
            Achievements & Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const colorClasses = {
                gold: "bg-gold-500",
                sage: "bg-sage-500",
                maroon: "bg-maroon-500",
                earth: "bg-earth-500",
              };

              return (
                <div
                  key={achievement.name}
                  className="p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-colors"
                >
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-10 h-10 ${
                        colorClasses[
                          achievement.color as keyof typeof colorClasses
                        ]
                      } rounded-lg flex items-center justify-center mr-3`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary">
                      {achievement.name}
                    </h3>
                  </div>

                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-earth-600">Progress</span>
                      <span className="text-primary font-medium">
                        {achievement.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          colorClasses[
                            achievement.color as keyof typeof colorClasses
                          ]
                        }`}
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-glass rounded-2xl p-8 mt-8 shadow-xl">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6">
            Recent Reading Activity
          </h2>
          <div className="space-y-4">
            {[
              {
                text: "Completed Chapter 3 of Rigveda",
                time: "2 hours ago",
                type: "completed",
              },
              {
                text: "Started reading Yajurveda Samhita",
                time: "1 day ago",
                type: "started",
              },
              {
                text: "Achieved 45-day reading streak",
                time: "2 days ago",
                type: "achievement",
              },
              {
                text: "Finished Upanishad meditation section",
                time: "3 days ago",
                type: "completed",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    activity.type === "completed"
                      ? "bg-sage-500"
                      : activity.type === "started"
                      ? "bg-gold-500"
                      : "bg-maroon-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <div className="text-primary font-medium">
                    {activity.text}
                  </div>
                  <div className="text-earth-500 text-sm">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
