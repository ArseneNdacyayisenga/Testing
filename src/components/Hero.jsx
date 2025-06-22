import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 flex items-center justify-center text-white relative">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Ndacyayisenga Shema
          <span className="block text-4xl md:text-6xl text-teal-300 mt-2">
            Arsene
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Software Engineering Student & Problem Solver
        </p>
        <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-3xl mx-auto">
          Goal-oriented developer passionate about learning new technologies and solving complex problems through innovative software solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
          >
            Learn More About Me
          </a>
          <a
            href="#contact"
            className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;