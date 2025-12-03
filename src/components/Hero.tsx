import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../context/hook';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, ShieldCheck, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const heroWords = useMemo(() => t.hero.title.split(' ').filter(Boolean), [t.hero.title]);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const directionRef = useRef(1);
  const floatingBadges = useMemo(() => {
    const base = [
      {
        id: 'badge-ai',
        position: 'top-24 right-6',
        delay: 0,
        icon: <Sparkles size={18} />,
        copy: {
          tr: { label: 'Yapay Zeka', description: 'Gerçek zamanlı içgörüler' },
          en: { label: 'AI Ready', description: 'Real-time insights' },
        },
      },
      {
        id: 'badge-security',
        position: 'bottom-32 left-10',
        delay: 0.4,
        icon: <ShieldCheck size={18} />,
        copy: {
          tr: { label: 'Güvenli Mimari', description: 'Zero trust yaklaşımı' },
          en: { label: 'Secure Architecture', description: 'Zero-trust approach' },
        },
      },
      {
        id: 'badge-performance',
        position: 'top-1/2 left-4',
        delay: 0.8,
        icon: <Cpu size={18} />,
        copy: {
          tr: { label: 'Hızlı Teslim', description: '2 haftada MVP' },
          en: { label: 'Rapid Delivery', description: 'MVP in 2 weeks' },
        },
      },
    ];

    return base.map((badge) => ({
      ...badge,
      label: badge.copy[language as 'tr' | 'en'].label,
      description: badge.copy[language as 'tr' | 'en'].description,
    }));
  }, [language]);

  useEffect(() => {
    if (heroWords.length <= 1) return undefined;
    directionRef.current = 1;
    const interval = setInterval(() => {
      setHighlightIndex((prev) => {
        const next = prev + directionRef.current;
        if (next >= heroWords.length) {
          directionRef.current = -1;
          return prev - 1;
        }
        if (next < 0) {
          directionRef.current = 1;
          return prev + 1;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [heroWords]);

  const activeHighlightIndex = heroWords.length ? Math.min(highlightIndex, heroWords.length - 1) : 0;

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl dark:bg-blue-600/10 mix-blend-multiply dark:mix-blend-normal animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl dark:bg-indigo-600/10 mix-blend-multiply dark:mix-blend-normal animate-blob animation-delay-2000"></div>
      </div>
      {floatingBadges.map((badge, index) => (
        <motion.div
          key={badge.id}
          className={`absolute ${badge.position} pointer-events-none flex items-center gap-3 max-w-[220px] px-4 py-3 rounded-2xl border backdrop-blur bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white shadow-lg shadow-blue-500/10 border-white/40 dark:border-slate-700/80 scale-[0.55] opacity-30 blur-[0.5px] sm:scale-75 sm:opacity-60 sm:blur-0 md:scale-90 md:opacity-80 lg:scale-100 lg:opacity-100`}
          animate={{ y: [-6, 6, -6], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6 + index, repeat: Infinity, repeatType: 'mirror', delay: badge.delay }}
        >
          <div className="p-2 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-500 dark:text-indigo-300">
            {badge.icon}
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400 lg:text-xs">{badge.label}</p>
            <p className="text-xs font-semibold text-slate-900 dark:text-white lg:text-sm">{badge.description}</p>
          </div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
            <Code2 size={16} className="mr-2" />
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            OH Tech v1.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            {heroWords.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className={
                  i === activeHighlightIndex
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500'
                    : 'transition-all duration-500'
                }
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300">
            {t.hero.subtitle}
          </p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/40 flex items-center gap-2 transition-all"
            >
              {t.hero.cta}
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold shadow-md shadow-slate-900/5"
            >
              {t.hero.secondaryCta}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Code Mockup */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 mx-auto max-w-5xl rounded-2xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/10 transform -rotate-1 hover:rotate-0 transition-transform duration-500"
        >
            <div className="rounded-xl bg-slate-800/50 p-4">
                <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2 font-mono text-sm">
                    <div className="flex">
                        <span className="text-pink-500 mr-2">const</span>
                        <span className="text-blue-400 mr-2">OHTech</span>
                        <span className="text-slate-400">=</span>
                        <span className="text-slate-400 text-opacity-50 ml-2">{`{`}</span>
                    </div>
                    <div className="pl-6 flex">
                        <span className="text-purple-400 mr-2">mission:</span>
                        <span className="text-green-400">"Building Future"</span>,
                    </div>
                    <div className="pl-6 flex">
                        <span className="text-purple-400 mr-2">quality:</span>
                        <span className="text-orange-400">100</span>,
                    </div>
                     <div className="pl-6 flex">
                        <span className="text-purple-400 mr-2">secure:</span>
                        <span className="text-blue-500">true</span>
                    </div>
                    <div className="text-slate-400 text-opacity-50">{`}`}</div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;