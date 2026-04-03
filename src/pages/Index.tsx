import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import BackToTopButton from '@/components/BackToTopButton';

const Index: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const whatsappNumber = "917010190110";
  const whatsappMessage = "Hello, I'd like to know more about your services.";

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar navLinks={navLinks} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer scrollTo={scrollTo} />
      <FloatingWhatsAppButton phoneNumber={whatsappNumber} message={whatsappMessage} />
      <BackToTopButton />
    </div>
  );
};

export default Index;