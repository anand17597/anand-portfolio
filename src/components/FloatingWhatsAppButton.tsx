import React from 'react';
import {MessageCircle} from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};

export default FloatingWhatsAppButton;