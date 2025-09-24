import { useState } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Users,
  Star,
  Clock,
  ArrowRight,
  Compass,
} from "lucide-react";

const ExplorePaths = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const explorationPaths = [
    {
      id: 1,
      title: "Path of Fire Sacrifice",
      subtitle: "Yajurveda Deep Study",
      description:
        "Explore the intricate rituals and ceremonies of Vedic fire sacrifices, understanding their symbolic meaning and spiritual significance.",
      difficulty: "Intermediate",
      duration: "6 weeks",
      participants: 234,
      rating: 4.8,
      category: "Ritual Studies",
      image: "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg",
      topics: ["Mantras", "Fire Rituals", "Sanskrit"],
      color: "maroon",
    },
    {
      id: 2,
      title: "Sacred Sound Journey",
      subtitle: "Samaveda Chanting Mastery",
      description:
        "Learn the ancient art of Vedic chanting and discover how sound vibrations can transform consciousness and promote spiritual growth.",
      difficulty: "Beginner",
      duration: "4 weeks",
      participants: 567,
      rating: 4.9,
      category: "Music & Chanting",
      image:
        "https://images.pexels.com/photos/6963070/pexels-photo-6963070.jpeg",
      topics: ["Chanting", "Music Theory", "Meditation"],
      color: "sage",
    },
    {
      id: 3,
      title: "Cosmic Hymns Explorer",
      subtitle: "Rigveda Philosophy",
      description:
        "Journey through the cosmic hymns that reveal the Vedic understanding of creation, divine forces, and the nature of reality.",
      difficulty: "Advanced",
      duration: "8 weeks",
      participants: 189,
      rating: 4.7,
      category: "Philosophy",
      image:
        "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg",
      topics: ["Cosmology", "Philosophy", "Ancient Wisdom"],
      color: "gold",
    },
    {
      id: 4,
      title: "Healing & Protection",
      subtitle: "Atharvaveda Practical Wisdom",
      description:
        "Discover the practical aspects of Vedic knowledge including healing practices, protective prayers, and daily life applications.",
      difficulty: "Beginner",
      duration: "5 weeks",
      participants: 423,
      rating: 4.6,
      category: "Practical Wisdom",
      image:
        "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg",
      topics: ["Healing", "Daily Practices", "Protection"],
      color: "earth",
    },
    {
      id: 5,
      title: "Meditation Masters Path",
      subtitle: "Upanishads Deep Dive",
      description:
        "Explore the philosophical foundations of meditation and self-realization through the profound teachings of the Upanishads.",
      difficulty: "Advanced",
      duration: "10 weeks",
      participants: 145,
      rating: 4.9,
      category: "Philosophy",
      image:
        "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg",
      topics: ["Meditation", "Self-Realization", "Philosophy"],
      color: "gold",
    },
    {
      id: 6,
      title: "Sanskrit Foundation",
      subtitle: "Language Learning Path",
      description:
        "Build a strong foundation in Sanskrit to better understand and appreciate the original Vedic texts in their authentic form.",
      difficulty: "Beginner",
      duration: "12 weeks",
      participants: 789,
      rating: 4.5,
      category: "Language",
      image:
        "https://images.pexels.com/photos/159832/book-read-reading-books-159832.jpeg",
      topics: ["Sanskrit", "Grammar", "Translation"],
      color: "sage",
    },
  ];

  const categories = [
    "all",
    "Philosophy",
    "Ritual Studies",
    "Music & Chanting",
    "Practical Wisdom",
    "Language",
  ];

  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

  const getColorClasses = (color: string) => {
    const colorMap = {
      gold: {
        bg: "bg-gold-500",
        text: "text-gold-600",
        border: "border-gold-200",
        hover: "hover:border-gold-300",
      },
      maroon: {
        bg: "bg-maroon-500",
        text: "text-maroon-600",
        border: "border-maroon-200",
        hover: "hover:border-maroon-300",
      },
      sage: {
        bg: "bg-sage-500",
        text: "text-sage-600",
        border: "border-sage-200",
        hover: "hover:border-sage-300",
      },
      earth: {
        bg: "bg-earth-500",
        text: "text-earth-600",
        border: "border-earth-200",
        hover: "hover:border-earth-300",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const filteredPaths = explorationPaths.filter((path) => {
    const matchesSearch =
      path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      path.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      path.topics.some((topic) =>
        topic.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || path.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "all" || path.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 flex items-center justify-center">
            <Compass className="w-8 h-8 mr-3 text-gold-500" />
            Explore Learning Paths
          </h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Discover structured learning journeys through different aspects of
            Vedic wisdom. Choose your path based on your interests and spiritual
            goals.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-glass rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search paths, topics, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-earth-500 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gold-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border border-gold-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === "all" ? "All Levels" : difficulty}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-earth-600">
            Showing {filteredPaths.length} of {explorationPaths.length} learning
            paths
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaths.map((path) => {
            const colors = getColorClasses(path.color);
            return (
              <div
                key={path.id}
                className={`bg-glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 ${colors.border} ${colors.hover}`}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium text-white ${colors.bg}`}
                      >
                        {path.category}
                      </span>
                      <div className="flex items-center space-x-1 text-white">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">
                          {path.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-bold text-primary mb-1">
                      {path.title}
                    </h3>
                    <p className={`text-sm font-medium ${colors.text} mb-3`}>
                      {path.subtitle}
                    </p>
                    <p className="text-earth-600 text-sm leading-relaxed">
                      {path.description}
                    </p>
                  </div>

                  {/* Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {path.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-earth-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{path.participants}</span>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        path.difficulty === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : path.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {path.difficulty}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl ${colors.text} border-2 ${colors.border} ${colors.hover} hover:bg-current hover:text-white transition-all duration-200 group`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">Start Learning Path</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredPaths.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              No paths found
            </h3>
            <p className="text-earth-600 mb-6">
              Try adjusting your search criteria or browse all available paths.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedDifficulty("all");
              }}
              className="bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-gold-500 hover:to-gold-700 transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePaths;
