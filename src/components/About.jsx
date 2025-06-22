import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I am Ndacyayisenga Shema Arsene, a passionate software engineering student with a strong foundation in problem-solving and continuous learning. My journey in technology is driven by curiosity and a goal-oriented mindset that helps me tackle complex challenges.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Currently pursuing my degree in Software Engineering at Adventist University of Central Africa (AUCA), I have gained valuable real-world experience as a Technical Support Engineer Intern at Teknowledge, where I honed my problem-solving skills and learned to work effectively in professional environments.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I thrive on learning new technologies and methodologies, always seeking opportunities to expand my skill set and contribute meaningfully to innovative projects. My approach combines technical expertise with strong analytical thinking to deliver effective solutions.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl shadow-2xl"></div>
              <div className="absolute inset-4 bg-gray-100 rounded-2xl flex items-center justify-center border-4 border-white shadow-inner">
                <img
                  src="/src/assets/image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
