import { Service, Project, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-business',
    title: 'Business & Informational Websites',
    category: 'web',
    iconName: 'Globe',
    description: 'Custom-built, fast business websites designed to showcase your services, build trust with your audience, and turn visitors into regular clients.',
    shortDesc: 'Professional custom websites built to grow your brand and business.',
    priceEstimate: 'Starting at $1,250',
    features: ['Responsive layout optimized for mobile', 'On-page Google SEO & speed optimization', 'Integrated booking & contact forms', 'Simple content updates']
  },
  {
    id: 'web-ecommerce',
    title: 'E-commerce Platforms',
    category: 'web',
    iconName: 'ShoppingCart',
    description: 'Online stores built with easy payment setups, fast checkouts, and clean product catalogs that make it simple for customers to buy.',
    shortDesc: 'Custom online storefronts optimized for easy buying and sales.',
    priceEstimate: 'Starting at $2,400',
    features: ['Stripe, PayPal & Apple Pay integration', 'Easy inventory & product catalog manager', 'Automated email receipts', 'Sales & traffic analytics dashboard']
  },
  {
    id: 'web-restaurant',
    title: 'Bespoke Restaurant Systems',
    category: 'web',
    iconName: 'Utensils',
    description: 'Websites for local restaurants, featuring digital menus, online reservation requests, and commission-free food ordering directly from your site.',
    shortDesc: 'Digital menu, direct reservation requests, and commission-free ordering.',
    priceEstimate: 'Starting at $1,500',
    features: ['Interactive digital food menu', 'Email/SMS table booking notifications', 'Direct delivery/pickup order options', 'Simple restaurant admin dashboard']
  },
  {
    id: 'graphic-branding',
    title: 'Visual Graphics & Logo Suite',
    category: 'graphic',
    iconName: 'Palette',
    description: 'Clean, high-quality logos and brand assets that give your business a consistent, professional look across all digital and print materials.',
    shortDesc: 'Distinctive brand logos and comprehensive business styling packages.',
    priceEstimate: 'Starting at $450',
    features: ['Scalable files (.SVG, .PNG, .PDF)', 'Alternative layout configurations', 'Brand guidelines handbook', 'Complete ownership transfer']
  },
  {
    id: 'graphic-campaigns',
    title: 'High-Impact Poster & Flyer Ads',
    category: 'graphic',
    iconName: 'Image',
    description: 'Eye-catching posters, flyers, and digital marketing banners designed to drive physical foot traffic, local RSVPs, and campaign sign-ups.',
    shortDesc: 'Digital & print-ready marketing flyers designed to attract customers.',
    priceEstimate: 'Starting at $150',
    features: ['Print-ready files (300 DPI)', 'Social media template package', 'Clean flyer layouts & font pairing', 'Print-shop setup guidance']
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Search Optimization',
    category: 'web',
    iconName: 'Search',
    description: 'Increase your search rankings and attract active local traffic. We set up professional key-term optimizations, Google Business profiles, and clean site structures.',
    shortDesc: 'Attract local clients and rank higher on Google search results.',
    priceEstimate: 'Starting at $600',
    features: ['On-page metadata & keyword optimization', 'Google Analytics & Search Console setup', 'Local competitive keywords review', 'Google Business Profile local setup']
  },
  {
    id: 'custom-software',
    title: 'Bespoke Custom Software',
    category: 'software',
    iconName: 'Cpu',
    description: 'Custom client portals, database tools, CRM tracking dashboards, and task automations custom-built to match your team’s day-to-day operations.',
    shortDesc: 'Custom software tools built to organize and optimize your business.',
    priceEstimate: 'Starting at $3,500',
    features: ['Secure user logins & access roles', 'Connected database structures', 'Reporting & analytics dashboards', 'Data exports & automation flows']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Veloce Trattoria Digital Experience',
    category: 'Website Design',
    description: 'A complete digital transformation for a high-traffic urban eatery. Includes interactive visual menus, reservation systems, and commission-free checkout.',
    image: '/src/assets/images/veloce_trattoria_1779689750255.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    clientName: 'Veloce Trattoria Restaurant Group',
    impactMetrics: '+140% table reservations booked online'
  },
  {
    id: 'proj-2',
    title: 'Verdant Market E-commerce Shop',
    category: 'E-commerce',
    description: 'Bespoke bulk grocery platform for organic produce, backed by robust local location routing, automatic checkout, and clean administrative control boards.',
    image: '/src/assets/images/verdant_market_1779689771801.png',
    technologies: ['React', 'Stripe checkout', 'Interactive Analytics'],
    clientName: 'Verdant Organic Grocers Ltd.',
    impactMetrics: 'Decreased cart abandonment by 28.5%'
  },
  {
    id: 'proj-3',
    title: 'Apex Prime Real Estate Portal',
    category: 'Software Development',
    description: 'A bespoke administrative workspace and client communication system engineered for a private property group to catalogue listings and track buyer briefs.',
    image: '/src/assets/images/apex_portal_1779689785777.png',
    technologies: ['React', 'Dynamic Map API', 'Client Dashboards'],
    clientName: 'Apex Prime Property Group',
    impactMetrics: 'Saved agents an average of 9 operational hours weekly'
  },
  {
    id: 'proj-4',
    title: 'SustainaBrand Rebranding & Assets',
    category: 'Graphic Design',
    description: 'A comprehensive branding visual scheme including vector logos, custom promotional transit posters, and web style books emphasizing neutral-feel growth aesthetics.',
    image: '/src/assets/images/sustainabrand_suite_1779689803596.png',
    technologies: ['Vector Suite', 'Print Production Layouts', 'Typography Board'],
    clientName: 'SustainaBrand Org',
    impactMetrics: '45% increase in branded digital click-through rate'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take Midusa to build a business website?',
    answer: 'A standard custom business website starts with thorough planning, custom UI design, and development, usually taking between 2 to 4 weeks depending on structure complexity. We keep you updated at every step.',
    category: 'Websites'
  },
  {
    id: 'faq-2',
    question: 'Can I request graphic design (flyers, logos) separately from web projects?',
    answer: 'Absolutely! We deal in stand-alone graphic design such as vector posters, promotional flyers, and corporate brand kits. We offer customized graphic design bundles to launch or upgrade your local brand presence.',
    category: 'Design'
  },
  {
    id: 'faq-3',
    question: 'How does your Interactive Project Planner help with Client Outreach?',
    answer: 'Our interactive planner gives local business owners instant clarity on development pathways. You specify details about your company goals, select your layout styles, and get custom recommendations instantly. We follow up with a detailed blueprint consultation.',
    category: 'Outreach & Process'
  },
  {
    id: 'faq-4',
    question: 'Are there hidden or recurring platform fees with custom software?',
    answer: 'No hidden fees. We believe in absolute neutrality and transparency. We construct bespoke systems that you own entirely. Host options, service integrations, and domain setup will be itemized in our initial blueprint phase.',
    category: 'Software'
  },
  {
    id: 'faq-5',
    question: 'What is your primary color coding and design system?',
    answer: 'We craft digital interfaces with intention: Dodgerblue represents our professional technological stability (Primary), Red serves as high-impact highlights for action items and critical conversion elements, and Green offers a premium neutralist aesthetic.',
    category: 'Aesthetics'
  }
];
