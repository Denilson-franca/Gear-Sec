export type Language = "pt" | "en" | "es"

export const languages: { code: Language; label: string; countryCode: string; name: string }[] = [
  { code: "pt", label: "Português", countryCode: "br", name: "Brasil" },
  { code: "en", label: "English", countryCode: "us", name: "United States" },
  { code: "es", label: "Español", countryCode: "es", name: "España" },
]

type Translation = {
  nav: {
    inicio: string
    especialidades: string
    servicos: string
    sobre: string
    equipe: string
    contato: string
    suporte: string
    menuLabel: string
  }
  hero: {
    tagline: string
  }
  specialties: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  services: {
    title: string
    subtitle: string
    button: string
    items: { title: string; description: string }[]
  }
  about: {
    title: string
    paragraphs: string[]
    stats: { value: string; label: string }[]
  }
  team: {
    title: string
    subtitle: string
    linkedin: string
    confidentialButton: string
    confidentialAlt: string
    photoAlt: string
    roles: string[]
    confidentialName: string
  }
  whyChoose: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  contact: {
    title: string
    subtitle: string
    heading: string
    intro: string
    emailLabel: string
    founderLabel: string
    founderValue: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      company: string
      companyPlaceholder: string
      message: string
      messagePlaceholder: string
      submit: string
    }
    alerts: {
      success: string
      error: string
      connectionError: string
    }
  }
  footer: {
    copyright: string
  }
}

export const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      inicio: "Início",
      especialidades: "Especialidades",
      servicos: "Serviços",
      sobre: "Sobre Nós",
      equipe: "Equipe",
      contato: "Contato",
      suporte: "Suporte",
      menuLabel: "Alternar menu",
    },
    hero: {
      tagline: "Gear Sec – Segurança Cibernética",
    },
    specialties: {
      title: "Nossa Atuação e Especialidades",
      subtitle:
        "Acreditamos que tecnologia transforma vidas. Por isso a filantropia está no centro da nossa atuação: apoiamos ONGs e projetos que inserem crianças e jovens no mundo da tecnologia, e levamos essa mesma dedicação à infraestrutura crítica e à proteção digital da sua organização",
      items: [
        {
          title: "Impacto Social e Mentoria Filantrópica",
          description:
            "Valorizamos profundamente ONGs e empresas que dão importância a inserir crianças e jovens no mundo da tecnologia. Prestamos serviços e conduzimos mentorias para essas causas, e ficamos verdadeiramente felizes em poder ajudar a transformar vidas por meio do conhecimento.",
        },
        {
          title: "Implantação de Ponta a Ponta",
          description:
            "Arquitetura, design e desenvolvimento do zero de plataformas de alto desempenho, com foco em performance, escalabilidade e segurança.",
        },
        {
          title: "Infraestrutura e Gestão de DNS",
          description:
            "Gerenciamento de registros de domínio, configuração de nameservers personalizados e tabelas avançadas de zona DNS.",
        },
        {
          title: "Segurança de E-mail e Anti-Spoofing",
          description:
            "Resolução de problemas complexos de integração SMTP/API e mitigação de riscos de falsificação de domínio configurando registros SPF, DKIM e DMARC.",
        },
      ],
    },
    services: {
      title: "Nossos Serviços",
      subtitle:
        "Soluções completas em segurança cibernética para proteger sua empresa contra ameaças digitais",
      button: "Saiba Mais",
      items: [
        {
          title: "Firewall Avançado",
          description:
            "Proteção de rede de última geração com análise de tráfego em tempo real e bloqueio automático de ameaças.",
        },
        {
          title: "Monitoramento 24/7",
          description:
            "Vigilância contínua dos seus sistemas com alertas instantâneos e resposta rápida a incidentes.",
        },
        {
          title: "Auditoria Inteligente",
          description:
            "Análise profunda de vulnerabilidades e conformidade com relatórios detalhados e recomendações.",
        },
        {
          title: "Consultoria Especializada",
          description:
            "Equipe de especialistas dedicados para desenvolver estratégias de segurança personalizadas.",
        },
      ],
    },
    about: {
      title: "Sobre Nós",
      paragraphs: [
        "A Gear Sec é uma empresa especializada em segurança cibernética, dedicada a proteger organizações contra as crescentes ameaças digitais do mundo moderno.",
        "Com uma equipe de especialistas altamente qualificados e tecnologia de ponta, oferecemos soluções personalizadas que se adaptam às necessidades específicas de cada cliente.",
        "Nossa missão é garantir que sua empresa opere com tranquilidade, sabendo que seus dados e sistemas estão protegidos pelos melhores profissionais do mercado.",
      ],
      stats: [
        { value: "500+", label: "Clientes Protegidos" },
        { value: "99.9%", label: "Uptime Garantido" },
        { value: "24/7", label: "Suporte Dedicado" },
      ],
    },
    team: {
      title: "Nossa Equipe de Especialistas",
      subtitle: "Profissionais experientes e certificados dedicados à proteção da sua empresa",
      linkedin: "LinkedIn",
      confidentialButton: "Perfil Confidencial",
      confidentialAlt: "Perfil confidencial",
      photoAlt: "Foto de",
      roles: [
        "Fundador e Analista de Segurança da Informação",
        "Especialista em Segurança da Informação e Redes",
        "Cientista de Dados",
        "Analista de Dados",
        "Especialista em RPA",
        "Especialista em Segurança Ofensiva",
      ],
      confidentialName: "Confidencial",
    },
    whyChoose: {
      title: "Por que escolher a Gear Sec?",
      subtitle: "Diferenciais que fazem da Gear Sec a escolha certa para sua segurança digital",
      items: [
        { title: "Resposta Rápida", description: "Tempo médio de resposta a incidentes inferior a 15 minutos." },
        { title: "Proteção Total", description: "Cobertura completa contra malware, ransomware e ataques DDoS." },
        { title: "Monitoramento Contínuo", description: "Vigilância ininterrupta 24 horas por dia, 7 dias por semana." },
        { title: "Certificações", description: "Equipe certificada ISO 27001, CISSP e CEH." },
        { title: "Suporte Dedicado", description: "Atendimento personalizado com especialistas dedicados." },
        { title: "Relatórios Detalhados", description: "Dashboards e relatórios em tempo real sobre sua segurança." },
      ],
    },
    contact: {
      title: "Contato",
      subtitle: "Entre em contato conosco e descubra como podemos proteger sua empresa",
      heading: "Fale Conosco",
      intro:
        "Nossa equipe está pronta para atender suas necessidades de segurança cibernética. Entre em contato e agende uma avaliação gratuita.",
      emailLabel: "E-mail",
      founderLabel: "Fundador",
      founderValue: "Denilson França - Fundador e Analista de Segurança da Informação",
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "E-mail",
        emailPlaceholder: "seu@email.com",
        company: "Empresa",
        companyPlaceholder: "Nome da sua empresa",
        message: "Mensagem",
        messagePlaceholder: "Como podemos ajudar?",
        submit: "Enviar Mensagem",
      },
      alerts: {
        success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        error: "Erro ao enviar mensagem. Tente novamente.",
        connectionError: "Erro ao enviar mensagem. Verifique sua conexão e tente novamente.",
      },
    },
    footer: {
      copyright: "© 2026 Gear Sec. Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      especialidades: "Specialties",
      servicos: "Services",
      sobre: "About Us",
      equipe: "Team",
      contato: "Contact",
      suporte: "Support",
      menuLabel: "Toggle menu",
    },
    hero: {
      tagline: "Gear Sec – Cybersecurity",
    },
    specialties: {
      title: "Our Work and Specialties",
      subtitle:
        "We believe technology transforms lives. That is why philanthropy is at the heart of what we do: we support NGOs and projects that introduce children and young people to the world of technology, and we bring that same dedication to critical infrastructure and the digital protection of your organization",
      items: [
        {
          title: "Social Impact and Philanthropic Mentoring",
          description:
            "We deeply value NGOs and companies that care about bringing children and young people into the world of technology. We provide services and mentoring for these causes, and we are truly happy to help transform lives through knowledge.",
        },
        {
          title: "End-to-End Deployment",
          description:
            "Architecture, design and development from scratch of high-performance platforms, focused on performance, scalability and security.",
        },
        {
          title: "Infrastructure and DNS Management",
          description:
            "Management of domain records, configuration of custom nameservers and advanced DNS zone tables.",
        },
        {
          title: "Email Security and Anti-Spoofing",
          description:
            "Solving complex SMTP/API integration issues and mitigating domain spoofing risks by configuring SPF, DKIM and DMARC records.",
        },
      ],
    },
    services: {
      title: "Our Services",
      subtitle:
        "Complete cybersecurity solutions to protect your company against digital threats",
      button: "Learn More",
      items: [
        {
          title: "Advanced Firewall",
          description:
            "Next-generation network protection with real-time traffic analysis and automatic threat blocking.",
        },
        {
          title: "24/7 Monitoring",
          description:
            "Continuous surveillance of your systems with instant alerts and rapid incident response.",
        },
        {
          title: "Intelligent Auditing",
          description:
            "In-depth vulnerability and compliance analysis with detailed reports and recommendations.",
        },
        {
          title: "Specialized Consulting",
          description:
            "A team of dedicated specialists to develop customized security strategies.",
        },
      ],
    },
    about: {
      title: "About Us",
      paragraphs: [
        "Gear Sec is a company specialized in cybersecurity, dedicated to protecting organizations against the growing digital threats of the modern world.",
        "With a team of highly qualified specialists and cutting-edge technology, we offer customized solutions that adapt to the specific needs of each client.",
        "Our mission is to ensure that your company operates with peace of mind, knowing that your data and systems are protected by the best professionals in the market.",
      ],
      stats: [
        { value: "500+", label: "Protected Clients" },
        { value: "99.9%", label: "Guaranteed Uptime" },
        { value: "24/7", label: "Dedicated Support" },
      ],
    },
    team: {
      title: "Our Team of Specialists",
      subtitle: "Experienced and certified professionals dedicated to protecting your company",
      linkedin: "LinkedIn",
      confidentialButton: "Confidential Profile",
      confidentialAlt: "Confidential profile",
      photoAlt: "Photo of",
      roles: [
        "Founder and Information Security Analyst",
        "Information Security and Networks Specialist",
        "Data Scientist",
        "Data Analyst",
        "RPA Specialist",
        "Offensive Security Specialist",
      ],
      confidentialName: "Confidential",
    },
    whyChoose: {
      title: "Why choose Gear Sec?",
      subtitle: "The advantages that make Gear Sec the right choice for your digital security",
      items: [
        { title: "Fast Response", description: "Average incident response time under 15 minutes." },
        { title: "Total Protection", description: "Complete coverage against malware, ransomware and DDoS attacks." },
        { title: "Continuous Monitoring", description: "Uninterrupted surveillance 24 hours a day, 7 days a week." },
        { title: "Certifications", description: "Team certified in ISO 27001, CISSP and CEH." },
        { title: "Dedicated Support", description: "Personalized service with dedicated specialists." },
        { title: "Detailed Reports", description: "Real-time dashboards and reports about your security." },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch with us and find out how we can protect your company",
      heading: "Talk to Us",
      intro:
        "Our team is ready to meet your cybersecurity needs. Get in touch and schedule a free assessment.",
      emailLabel: "Email",
      founderLabel: "Founder",
      founderValue: "Denilson França - Founder and Information Security Analyst",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        company: "Company",
        companyPlaceholder: "Your company name",
        message: "Message",
        messagePlaceholder: "How can we help?",
        submit: "Send Message",
      },
      alerts: {
        success: "Message sent successfully! We will contact you soon.",
        error: "Error sending message. Please try again.",
        connectionError: "Error sending message. Check your connection and try again.",
      },
    },
    footer: {
      copyright: "© 2026 Gear Sec. All rights reserved.",
    },
  },
  es: {
    nav: {
      inicio: "Inicio",
      especialidades: "Especialidades",
      servicos: "Servicios",
      sobre: "Sobre Nosotros",
      equipe: "Equipo",
      contato: "Contacto",
      suporte: "Soporte",
      menuLabel: "Alternar menú",
    },
    hero: {
      tagline: "Gear Sec – Seguridad Cibernética",
    },
    specialties: {
      title: "Nuestra Actuación y Especialidades",
      subtitle:
        "Creemos que la tecnología transforma vidas. Por eso la filantropía está en el centro de nuestra actuación: apoyamos a ONGs y proyectos que introducen a niños y jóvenes en el mundo de la tecnología, y llevamos esa misma dedicación a la infraestructura crítica y a la protección digital de su organización",
      items: [
        {
          title: "Impacto Social y Mentoría Filantrópica",
          description:
            "Valoramos profundamente a las ONGs y empresas que dan importancia a insertar a niños y jóvenes en el mundo de la tecnología. Prestamos servicios y realizamos mentorías para estas causas, y nos hace verdaderamente felices poder ayudar a transformar vidas a través del conocimiento.",
        },
        {
          title: "Implementación de Extremo a Extremo",
          description:
            "Arquitectura, diseño y desarrollo desde cero de plataformas de alto rendimiento, con enfoque en rendimiento, escalabilidad y seguridad.",
        },
        {
          title: "Infraestructura y Gestión de DNS",
          description:
            "Gestión de registros de dominio, configuración de nameservers personalizados y tablas avanzadas de zona DNS.",
        },
        {
          title: "Seguridad de Correo y Anti-Spoofing",
          description:
            "Resolución de problemas complejos de integración SMTP/API y mitigación de riesgos de suplantación de dominio configurando registros SPF, DKIM y DMARC.",
        },
      ],
    },
    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Soluciones completas en seguridad cibernética para proteger su empresa contra amenazas digitales",
      button: "Saber Más",
      items: [
        {
          title: "Firewall Avanzado",
          description:
            "Protección de red de última generación con análisis de tráfico en tiempo real y bloqueo automático de amenazas.",
        },
        {
          title: "Monitoreo 24/7",
          description:
            "Vigilancia continua de sus sistemas con alertas instantáneas y respuesta rápida a incidentes.",
        },
        {
          title: "Auditoría Inteligente",
          description:
            "Análisis profundo de vulnerabilidades y cumplimiento con informes detallados y recomendaciones.",
        },
        {
          title: "Consultoría Especializada",
          description:
            "Equipo de especialistas dedicados para desarrollar estrategias de seguridad personalizadas.",
        },
      ],
    },
    about: {
      title: "Sobre Nosotros",
      paragraphs: [
        "Gear Sec es una empresa especializada en seguridad cibernética, dedicada a proteger organizaciones contra las crecientes amenazas digitales del mundo moderno.",
        "Con un equipo de especialistas altamente cualificados y tecnología de punta, ofrecemos soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente.",
        "Nuestra misión es garantizar que su empresa opere con tranquilidad, sabiendo que sus datos y sistemas están protegidos por los mejores profesionales del mercado.",
      ],
      stats: [
        { value: "500+", label: "Clientes Protegidos" },
        { value: "99.9%", label: "Uptime Garantizado" },
        { value: "24/7", label: "Soporte Dedicado" },
      ],
    },
    team: {
      title: "Nuestro Equipo de Especialistas",
      subtitle: "Profesionales experimentados y certificados dedicados a la protección de su empresa",
      linkedin: "LinkedIn",
      confidentialButton: "Perfil Confidencial",
      confidentialAlt: "Perfil confidencial",
      photoAlt: "Foto de",
      roles: [
        "Fundador y Analista de Seguridad de la Información",
        "Especialista en Seguridad de la Información y Redes",
        "Científico de Datos",
        "Analista de Datos",
        "Especialista en RPA",
        "Especialista en Seguridad Ofensiva",
      ],
      confidentialName: "Confidencial",
    },
    whyChoose: {
      title: "¿Por qué elegir Gear Sec?",
      subtitle: "Diferenciales que hacen de Gear Sec la elección correcta para su seguridad digital",
      items: [
        { title: "Respuesta Rápida", description: "Tiempo medio de respuesta a incidentes inferior a 15 minutos." },
        { title: "Protección Total", description: "Cobertura completa contra malware, ransomware y ataques DDoS." },
        { title: "Monitoreo Continuo", description: "Vigilancia ininterrumpida las 24 horas del día, 7 días a la semana." },
        { title: "Certificaciones", description: "Equipo certificado ISO 27001, CISSP y CEH." },
        { title: "Soporte Dedicado", description: "Atención personalizada con especialistas dedicados." },
        { title: "Informes Detallados", description: "Paneles e informes en tiempo real sobre su seguridad." },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "Póngase en contacto con nosotros y descubra cómo podemos proteger su empresa",
      heading: "Hable con Nosotros",
      intro:
        "Nuestro equipo está listo para atender sus necesidades de seguridad cibernética. Póngase en contacto y agende una evaluación gratuita.",
      emailLabel: "Correo",
      founderLabel: "Fundador",
      founderValue: "Denilson França - Fundador y Analista de Seguridad de la Información",
      form: {
        name: "Nombre",
        namePlaceholder: "Su nombre",
        email: "Correo",
        emailPlaceholder: "su@correo.com",
        company: "Empresa",
        companyPlaceholder: "Nombre de su empresa",
        message: "Mensaje",
        messagePlaceholder: "¿Cómo podemos ayudar?",
        submit: "Enviar Mensaje",
      },
      alerts: {
        success: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
        error: "Error al enviar el mensaje. Inténtelo de nuevo.",
        connectionError: "Error al enviar el mensaje. Verifique su conexión e inténtelo de nuevo.",
      },
    },
    footer: {
      copyright: "© 2026 Gear Sec. Todos los derechos reservados.",
    },
  },
}
