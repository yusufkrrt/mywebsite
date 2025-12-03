import type { TranslationStructure } from './types';

export const TRANSLATIONS: Record<'tr' | 'en', TranslationStructure> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      about: 'Hakkımızda',
      contact: 'İletişim',
    },
    hero: {
      title: 'Dijital Geleceğinizi İnşa Ediyoruz',
      subtitle: 'OH Tech ile hayalinizdeki web, mobil ve masaüstü uygulamalarını en son teknolojilerle gerçeğe dönüştürün.',
      cta: 'Projeye Başla',
      secondaryCta: 'Daha Fazla Bilgi',
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Modern teknoloji yığınları ile uçtan uca çözümler sunuyoruz.',
      web: {
        title: 'Web Geliştirme',
        desc: 'React, Next.js ve modern araçlarla yüksek performanslı, SEO uyumlu web uygulamaları.',
      },
      mobile: {
        title: 'Mobil Uygulama',
        desc: 'iOS ve Android için React Native veya Flutter ile native performanslı mobil deneyimler.',
      },
      desktop: {
        title: 'Masaüstü Yazılım',
        desc: 'Electron ve modern teknolojilerle Windows, MacOS ve Linux için güçlü masaüstü araçları.',
      },
      custom: {
        title: 'Özel Çözümler',
        desc: 'İş süreçlerinize özel, güvenli ve ölçeklenebilir kurumsal yazılım mimarileri.',
      },
    },
    about: {
      title: 'OH Tech Hakkında',
      description1: 'OH Tech olarak, teknolojinin sınırlarını zorlayan ve kullanıcı deneyimini merkeze alan yenilikçi çözümler üretiyoruz. Güvenlik, performans ve estetik bizim için birer standarttır.',
      description2: 'Küresel standartlarda kod kalitesi ve sürdürülebilir yazılım mimarileri ile işinizi dijital dünyada bir adım öne taşıyoruz.',
      stat1: '50+',
      stat1Label: 'Tamamlanan Proje',
      stat2: '%100',
      stat2Label: 'Müşteri Memnuniyeti',
      stat3: '7/24',
      stat3Label: 'Teknik Destek',
    },
    contact: {
      title: 'İletişime Geçin',
      subtitle: 'Projenizi konuşmak için hemen bize yazın.',
      name: 'Adınız Soyadınız',
      email: 'E-posta Adresiniz',
      message: 'Mesajınız',
      submit: 'Gönder',
      success: 'Mesajınız başarıyla gönderildi!',
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Şartları',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      title: 'Building Your Digital Future',
      subtitle: 'Transform your dream web, mobile, and desktop applications into reality with OH Tech using cutting-edge technologies.',
      cta: 'Start Project',
      secondaryCta: 'Learn More',
    },
    services: {
      title: 'Our Services',
      subtitle: 'We provide end-to-end solutions with modern technology stacks.',
      web: {
        title: 'Web Development',
        desc: 'High-performance, SEO-friendly web apps using React, Next.js and modern tools.',
      },
      mobile: {
        title: 'Mobile Apps',
        desc: 'Native performance mobile experiences for iOS and Android using React Native or Flutter.',
      },
      desktop: {
        title: 'Desktop Software',
        desc: 'Powerful desktop tools for Windows, MacOS, and Linux using Electron and modern tech.',
      },
      custom: {
        title: 'Custom Solutions',
        desc: 'Secure and scalable enterprise software architectures tailored to your business processes.',
      },
    },
    about: {
      title: 'About OH Tech',
      description1: 'At OH Tech, we create innovative solutions that push the boundaries of technology with user experience at the core. Security, performance, and aesthetics are our standards.',
      description2: 'We move your business one step ahead in the digital world with global standard code quality and sustainable software architectures.',
      stat1: '50+',
      stat1Label: 'Projects Completed',
      stat2: '100%',
      stat2Label: 'Client Satisfaction',
      stat3: '24/7',
      stat3Label: 'Technical Support',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Write to us now to discuss your project.',
      name: 'Full Name',
      email: 'Email Address',
      message: 'Your Message',
      submit: 'Send Message',
      success: 'Message sent successfully!',
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};