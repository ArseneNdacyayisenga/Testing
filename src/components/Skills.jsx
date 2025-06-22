import React from 'react';
import { Code, Globe, Database, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['JavaScript', 'C', 'C++', 'Python', 'Java'],
      color: 'blue'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React.js', 'HTML', 'CSS', 'jQuery'],
      color: 'teal'
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: ['PostgreSQL', 'PL/SQL'],
      color: 'orange'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git'],
      color: 'green'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-700 border-blue-200',
      teal: 'from-teal-500 to-teal-600 bg-teal-50 text-teal-700 border-teal-200',
      orange: 'from-orange-500 to-orange-600 bg-orange-50 text-orange-700 border-orange-200',
      green: 'from-green-500 to-green-600 bg-green-50 text-green-700 border-green-200'
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} p-6`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`${colorClasses.split('border-')[0]}border ${colorClasses.split('border-')[1]} px-4 py-3 rounded-lg text-center font-medium transition-transform duration-200 hover:scale-105`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;