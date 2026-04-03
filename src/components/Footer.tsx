import React from 'react';
import {Link,Code2} from 'lucide-react';

interface FooterProps {
  scrollTo: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollTo }) => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Anandhan V</h3>
            <p className="text-gray-400 leading-relaxed">Full-Stack Developer passionate about creating impactful web solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("about")} className="hover:text-white transition-colors text-base">About</button></li>
              <li><button onClick={() => scrollTo("skills")} className="hover:text-white transition-colors text-base">Skills</button></li>
              <li><button onClick={() => scrollTo("projects")} className="hover:text-white transition-colors text-base">Projects</button></li>
              <li><button onClick={() => scrollTo("contact")} className="hover:text-white transition-colors text-base">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:anandhan@pepul.com" className="hover:text-white transition-colors text-base">anandhan@pepul.com</a></li>
              <li><a href="tel:+917010190110" className="hover:text-white transition-colors text-base">+91 7010190110</a></li>
            </ul>
          </div>
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://linkedin.com/in/anandhan-v" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Link className="w-6 h-6" />
              </a>
              <a href="https://github.com/anandhanv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Code2 className="w-6 h-6" /> {/* Using Code2 as a generic code/dev icon */}
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Anandhan V. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;