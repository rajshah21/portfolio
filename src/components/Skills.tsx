import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDatabase, FaCloud, FaBrain, FaTools, FaGlobe } from 'react-icons/fa';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-blue-600" size={24} />,
      skills: ["Java", "Python", "R", "C++", "SQL", "HTML", "CSS"],
      color: "blue"
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-green-600" size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"],
      color: "green"
    },
    {
      title: "Tools & DevOps",
      icon: <FaTools className="text-purple-600" size={24} />,
      skills: ["AWS CDK", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Apache Kafka", "Apache Spark","Prometheus", "Terraform"],
      color: "purple"
    },
    {
      title: "Web Technologies",
      icon: <FaGlobe className="text-orange-600" size={24} />,
      skills: ["Spring Boot", "JavaScript", "TypeScript", "Node.js", "ReactJS", "Flask", "Django", "RESTful APIs", "GraphQL"],
      color: "orange"
    },
    {
      title: "Machine Learning",
      icon: <FaBrain className="text-red-600" size={24} />,
      skills: ["Scikit-Learn", "PyTorch", "TensorFlow", "Spark MLlib", "LangChain", "LLM Fine-Tuning", "RAG", "NLP","Diffusion Models"],
      color: "red"
    },
    {
      title: "Cloud & Systems",
      icon: <FaCloud className="text-indigo-600" size={24} />,
      skills: ["AWS", "Distributed Systems", "Database Design", "OOP", "Algorithms", "Data Structures", "SDLC", "Agile"],
      color: "indigo"
    }
  ];

  const certifications = [
    {
      name: "Microsoft Certified – Azure AI Fundamentals",
      issuer: "Microsoft",
      credentialId: "B49FE8-LCC92B",
      year: "2024"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      green: "bg-green-50 text-green-700 border-green-200",
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      orange: "bg-orange-50 text-orange-700 border-orange-200",
      red: "bg-red-50 text-red-700 border-red-200",
      indigo: "bg-indigo-50 text-indigo-700 border-indigo-200"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  return (
    <section id="skills" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Certifications</h3>
          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
                className="bg-gray-900 rounded-xl p-6 mb-4 hover:shadow-xl transition-shadow duration-300 border border-gray-800"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-blue-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-300">
                      Credential ID: {cert.credentialId} • {cert.year}
                    </p>
                  </div>
                  <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-800">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
