import React from 'react';
import { useLanguage } from '../context/hook';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  OH Tech
                </span>
                <p className="mt-4 text-slate-400 max-w-sm">
                    {t.hero.subtitle}
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-semibold mb-4">{t.nav.services}</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Desktop Software</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4">Social</h4>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
                </div>
            </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {year} OH Tech. {t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;