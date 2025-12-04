import React, { useState } from 'react';
import { useLanguage } from '../context/hook';
import { Github, Twitter, Linkedin, X } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const [activeDoc, setActiveDoc] = useState<'privacy' | 'terms' | null>(null);

  const docs = {
    privacy: {
      title: t.footer.privacy,
      content: t.footer.privacyDescription,
    },
    terms: {
      title: t.footer.terms,
      content: t.footer.termsDescription,
    },
  } as const;

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              HYzon Tech
            </span>
            <p className="mt-4 text-slate-400 max-w-sm">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.nav.services}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Desktop Software</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yusufkrrt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href="https://x.com/" // İstersen kendi X hesabını yaz
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/yusuf-kurt-487b21330"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {year} HYzon Tech. {t.footer.rights}</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              type="button"
              onClick={() => setActiveDoc('privacy')}
              className="hover:text-white transition-colors underline-offset-4"
            >
              {t.footer.privacy}
            </button>

            <button
              type="button"
              onClick={() => setActiveDoc('terms')}
              className="hover:text-white transition-colors underline-offset-4"
            >
              {t.footer.terms}
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {activeDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60"
            onClick={() => setActiveDoc(null)}
          ></div>

          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {docs[activeDoc].title}
              </h3>

              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">
              {docs[activeDoc].content}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
