import type { TranslationStructure } from './types';

export const TRANSLATIONS: Record<'tr' | 'en', TranslationStructure> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      about: 'Hakkımızda',
      contact: 'İletişim',
      portfolio: 'Portföy',
      tech: 'Teknolojiler',
      team: 'Ekibimiz',
    },
    hero: {
      title: 'Dijital Geleceğinizi İnşa Ediyoruz',
      subtitle: 'HYzon Tech ile hayalinizdeki web, mobil ve masaüstü uygulamalarını en son teknolojilerle gerçeğe dönüştürün.',
      cta: 'Projeye Başla',
      secondaryCta: 'Daha Fazla Bilgi',
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Modern teknoloji yığınları ile uçtan uca çözümler sunuyoruz.',
      web: {
        title: 'Web Geliştirme',
        desc: 'React, Next.js ve modern araçlarla yüksek performanslı, SEO uyumlu web uygulamaları.',
        details: [
          'Headless CMS ve JAMStack mimarisi',
          'Lighthouse 95+ performans hedefi',
          'CI/CD ile otomatik dağıtım ve izleme'
        ],
        cta: 'Web projenizi planlayalım'
      },
      mobile: {
        title: 'Mobil Uygulama',
        desc: 'iOS ve Android için React Native veya Flutter ile native performanslı mobil deneyimler.',
        details: [
          'Tek kod tabanı ile iOS & Android',
          'App Store ve Play Store yayın desteği',
          'Gerçek zamanlı analitik ve push bildirimleri'
        ],
        cta: 'Mobil stratejinizi konuşalım'
      },
      desktop: {
        title: 'Masaüstü Yazılım',
        desc: 'Electron ve modern teknolojilerle Windows, MacOS ve Linux için güçlü masaüstü araçları.',
        details: [
          'Çoklu platform desteği (Win/Mac/Linux)',
          'Donanım entegrasyonları ve offline senaryoları',
          'Otomatik güncelleme ve sürüm yönetimi'
        ],
        cta: 'Masaüstü uygulamanızı tasarlayalım'
      },
      custom: {
        title: 'Özel Çözümler',
        desc: 'İş süreçlerinize özel, güvenli ve ölçeklenebilir kurumsal yazılım mimarileri.',
        details: [
          'Mikro servis ve event-driven mimariler',
          'Kurumsal entegrasyonlar (SAP, Dynamics vb.)',
          'Güvenlik, loglama ve uyumluluk standartları'
        ],
        cta: 'Size özel çözüm üretelim'
      },
    },
    about: {
      title: 'HYzon Tech Hakkında',
      description1: 'HYzon Tech olarak, teknolojinin sınırlarını zorlayan ve kullanıcı deneyimini merkeze alan yenilikçi çözümler üretiyoruz. Güvenlik, performans ve estetik bizim için birer standarttır.',
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
      supportEmail: 'yuuf_557@hotmail.com',
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      privacyDescription: 'Kişisel verileri yalnızca proje iletişimi ve teklif süreçleri için topluyor, üçüncü taraflarla paylaşmıyoruz. Sistemlerimiz TLS ile şifrelenir ve veriler Türkiye Cumhuriyeti KVKK ve GDPR uyumlu biçimde saklanır.',
      terms: 'Kullanım Şartları',
      termsDescription: 'HYzon Tech dijital ürünlerinin kullanımı, sözleşme koşulları ve proje tekliflerinde belirtilen kapsamla sınırlıdır. Teslim edilen yazılım, talep edilen gereksinimler doğrultusunda sağlanır ve bakım süreleri ayrı sözleşmelere tabidir.',
    },
    portfolio: {
      title: 'Portföyümüz',
      subtitle: 'Ölçülebilir sonuçlar üreten dijital ürünler tasarlıyor, stratejiden canlı kullanıma kadar tüm süreci üstleniyoruz.',
      cta: 'Tüm projeleri gör',
      projects: [
        {
          name: 'Nebula Commerce',
          category: 'E-ticaret · React / Laravel',
          description: 'Global dropshipping operasyonlarını tek panelde toplayan çoklu mağaza yönetim platformu.',
          result: '%42 daha yüksek dönüşüm · 3 ayda yayında',
          stack: ['React', 'Laravel', 'Redis', 'AWS'],
        },
        {
          name: 'Atlas Mobility',
          category: 'Mobil · Flutter / Firebase',
          description: 'Kurumsal saha ekipleri için çevrimdışı senaryolara sahip görev ve rota planlama uygulaması.',
          result: '%60 daha hızlı saha raporu',
          stack: ['Flutter', 'Firebase', 'Mapbox'],
        },
        {
          name: 'Sentinel Ops',
          category: 'Otonom Sistem · C++ / Python',
          description: 'Gerçek zamanlı telemetri ve yapay zekâ destekli karar motoru barındıran kontrol paneli.',
          result: '7/24 izleme · < 120ms gecikme',
          stack: ['C++', 'Python', 'gRPC', 'Azure'],
        },
        {
          name: 'Aurora Banking',
          category: 'Fintech · Next.js / Go',
          description: 'Regülasyon uyumlu dijital bankacılık deneyimi için modüler hesap, KYC ve ödeme çekirdeği.',
          result: 'PSD2 uyumlu · %99,995 çalışma süresi',
          stack: ['Next.js', 'Go', 'PostgreSQL', 'Kubernetes'],
        },
        {
          name: 'Helix Health Hub',
          category: 'Sağlık · React Native / .NET',
          description: 'Hasta portalı, tele-sağlık görüşmeleri ve HIPAA uyumlu kayıt yönetimi tek uygulamada.',
          result: '%35 daha hızlı muayene sonrası iletişim',
          stack: ['React Native', '.NET', 'SignalR', 'Azure'],
        },
        {
          name: 'Quark Logistics OS',
          category: 'Lojistik · Vue / Rust',
          description: 'Gerçek zamanlı taşıma izleme, fiyat optimizasyonu ve dijital gümrük belgeleri platformu.',
          result: '%22 operasyon maliyeti tasarrufu',
          stack: ['Vue', 'Rust', 'WebSocket', 'GCP'],
        },
      ],
    },
    techStack: {
      title: 'Teknoloji Yığını',
      subtitle: 'Web, mobil, masaüstü ve otonom sistem projelerinde uçtan uca geliştirme yapabilen tam kapsamlı bir ekip.',
      badges: [
        { name: 'React & Next.js', category: 'Web', description: 'Kurumsal UI/UX, SSR ve edge dağıtımlar' },
        { name: 'Flutter & React Native', category: 'Mobil', description: 'Tek kod tabanıyla App Store / Play Store' },
        { name: 'PHP · Laravel', category: 'Backend', description: 'Yüksek trafikli API ve panel çözümleri' },
        { name: 'Node.js & Python', category: 'Servisler', description: 'Gerçek zamanlı servisler ve yapay zekâ' },
        { name: 'C++ / C#', category: 'Otonom', description: 'Sensör füzyonu, masaüstü ve kontrol yazılımları' },
        { name: 'AWS · Azure', category: 'Bulut', description: 'Kubernetes, serverless ve gözlemlenebilirlik' },
        { name: 'Design Systems', category: 'UI/UX', description: 'Figma + Tailwind ile markaya özel kitler' },
        { name: 'CI/CD & DevOps', category: 'Operasyon', description: 'GitHub Actions, Docker, test otomasyonu' },
      ],
    },
    team: {
      title: 'Ekibimiz ve İçgörüler',
      subtitle: 'Her proje için ürün vizyonu, ölçeklenebilir kod ve insan odaklı deneyimi bir arada sunuyoruz.',
      members: [
        {
          name: 'Yusuf Kurt',
          title: 'Product Engineer · Mobile & Systems',
          bio: 'Flutter ve React Native ile üretime hazır mobil uygulamalar geliştiren, gerekirse native kod yazabilen ve masaüstü / otonom sistem çözümleri üretebilen mühendis.',
          focus: 'Mobil deneyimler · Masaüstü araçlar · Otonom kontrol yazılımları',
          skills: ['Flutter', 'React Native', 'React', 'UI/UX', 'C++', 'C#'],
          photo: '/assets/team/yusuf.jpg',
        },
        {
          name: 'Hüseyin Yılmaz',
          title: 'Lead Web & AI Engineer',
          bio: 'PHP / Laravel ile aktif projeler geliştiren, UI/UX prensiplerini projelerine yayan ve Python tabanlı yapay zekâ çözümlerinde deneyimli tam yığın geliştirici.',
          focus: 'Web platformları · Yapay zekâ servisleri · Otonom sistem entegrasyonları',
          skills: ['PHP', 'Laravel', 'React', 'Python AI', 'C++', 'C#'],
          photo: '/assets/team/hüseyin.jpg',
        },
      ],
      insights: [
        {
          title: 'Şeffaf sprint yönetimi',
          description: 'İki haftalık sprint raporları ve etkileşimli demo oturumları ile paydaşları her adımda dahil ediyoruz.',
        },
        {
          title: 'Performans garantisi',
          description: 'Her teslimatta Lighthouse > 90, API cevap süresinde < 200ms ve güvenlik testleri hedefleniyor.',
        },
        {
          title: 'Tasarımdan canlıya tek ekip',
          description: 'Araştırma, prototip, geliştirme ve DevOps süreçleri aynı çekirdek ekip tarafından yönetiliyor.',
        },
      ],
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      portfolio: 'Portfolio',
      tech: 'Technologies',
      team: 'Our Team',
    },
    hero: {
      title: 'Building Your Digital Future',
      subtitle: 'Transform your dream web, mobile, and desktop applications into reality with HYzon Tech using cutting-edge technologies.',
      cta: 'Start Project',
      secondaryCta: 'Learn More',
    },
    services: {
      title: 'Our Services',
      subtitle: 'We provide end-to-end solutions with modern technology stacks.',
      web: {
        title: 'Web Development',
        desc: 'High-performance, SEO-friendly web apps using React, Next.js and modern tools.',
        details: [
          'Headless CMS and JAMStack-ready architecture',
          'Lighthouse 95+ performance targets',
          'Automated CI/CD pipelines with observability'
        ],
        cta: 'Plan your web app'
      },
      mobile: {
        title: 'Mobile Apps',
        desc: 'Native performance mobile experiences for iOS and Android using React Native or Flutter.',
        details: [
          'Single codebase for iOS & Android',
          'Store deployment guidance and ASO support',
          'Real-time analytics and push notifications'
        ],
        cta: 'Discuss your mobile roadmap'
      },
      desktop: {
        title: 'Desktop Software',
        desc: 'Powerful desktop tools for Windows, MacOS, and Linux using Electron and modern tech.',
        details: [
          'Multi-platform installers (Win/Mac/Linux)',
          'Hardware integrations & offline scenarios',
          'Auto-update channels and release governance'
        ],
        cta: 'Design your desktop tool'
      },
      custom: {
        title: 'Custom Solutions',
        desc: 'Secure and scalable enterprise software architectures tailored to your business processes.',
        details: [
          'Microservices and event-driven foundations',
          'Enterprise integrations (SAP, Dynamics, etc.)',
          'Security, logging, and compliance by design'
        ],
        cta: 'Craft a bespoke solution'
      },
    },
    about: {
      title: 'About HYzon Tech',
      description1: 'At HYzon Tech, we create innovative solutions that push the boundaries of technology with user experience at the core. Security, performance, and aesthetics are our standards.',
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
      supportEmail: 'yuuf_557@hotmail.com',
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      privacyDescription: 'We collect personal data solely for project communication and proposals, never sell it, and secure all systems with TLS while storing data in GDPR and KVKK compliant regions.',
      terms: 'Terms of Service',
      termsDescription: 'Use of  Tech digital products is limited to the scope defined in mutually signed agreements and proposals. Deliverables meet documented requirements, and maintenance windows are governed by separate contracts.',
    },
    portfolio: {
      title: 'Selected Work',
      subtitle: 'We turn strategy into measurable impact, owning discovery, delivery, and long-term evolution.',
      cta: 'View all case studies',
      projects: [
        {
          name: 'Nebula Commerce',
          category: 'E-commerce · React / Laravel',
          description: 'Unified multi-store management for global dropshipping brands with automated fulfillment.',
          result: '42% conversion uplift · live in 12 weeks',
          stack: ['React', 'Laravel', 'Redis', 'AWS'],
        },
        {
          name: 'Atlas Mobility',
          category: 'Mobile · Flutter / Firebase',
          description: 'Offline-ready field ops app with route planning, annotation, and live sync.',
          result: '60% faster reporting cycle',
          stack: ['Flutter', 'Firebase', 'Mapbox'],
        },
        {
          name: 'Sentinel Ops',
          category: 'Autonomous · C++ / Python',
          description: 'Real-time telemetry console with AI-assisted decision engine for autonomous fleets.',
          result: 'Always-on monitoring · < 120ms latency',
          stack: ['C++', 'Python', 'gRPC', 'Azure'],
        },
        {
          name: 'Aurora Banking',
          category: 'Fintech · Next.js / Go',
          description: 'Modular accounts, KYC and payments core powering a regulation-ready digital bank.',
          result: 'PSD2 compliant · 99.995% uptime',
          stack: ['Next.js', 'Go', 'PostgreSQL', 'Kubernetes'],
        },
        {
          name: 'Helix Health Hub',
          category: 'Healthcare · React Native / .NET',
          description: 'Patient portal, telehealth visits and HIPAA-grade records in one secure app.',
          result: '35% faster post-visit follow-ups',
          stack: ['React Native', '.NET', 'SignalR', 'Azure'],
        },
        {
          name: 'Quark Logistics OS',
          category: 'Logistics · Vue / Rust',
          description: 'Live transport telemetry, rate optimization and digital customs workflows.',
          result: '22% lower operational cost',
          stack: ['Vue', 'Rust', 'WebSocket', 'GCP'],
        },
      ],
    },
    techStack: {
      title: 'Tech Stack',
      subtitle: 'Full-spectrum engineering across web, mobile, desktop, AI and autonomous systems.',
      badges: [
        { name: 'React & Next.js', category: 'Web', description: 'Enterprise UI/UX, SSR and edge delivery' },
        { name: 'Flutter & React Native', category: 'Mobile', description: 'App Store / Play Store from one codebase' },
        { name: 'PHP · Laravel', category: 'Backend', description: 'High-traffic APIs and business dashboards' },
        { name: 'Node.js & Python', category: 'Services', description: 'Realtime services and AI workloads' },
        { name: 'C++ / C#', category: 'Autonomy', description: 'Sensor fusion, desktop and control software' },
        { name: 'AWS · Azure', category: 'Cloud', description: 'Kubernetes, serverless and observability' },
        { name: 'Design Systems', category: 'UI/UX', description: 'Brand-aligned kits built in Figma + Tailwind' },
        { name: 'CI/CD & DevOps', category: 'Ops', description: 'GitHub Actions, Docker, automated QA' },
      ],
    },
    team: {
      title: 'Team & Insights',
      subtitle: 'We pair product thinking with scalable code and human-centered experience.',
      members: [
        {
          name: 'Yusuf Kurt',
          title: 'Product Engineer · Mobile & Systems',
          bio: 'Engineer building production-ready mobile apps with Flutter and React Native, writing native code when needed, and delivering desktop/autonomous system solutions.',
          focus: 'Mobile experiences · Desktop tools · Autonomous control software',
          skills: ['Flutter', 'React Native', 'React', 'UI/UX', 'C++', 'C#'],
          photo: '/assets/team/yusuf.jpg',
        },

        {
          name: 'Hüseyin Yılmaz',
          title: 'Lead Web & AI Engineer',
          bio: 'Full-stack engineer crafting scalable Laravel platforms, refined UI/UX, and Python-powered AI assistants that integrate seamlessly into real-world workflows.',
          focus: 'Web platforms · AI services · Autonomous integrations',
          skills: ['PHP','Laravel', 'React', 'Python AI', 'C++', 'C#'],
          photo: '/assets/team/hüseyin.jpg',
        }


      ],
      insights: [
        {
          title: 'Transparent sprints',
          description: 'Bi-weekly demos and progress notes keep every stakeholder aligned.',
        },
        {
          title: 'Performance pledge',
          description: 'We target Lighthouse > 90, API < 200ms, and bundled security checks on each release.',
        },
        {
          title: 'One crew, end-to-end',
          description: 'Research, design, engineering and DevOps stay within the same core squad.',
        },
      ],
    },
  },
};