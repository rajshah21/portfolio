import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaTrophy, FaBookOpen, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  gpa: string;
  duration: string;
  achievements: string[];
  coursework: string[];
  icon: React.ReactNode;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const educationItems: EducationItem[] = [
    {
      degree: "Master of Science, Business Analytics",
      institution: "University of Illinois Chicago",
      location: "Chicago, USA",
      gpa: "4.0/4.0",
      duration: "Jan 2023 – Dec 2024",
      achievements: [
        "2x Full Semester Assistantships",
        "Best Capstone Project Award (Fall 2024)",
        "TA in Fall 2023"
      ],
      coursework: [
        "Data Mining",
        "Machine Learning & Statistics", 
        "Deep Learning",
        "Data Structures",
        "Object Oriented Programming"
      ],
      icon: <FaGraduationCap className="text-blue-400" size={24} />
    },
    {
      degree: "Bachelor of Engineering, Computer Science",
      institution: "Gujarat Technological University (GTU)",
      location: "Gujarat, India",
      gpa: "9.76/10",
      duration: "Aug 2018 - Jun 2022",
      achievements: [
        "Graduated in Top 0.1% in 30,000+ students at GTU demonstrating academic performance"
      ],
      coursework: [],
      icon: <FaGraduationCap className="text-blue-400" size={24} />
    }
  ];

  return (
    <section id="education" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey in Computer Science and Business Analytics, 
            demonstrating excellence in both Technical and Analytical domains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {educationItems.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Education Card */}
              <motion.div 
                className="bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/30 relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleCard(index)}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Header */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-600 p-3 rounded-full mr-4 shadow-lg">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-blue-400 font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-400"
                    >
                      {expandedCard === index ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                    </motion.div>
                  </div>
                  
                  {/* Key Info Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-blue-400 font-bold text-lg">{edu.gpa}</div>
                      <div className="text-gray-400 text-sm">GPA</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-white font-semibold text-sm">{edu.duration}</div>
                      <div className="text-gray-400 text-sm">Duration</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-white font-semibold text-sm">{edu.location}</div>
                      <div className="text-gray-400 text-sm">Location</div>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                        {/* Achievements */}
                        {edu.achievements.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <FaTrophy className="text-blue-400 mr-2" size={18} />
                              Achievements
                            </h4>
                            <div className="space-y-3">
                              {edu.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-start bg-gray-800/30 rounded-lg p-3">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-300 text-sm">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Coursework */}
                        {edu.coursework.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                              <FaBookOpen className="text-blue-400 mr-2" size={18} />
                              Key Coursework
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course, courseIndex) => (
                                <span
                                  key={courseIndex}
                                  className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-600/30 transition-colors duration-200"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
