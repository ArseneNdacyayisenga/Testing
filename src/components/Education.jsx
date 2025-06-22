import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Bachelor of Software Engineering
                </h3>
                
                <h4 className="text-xl font-semibold text-teal-700 mb-6">
                  Adventist University of Central Africa (AUCA)
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-teal-600" />
                    <span className="font-medium">April 2022 - Present</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-teal-600" />
                    <span className="font-medium">Currently Enrolled</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-3">Program Focus</h5>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive software engineering program covering modern development methodologies, 
                    programming languages, database management, software architecture, and project management. 
                    Emphasis on practical application through hands-on projects and industry-relevant coursework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;