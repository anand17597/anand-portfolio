import { lazy } from "react";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {ArrowRight} from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With over <span className="font-semibold text-indigo-600">5 years of hands-on experience</span>, I am a passionate Full-Stack and iOS Developer dedicated to building robust and scalable web and mobile applications. My expertise spans both front-end and back-end technologies, allowing me to deliver comprehensive solutions from concept to deployment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I thrive in dynamic environments, constantly learning and applying new technologies to create efficient, user-friendly, and high-performance digital products. My goal is to transform complex ideas into elegant and functional web solutions that drive business success.
            </p>
            <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group">
              Explore My Skills
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=90"
              alt="Anandhan V working on a computer"
              className="rounded-xl shadow-2xl w-full max-w-lg md:max-w-none h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90')}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;