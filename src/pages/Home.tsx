import { ArrowRight, BookOpen, Scroll, Users, Sparkles } from "lucide-react";
import VedaTimeline from "../components/VedaTimeline";
import ResourceCards from "../components/ResourceCards";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6 text-shadow">
            Ancient Wisdom for the{" "}
            <span className="bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">
              Modern Seeker
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-earth-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Embark on a transformative journey through the sacred texts that
            have guided humanity for millennia. Discover the timeless teachings
            of the Vedas, beautifully presented for today's spiritual explorer.
          </p>
          <button className="group bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-gold-500 hover:to-gold-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center mx-auto space-x-2">
            <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Start Reading the Vedas</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gold-100 to-gold-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-10 h-10 text-gold-700" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                1,000+ Verses
              </h3>
              <p className="text-earth-600">Sacred hymns and mantras</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-maroon-100 to-maroon-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Scroll className="w-10 h-10 text-maroon-700" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                4 Vedas
              </h3>
              <p className="text-earth-600">Complete sacred collections</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-sage-100 to-sage-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-sage-700" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                10,000+ Seekers
              </h3>
              <p className="text-earth-600">Active learning community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Journey Through Knowledge
            </h2>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto">
              Follow the sacred path through the ancient wisdom traditions. Each
              step reveals deeper insights into the nature of existence and
              consciousness.
            </p>
          </div>
          <VedaTimeline />
        </div>
      </section>

      {/* Resource Cards Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-gold-500 mr-2" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                Explore Sacred Texts
              </h2>
            </div>
            <p className="text-xl text-earth-600 max-w-3xl mx-auto">
              Dive deeper into the vast ocean of Vedic literature. From ancient
              manuscripts to philosophical treatises, discover the treasures of
              spiritual wisdom.
            </p>
          </div>
          <ResourceCards />
        </div>
      </section>
    </div>
  );
};

export default Home;
