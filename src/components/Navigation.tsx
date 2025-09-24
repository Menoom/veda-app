import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  User,
  Settings,
  History,
  Compass,
  Menu,
  X,
  BookOpen,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home", icon: BookOpen },
    { path: "/profile", name: "Profile", icon: User },
    { path: "/settings", name: "Settings", icon: Settings },
    { path: "/history", name: "History", icon: History },
    { path: "/explore", name: "Explore Paths", icon: Compass },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-glass shadow-lg sticky top-0 z-50 border-b border-gold-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif font-bold text-2xl text-primary group-hover:text-gold-600 transition-colors">
              Veda-Anth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(1).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-gold-100 text-gold-700 shadow-md"
                      : "text-primary hover:text-gold-600 hover:bg-gold-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-gold-600 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gold-200/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-gold-100 text-gold-700"
                      : "text-primary hover:text-gold-600 hover:bg-gold-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
