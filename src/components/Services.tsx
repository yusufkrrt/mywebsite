import React, { useState } from 'react';
import { useLanguage } from '../context/hook';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Globe, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const closeLabel = language === 'tr' ? 'Kapat' : 'Close';
  const detailLabel = language === 'tr' ? 'Detayları Gör' : 'See details';
  const [activeService, setActiveService] = useState<null | {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
    cta: string;
  }>(null);

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: t.services.web.title,
      description: t.services.web.desc,
      details: t.services.web.details,
      cta: t.services.web.cta,
      delay: 0.1
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      title: t.services.mobile.title,
      description: t.services.mobile.desc,
      details: t.services.mobile.details,
      cta: t.services.mobile.cta,
      delay: 0.2
    },
    {
      icon: <Monitor className="h-8 w-8 text-indigo-500" />,
      title: t.services.desktop.title,
      description: t.services.desktop.desc,
      details: t.services.desktop.details,
      cta: t.services.desktop.cta,
      delay: 0.3
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
      title: t.services.custom.title,
      description: t.services.custom.desc,
      details: t.services.custom.details,
      cta: t.services.custom.cta,
      delay: 0.4
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
              type="button"
              onClick={() => setActiveService(service)}
              className="text-left bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex flex-col h-full"
            >
              <div className="bg-slate-50 dark:bg-slate-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <p className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400">
                {detailLabel}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60" onClick={() => setActiveService(null)}></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 mb-4">
                  {activeService.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{activeService.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{activeService.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300"
              >
                ✕
              </button>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {activeService.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors"
                onClick={() => setActiveService(null)}
              >
                {activeService.cta}
              </a>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
              >
                {closeLabel}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Services;