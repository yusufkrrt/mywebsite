import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/hook';
import { ArrowUpRight, LineChart } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              <LineChart size={16} />
              {t.portfolio.cta}
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t.portfolio.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              {t.portfolio.subtitle}
            </p>
          </div>
          <a
            href="#contact"
            className="self-start lg:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold shadow-lg shadow-blue-500/20"
          >
            {t.hero.cta}
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.portfolio.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur p-6 shadow-xl shadow-slate-900/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {project.category}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                {project.result}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
