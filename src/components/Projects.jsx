import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-teal-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">RS</span>
                  </div>
                  <h3 className="text-2xl font-bold">RideShare</h3>
                  <p className="text-blue-100 mt-2">Mobile Application</p>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Ridesharing Application
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Mobile App
                      </span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                        Cost Optimization
                      </span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        User Experience
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
                      <Github className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
                      <ExternalLink className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  An innovative ridesharing application designed to connect users traveling in the same direction, 
                  enabling them to share rides and significantly reduce individual transportation costs. The app 
                  optimizes route matching and provides a seamless booking experience for cost-effective travel.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Smart route matching algorithm</li>
                      <li>• Real-time booking system</li>
                      <li>• Cost-splitting calculations</li>
                      <li>• User safety features</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Impact</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Reduced transportation costs</li>
                      <li>• Improved travel efficiency</li>
                      <li>• Enhanced user connectivity</li>
                      <li>• Sustainable transportation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;