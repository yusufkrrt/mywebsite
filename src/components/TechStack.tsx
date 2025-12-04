import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/hook';
import { Layers } from 'lucide-react';

const TechStack: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="tech" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-slate-800 shadow-md shadow-slate-900/5 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold">
            <Layers size={16} />
            {t.techStack.subtitle}
          </div>
          <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t.techStack.title}
          </h2>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="flex sm:hidden overflow-x-auto overflow-y-hidden gap-3 pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{touchAction: 'manipulation'}}>
          {t.techStack.badges.map((badge, index) => (
            <motion.div
              key={`mobile-${badge.name}-${badge.category}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-900/5 w-[calc(50vw-1.5rem)] max-w-[200px] snap-start flex-shrink-0"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-500">
                {badge.category}
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                {badge.name}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Desktop: Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {t.techStack.badges.map((badge, index) => (
            <motion.div
              key={`${badge.name}-${badge.category}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-900/5"
            >
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
                {badge.category}
              </p>
              <h3 className="mt-2 text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                {badge.name}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
