import React, { useState } from 'react';
import { useLanguage } from '../context/hook';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState<string | null>(null);
  const supportEmail = t.contact.supportEmail;
  const requiredError = language === 'tr' ? 'Lütfen tüm alanları doldurun.' : 'Please fill out all fields.';
  const subjectPrefix = language === 'tr' ? 'Yeni Proje Mesajı' : 'New Project Message';
  const senderLabel = language === 'tr' ? 'Gönderen' : 'Sender';
  const messageLabel = language === 'tr' ? 'Mesaj' : 'Message';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(requiredError);
      return;
    }
    setError(null);
    setFormState('sending');
    setTimeout(() => {
      const subject = `${subjectPrefix} - ${formData.name}`;
      const body = `${senderLabel}: ${formData.name} (${formData.email})\n\n${messageLabel}:\n${formData.message}`;
      const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600 dark:text-blue-400">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-slate-900 dark:text-white">Email</h3>
                <a href={`mailto:${supportEmail}`} className="mt-1 block text-blue-600 dark:text-blue-400 font-semibold">
                  {supportEmail}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
               <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl text-purple-600 dark:text-purple-400">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-slate-900 dark:text-white">Phone</h3>
                <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">+90 545 214 34 98</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
               <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600 dark:text-green-400">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-slate-900 dark:text-white">Location</h3>
                <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">Kütahya, Turkey</p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-500 italic">
                    {language==="en"? "Great things in business are never done by one person. They're done by a team of people. - Steve Jobs" : "Harika işler asla tek bir kişi tarafından yapılmaz. Onları bir ekip yapar. - Steve Jobs"}
                </p>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700"
          >
            {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.contact.success}</h3>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t.contact.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(event) => {
                        setError(null);
                        setFormData((prev) => ({ ...prev, name: event.target.value }));
                      }}
                      className="block w-full px-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t.contact.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={(event) => {
                        setError(null);
                        setFormData((prev) => ({ ...prev, email: event.target.value }));
                      }}
                      className="block w-full px-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(event) => {
                        setError(null);
                        setFormData((prev) => ({ ...prev, message: event.target.value }));
                      }}
                      className="block w-full px-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-base leading-relaxed"
                    ></textarea>
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-base font-semibold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px] shadow-lg shadow-blue-500/25"
                >
                    {formState === 'sending' ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <>
                            {t.contact.submit}
                            <Send size={18} className="ml-2" />
                        </>
                    )}
                </button>
                </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;