import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const experiences: ExperienceItem[] = [
    {
      company: "CCC Intelligent Solutions",
      position: "Software Engineer (Capstone Project)",
      location: "Chicago, US",
      duration: "Aug 2024 – Dec 2024",
      description: [
        "Built full-stack features in Python and Java (OOP) with React frontends, optimizing GPU pipelines (PyTorch) to improve inference by 6×.",
        "Applied LoRA fine-tuning on diffusion models to integrate AI into decision-making workflows, improving FID score by 47%.",
        "Implemented high-performance REST APIs in Python, integrating unit/integration testing using PyTest, observability (logging, Prometheus), and monitoring pipelines.",
        "Orchestrated production-ready APIs in Agile (Scrum, Kanban) sprints, contributing to SDLC workflows, code reviews, and peer collaboration."
      ],
      technologies: ["Python", "Java", "React", "PyTorch", "REST APIs", "PyTest", "Prometheus", "Agile"],
      achievements: ["6× GPU Pipeline Optimization", "47% FID Score Improvement", "Production-ready AI/ML Pipelines"]
    },
    {
      company: "University of Illinois Chicago",
      position: "Research Assistant",
      location: "Chicago, US",
      duration: "Sep 2023 – Present",
      description: [
        "Automated Python and API-based ETL pipelines for large-scale student evaluation datasets, improving analytical reporting speed by 95%.",
        "Built interactive dashboards (Tableau) and set up observability with Prometheus, enabling student curriculum performance monitoring.",
        "Delivered analysis to faculty and stakeholders through presentations and documentation, fostering cross-functional alignment."
      ],
      technologies: ["Python", "ETL Pipelines", "Tableau", "Prometheus", "APIs", "Data Analysis"],
      achievements: ["95% Reporting Speed Improvement", "Large-scale Data Processing", "Stakeholder Presentations"]
    },
    {
      company: "D'Souza Data Labs",
      position: "Software Engineer",
      location: "Gujarat, India",
      duration: "Jan 2022 - Dec 2022",
      description: [
        "Designed scalable backend microservices with Java and Spring Boot, deploying on AWS (EC2, Lambda, S3, DynamoDB) with CI/CD pipelines.",
        "Processed millions of time-series transactions with PySpark and Python, enabling credit risk modeling with 88% accuracy.",
        "Achieved a 20% reduction in client losses (~$200K monthly) by implementing real-time fraud detection and risk analysis models.",
        "Implemented CI/CD pipelines with Docker and GitHub Actions for Java microservices, reinforcing SDLC compliance."
      ],
      technologies: ["Java", "Spring Boot", "AWS", "PySpark", "Python", "Docker", "GitHub Actions", "CI/CD"],
      achievements: ["35% Request Throughput Improvement", "88% Credit Risk Accuracy", "$200K Monthly Loss Reduction"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/30 cursor-pointer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => toggleCard(index)}
              >
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-600 p-3 rounded-full mr-4 shadow-lg">
                        <FaBuilding className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
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
                  
                  {/* Key Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-300 space-y-1 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-400" size={14} />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-blue-400" size={14} />
                      {exp.duration}
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
                        {/* Key Responsibilities */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.description.map((desc, descIndex) => (
                              <li key={descIndex} className="flex items-start">
                                <span className="text-blue-400 mr-2 mt-1">•</span>
                                <span className="text-gray-300">{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <span
                                key={achIndex}
                                className="bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-800"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies Used */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
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

export default Experience;
