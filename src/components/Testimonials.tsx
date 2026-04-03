import { lazy } from "react";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Anandhan is an exceptional developer who consistently delivers high-quality work. His problem-solving skills and dedication are truly impressive.",
    name: "Emily R.",
    title: "Tech Lead",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?auto=format&fit=facearea&face=top&w=128&h=128&q=80",
  },
  {
    quote: "Working with Anandhan was a pleasure. He understood our complex requirements and translated them into a seamless, efficient application.",
    name: "David K.",
    title: "CEO",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&face=top&w=128&h=128&q=80",
  },
  {
    quote: "Highly recommend Anandhan for any full-stack development needs. His proficiency in various technologies makes him a valuable asset.",
    name: "Sarah P.",
    title: "Project Manager",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&face=top&w=128&h=128&q=80",
  },
];

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          What Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Hear from those who have experienced the quality and dedication of my work.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white p-8 rounded-xl shadow-lg relative transition-all duration-300 transform"
            >
              <svg className="absolute top-4 left-4 w-10 h-10 text-indigo-200 opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M22 22H2v-2h20v2zM22 18H2v-2h20v2zM22 14H2v-2h20v2zM22 10H2V8h20v2zM22 6H2V4h20v2z"></path></svg>
              <p className="text-lg italic text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center justify-center">
                <img
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  src={testimonial.avatar}
                  alt={`${testimonial.name} profile picture`}
                  loading="lazy"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&face=top&w=128&h=128&q=80')}
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;