import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaServer, FaDatabase, FaBrain, FaChartLine } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: React.ReactNode;
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: "Real-Time Stock Market Data Pipeline",
      description: "Designed a scalable Kafka-based streaming pipeline on AWS for high-throughput time-series data ingestion, cataloging, and querying of stock market data to process thousands of records per minute with sub-second latency in real-time.",
      technologies: ["Kafka", "AWS EC2", "AWS S3", "AWS Glue", "AWS Athena", "Python"],
      features: [
        "Real-time data processing with sub-second latency",
        "Scalable Kafka streaming architecture",
        "AWS cloud infrastructure integration",
        "High-throughput data ingestion (thousands of records/minute)"
      ],
      icon: <FaChartLine className="text-blue-400" size={32} />,
      category: "Data Engineering"
    },
    {
      title: "Personal Finance Analytics Platform",
      description: "Designed a backend microservices-based financial analytics platform with webhook ingestion, background sync jobs, and REST APIs for cashflow and budgeting, containerized with Docker and monitored with Prometheus.",
      technologies: ["FastAPI", "PostgreSQL", "Plaid API", "Redis", "Docker", "CI/CD", "Prometheus"],
      features: [
        "Microservices architecture",
        "Real-time financial data sync",
        "Cashflow and budgeting analytics",
        "Docker containerization with monitoring"
      ],
      icon: <FaServer className="text-blue-400" size={32} />,
      category: "Backend Development"
    },
    {
      title: "Multi-Document RAG Query Chatbot",
      description: "Developed a retrieval-augmented Q&A System integrating FAISS vector DB for semantic search and modular parsing pipelines. Delivered a React-based responsive UI with API backend, enabling scalable document querying and real-time response generation.",
      technologies: ["LangChain", "GPT-4", "FAISS", "React", "Python", "REST API"],
      features: [
        "Semantic search with FAISS vector DB",
        "Multi-document processing",
        "Real-time Q&A responses",
        "React-based responsive UI"
      ],
      icon: <FaBrain className="text-blue-400" size={32} />,
      category: "AI/ML"
    },
    {
      title: "AI-Powered Web Data Extraction Tool",
      description: "Engineered Python modules leveraging APIs and scripting for automated data extraction and LLM parsing for workflow automation. Integrated advanced web scraping with intelligent data processing.",
      technologies: ["Python", "Selenium", "BeautifulSoup", "LangChain", "PyPI", "LLama"],
      features: [
        "Automated web data extraction",
        "LLM-powered data parsing",
        "Workflow automation",
        "Scalable Python modules"
      ],
      icon: <FaDatabase className="text-blue-400" size={32} />,
      category: "Data Extraction"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            data engineering, and AI/ML applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <span className="text-sm font-medium text-blue-400 bg-blue-900/20 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
