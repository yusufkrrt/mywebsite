import React from 'react';
import { useLanguage } from '../context/hook';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Globe, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: t.services.web.title,
      description: t.services.web.desc,
      delay: 0.1
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      title: t.services.mobile.title,
      description: t.services.mobile.desc,
      delay: 0.2
    },
    {
      icon: <Monitor className="h-8 w-8 text-indigo-500" />,
      title: t.services.desktop.title,
      description: t.services.desktop.desc,
      delay: 0.3
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
      title: t.services.custom.title,
      description: t.services.custom.desc,
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="bg-slate-50 dark:bg-slate-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;