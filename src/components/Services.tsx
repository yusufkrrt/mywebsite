import React, { useState } from 'react';
import { useLanguage } from '../context/hook';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Globe, ShieldCheck } from 'lucide-react';
import { useDragScroll } from '../hooks/useDragScroll';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const closeLabel = language === 'tr' ? 'Kapat' : 'Close';
  const detailLabel = language === 'tr' ? 'Detayları Gör' : 'See details';
  const dragScrollRef = useDragScroll();
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
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="flex sm:hidden overflow-x-auto overflow-y-hidden gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{touchAction: 'manipulation'}}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col w-[calc(100vw-2rem)] max-w-[320px] snap-start flex-shrink-0"
            >
              <div className="bg-slate-50 dark:bg-slate-900/50 w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveService(service)}
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-left underline underline-offset-2"
              >
                {detailLabel}
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Desktop: Grid on large screens, horizontal drag-scroll on narrow desktop */}
        {/* lg ve üzeri: klasik grid, sm-md arası: yatay şerit + drag-scroll */}
        <div className="hidden sm:block">
          {/* lg+: static grid */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 xl:gap-8">
            {services.map((service, index) => (
              <motion.button
                key={`desktop-grid-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay, duration: 0.5 }}
                whileHover={{ y: -5 }}
                type="button"
                onClick={() => setActiveService(service)}
                className="text-left bg-white dark:bg-slate-800 p-6 lg:p-7 xl:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex flex-col h-full"
              >
                <div className="bg-slate-50 dark:bg-slate-900/50 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <p className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {detailLabel}
                </p>
              </motion.button>
            ))}
          </div>
          {/* sm-md: horizontal strip with drag-scroll */}
          <div
            ref={dragScrollRef}
            className="lg:hidden flex gap-5 overflow-x-auto pb-4 scrollbar-hide select-none cursor-grab active:cursor-grabbing"
          >
            {services.map((service, index) => (
              <div key={`desktop-strip-${index}`} className="min-w-[320px] flex-shrink-0">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: service.delay, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  type="button"
                  onClick={() => setActiveService(service)}
                  className="text-left bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex flex-col h-full"
                >
                  <div className="bg-slate-50 dark:bg-slate-900/50 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {detailLabel}
                  </p>
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60" onClick={() => setActiveService(null)}></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg sm:max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex-shrink-0">
                {activeService.icon}
              </div>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
              >
                ✕
              </button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {activeService.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                {activeService.description}
              </p>
            </div>
            
            <ul className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6">
              {activeService.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="flex-1 px-5 py-3 text-center rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors text-sm sm:text-base"
                onClick={() => setActiveService(null)}
              >
                {activeService.cta}
              </a>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm sm:text-base"
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