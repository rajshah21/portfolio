import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBolt, FaGamepad, FaTv, FaShuttleVan, FaBaseballBall } from 'react-icons/fa';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - About Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center">
                  <FaBolt className="text-blue-400 mr-4" size={32} />
                  About Me
                </h2>
            
            <div className="space-y-6 text-white leading-relaxed">
              <p className="text-lg">
                I'm <span className="font-semibold">Raj Shah</span>, a Software Engineer specializing in designing and delivering scalable full-stack systems, distributed architectures, and cloud-native applications.
              </p>
              
              <p className="text-lg">
              With a Master’s in Business Analytics from UIC and hands-on experience at CCC Intelligent Solutions, UIC, and D’Souza Data Labs, I’ve built high-performance APIs, event-driven pipelines, and backend microservices that improved system throughput, reliability, and developer efficiency.
              </p>

              <p className="text-lg">
              I also integrate AI/ML where it drives impact likeoptimizing GPU pipelines, fine-tuning models, and building intelligent data workflows, always with a focus on production readiness and scalability. I’m passionate about software engineering that blends performance, maintainability, and innovation across the stack.
              </p>
              
              <p className="text-lg">
                Currently open for opportunities in <span className="text-blue-400 font-semibold"> Full Stack Development,Machine Learning & AI, and Open Source</span>.
              </p>
              
            </div>
          </motion.div>

          {/* Right Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Profile Picture Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gray-800 rounded-full opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                </div>
                
                    {/* Profile Picture */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-700">
                      <img 
                        src="/Profile Photo.jpg" 
                        alt="Raj Shah" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-white text-6xl font-bold">
                          RS
                        </div>
                      </div>
                    </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-60"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
