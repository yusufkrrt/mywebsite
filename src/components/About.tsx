import React from 'react';
import { useLanguage } from '../context/hook';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import logo from '../assets/logo.png';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stat1Label, value: t.about.stat1 },
    { label: t.about.stat2Label, value: t.about.stat2 },
    { label: t.about.stat3Label, value: t.about.stat3 },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={logo} 
                alt="HYzon Tech Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent"></div>
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t.about.title}
            </h2>

            {/* <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md shadow-blue-500/5 w-fit">
              <img src={logo} alt="HYzon Tech logo" className="h-16 w-16 object-contrain" />
              <div>
                <p className="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-300">HYzon Tech</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Future ready digital studio</p>
              </div>
            </div> */}
            
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <ul className="space-y-3">
              {['Clean Architecture', 'Modern Security', 'SEO Optimized', 'Mobile First'].map((item) => (
                <li key={item} className="flex items-center text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;