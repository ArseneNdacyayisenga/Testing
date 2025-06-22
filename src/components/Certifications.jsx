import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Responsive Web Design Certification',
      description: 'Comprehensive certification covering modern responsive design principles, CSS Grid, Flexbox, and mobile-first development approaches.',
      color: 'blue'
    },
    {
      title: 'Front End Development Libraries Certification',
      description: 'Advanced certification focusing on modern JavaScript frameworks and libraries including React, Redux, and popular development tools.',
      color: 'teal'
    },
    {
      title: 'Legacy JavaScript Algorithms and Data Structure Certification',
      description: 'Fundamental certification covering core JavaScript concepts, algorithms, data structures, and problem-solving techniques.',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${getColorClasses(cert.color)} p-6 group-hover:scale-105 transition-transform duration-300`}>
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <button className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-200">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {cert.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      Verified Certification
                    </span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;