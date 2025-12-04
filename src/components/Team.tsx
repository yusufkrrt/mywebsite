import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/hook';
import { Sparkles } from 'lucide-react';

const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-semibold">
            <Sparkles size={16} />
            {t.team.subtitle}
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t.team.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.team.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur shadow-xl shadow-slate-900/5"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-500 mt-1">{member.title}</p>
              <p className="mt-4 text-slate-600 dark:text-slate-400">{member.bio}</p>
              <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-300">{member.focus}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={`${member.name}-${skill}`}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.team.insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
            >
              <p className="text-sm font-semibold text-blue-500">{insight.title}</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
