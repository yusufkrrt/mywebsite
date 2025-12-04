import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/hook';
import { Layers } from 'lucide-react';

const TechStack: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="tech" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-md shadow-slate-900/5 text-slate-700 dark:text-slate-200 text-sm font-semibold">
            <Layers size={16} />
            {t.techStack.subtitle}
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t.techStack.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.techStack.badges.map((badge, index) => (
            <motion.div
              key={`${badge.name}-${badge.category}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-900/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
                {badge.category}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {badge.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
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
