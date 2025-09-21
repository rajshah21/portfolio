import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket, FaBolt } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Software Engineer', 'Machine Learning Engineer', 'AI Enthusiast'];
  
  useEffect(() => {
    const current = titles[currentTitle];
    
    if (!isDeleting) {
      if (displayText.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      }
    }
  }, [displayText, isDeleting, currentTitle, titles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="text-blue-400 text-lg font-medium">
              Hey there!, I'm-
            </span>
          </motion.div>
          
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight"
          >
            <div>Raj</div>
            <div>Shah</div>
          </motion.h1>
          
          {/* Cycling Job Title */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-relaxed"
          >
            <span className="font-bold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </motion.div>
          
          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl"
          >
            I develop scalable, impactful solutions, combining software engineering with AI/ML to turn ideas into innovation.
          </motion.div>
          
          
          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex space-x-6"
          >
            <motion.a
              href="https://github.com/rajshah21"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/raj-shah-a40a38203/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:shahraj2100@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={32} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
