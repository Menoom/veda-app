import React from 'react';
import { FileText, Scroll, BookOpen, ArrowRight } from 'lucide-react';

const ResourceCards = () => {
  const resources = [
    {
      title: 'Manuscripts',
      description: 'Ancient palm leaf manuscripts and sacred texts preserved through centuries',
      icon: FileText,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      count: '1,200+ Texts',
      color: 'gold'
    },
    {
      title: 'Samhitas',
      description: 'Complete collections of hymns, mantras, and ritual formulas',
      icon: Scroll,
      image: 'https://images.pexels.com/photos/3363111/pexels-photo-3363111.jpeg',
      count: '4 Collections',
      color: 'maroon'
    },
    {
      title: 'Additional Readings',
      description: 'Commentaries, interpretations, and modern scholarly works',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
      count: '500+ Resources',
      color: 'sage'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      gold: {
        bg: 'bg-gold-500',
        hover: 'hover:bg-gold-600',
        text: 'text-gold-600',
        from: 'from-gold-400',
        to: 'to-gold-600'
      },
      maroon: {
        bg: 'bg-maroon-500',
        hover: 'hover:bg-maroon-600',
        text: 'text-maroon-600',
        from: 'from-maroon-400',
        to: 'to-maroon-600'
      },
      sage: {
        bg: 'bg-sage-500',
        hover: 'hover:bg-sage-600',
        text: 'text-sage-600',
        from: 'from-sage-400',
        to: 'to-sage-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {resources.map((resource, index) => {
        const Icon = resource.icon;
        const colors = getColorClasses(resource.color);
        
        return (
          <div 
            key={resource.title} 
            className="group bg-glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            {/* Image Header */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={resource.image} 
                alt={resource.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-gradient-to-r ${colors.from} ${colors.to}`}>
                  <Icon className="w-4 h-4 mr-1" />
                  {resource.count}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">{resource.title}</h3>
              </div>
              
              <p className="text-earth-600 mb-6 leading-relaxed">
                {resource.description}
              </p>
              
              <button className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl ${colors.text} border-2 border-current hover:bg-current hover:text-white transition-all duration-200 group-hover:scale-105`}>
                <span className="font-medium">Explore Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResourceCards;