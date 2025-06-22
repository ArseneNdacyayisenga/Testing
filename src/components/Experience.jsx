import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-600"></div>
            
            <div className="relative flex items-start mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center shadow-lg z-10">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              
              <div className="ml-8 bg-white rounded-lg shadow-md p-8 w-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Technical Support Engineer Intern
                  </h3>
                  <div className="flex items-center text-teal-600 font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>March 2025 – Present</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-teal-700 mb-4">
                  Teknowledge
                </h4>
                
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Gained valuable hands-on experience in technical support and problem-solving within a professional technology environment. This role strengthened my analytical thinking and communication skills while working with various technologies and client solutions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Responsibilities</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Technical troubleshooting and support</li>
                        <li>• Client communication and assistance</li>
                        <li>• System analysis and problem resolution</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Skills Developed</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Problem-solving methodologies</li>
                        <li>• Professional communication</li>
                        <li>• Technical documentation</li>
                      </ul>
                    </div>
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

export default Experience;
