import { Book, Music, Flame, Zap, Lightbulb } from "lucide-react";

const VedaTimeline = () => {
  const vedas = [
    {
      name: "Rigveda",
      icon: Book,
      description: "The foundation of all Vedic knowledge",
      color: "gold",
      progress: 85,
      verses: "1,028 Hymns",
    },
    {
      name: "Yajurveda",
      icon: Flame,
      description: "Sacred rituals and ceremonial practices",
      color: "maroon",
      progress: 60,
      verses: "1,975 Mantras",
    },
    {
      name: "Samaveda",
      icon: Music,
      description: "Musical melodies and chants",
      color: "sage",
      progress: 45,
      verses: "1,549 Verses",
    },
    {
      name: "Atharvaveda",
      icon: Zap,
      description: "Practical wisdom for daily life",
      color: "earth",
      progress: 30,
      verses: "760 Hymns",
    },
    {
      name: "Upanishads",
      icon: Lightbulb,
      description: "Philosophical insights and meditation",
      color: "gold",
      progress: 20,
      verses: "108 Texts",
    },
  ];

  const getColorClasses = (color: string, type: "bg" | "text" | "border") => {
    const colorMap = {
      gold: {
        bg: "bg-gold-500",
        text: "text-gold-600",
        border: "border-gold-300",
      },
      maroon: {
        bg: "bg-maroon-500",
        text: "text-maroon-600",
        border: "border-maroon-300",
      },
      sage: {
        bg: "bg-sage-500",
        text: "text-sage-600",
        border: "border-sage-300",
      },
      earth: {
        bg: "bg-earth-500",
        text: "text-earth-600",
        border: "border-earth-300",
      },
    };
    return colorMap[color as keyof typeof colorMap][type];
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gold-300 via-maroon-300 to-sage-300 transform -translate-x-1/2"></div>

      <div className="space-y-16">
        {vedas.map((veda, index) => {
          const Icon = veda.icon;
          const isEven = index % 2 === 0;

          return (
            <div key={veda.name} className="relative group">
              {/* Desktop Layout */}
              <div
                className={`hidden md:flex items-center ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-1/2 ${
                    isEven ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                      {veda.name}
                    </h3>
                    <p className="text-earth-600 mb-4">{veda.description}</p>
                    <div className="text-sm text-earth-500 mb-4">
                      {veda.verses}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-earth-600">Progress</span>
                        <span className="text-sm font-semibold text-primary">
                          {veda.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${getColorClasses(
                            veda.color,
                            "bg"
                          )}`}
                          style={{ width: `${veda.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <button
                      className={`px-4 py-2 rounded-lg transition-all duration-200 ${getColorClasses(
                        veda.color,
                        "text"
                      )} hover:bg-opacity-10 hover:bg-current`}
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>

                {/* Central Icon */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 ${getColorClasses(
                      veda.color,
                      "bg"
                    )} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-1/2"></div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${getColorClasses(
                      veda.color,
                      "bg"
                    )} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 bg-glass rounded-xl p-4 shadow-lg">
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">
                      {veda.name}
                    </h3>
                    <p className="text-earth-600 mb-3">{veda.description}</p>
                    <div className="text-sm text-earth-500 mb-3">
                      {veda.verses}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-earth-600">Progress</span>
                        <span className="text-sm font-semibold text-primary">
                          {veda.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-300 ${getColorClasses(
                            veda.color,
                            "bg"
                          )}`}
                          style={{ width: `${veda.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <button
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${getColorClasses(
                        veda.color,
                        "text"
                      )} hover:bg-opacity-10 hover:bg-current`}
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VedaTimeline;
