import { Service, Project, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-business',
    title: 'Website Development & Design',
    category: 'web',
    iconName: 'Globe',
    description: 'Custom-built, high-performing websites designed to present your business beautifully, showcase your services, and turn visitors into clients.',
    shortDesc: 'Professional custom website development and design built to grow your brand.',
    priceEstimate: 'Starting at KSh 3,000',
    image: '/src/assets/images/web_business_srv_1779692525316.png',
    features: ['Responsive layouts optimized for mobile', 'On-page Google SEO & speed optimization', 'Integrated booking & contact forms', 'UI/UX optimized layouts with sleek Inter font']
  },
  {
    id: 'web-ecommerce',
    title: 'E-commerce with WhatsApp Integration',
    category: 'web',
    iconName: 'ShoppingCart',
    description: 'Custom online stores with seamless WhatsApp ordering, direct checkout configurations, responsive product catalogs, and easy navigation.',
    shortDesc: 'Custom online storefronts with automatic WhatsApp order routing.',
    priceEstimate: 'Starting at KSh 8,000',
    image: '/src/assets/images/verdant_market_1779689771801.png',
    features: ['Direct-to-WhatsApp order & checkout routing', 'Dynamic inventory & product catalog manager', 'Local mobile payment configurations', 'High-converting user interface layouts']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Wireframing',
    category: 'graphic',
    iconName: 'Palette',
    description: 'Sleek visual layouts, user interface blueprints, and interactive mobile or web mockups designed with flawless user navigation guidelines.',
    shortDesc: 'Interactive user interface mockups and clean web wireframes.',
    priceEstimate: 'Starting at KSh 1,200',
    image: '/src/assets/images/ui_ux_srv_design_1779693013521.png',
    features: ['Interactive prototyping & navigation layouts', 'Modern typography pair testing (Inter family)', 'Mobile viewport simulation', 'Developer-ready design assets & exports']
  },
  {
    id: 'web-restaurant',
    title: 'Restaurant Websites & Systems',
    category: 'web',
    iconName: 'Utensils',
    description: 'Websites for local restaurants, featuring digital menus, online reservation requests, and commission-free food ordering directly from your site.',
    shortDesc: 'Digital menu, direct reservation requests, and commission-free ordering.',
    priceEstimate: 'Starting at KSh 4,000',
    image: '/src/assets/images/veloce_trattoria_1779689750255.png',
    features: ['Interactive digital food menu', 'Email/SMS table booking notifications', 'Direct delivery/pickup order options', 'Simple restaurant admin dashboard']
  },
  {
    id: 'graphic-branding',
    title: 'Visual Graphics & Corporate Identity',
    category: 'graphic',
    iconName: 'Palette',
    description: 'Clean, high-quality business assets and custom presentation illustrations that give your storefront a consistent, professional finish across print and web screens.',
    shortDesc: 'Sleek custom graphics, promotional materials, and logo suites.',
    priceEstimate: 'Starting at KSh 1,200',
    image: '/src/assets/images/local_logo_srv_1779692544679.png',
    features: ['Scalable files (.SVG, .PNG, .PDF)', 'Alternative graphic layout configurations', 'Business color schemes and theme selector', 'Complete design ownership transfer']
  },
  {
    id: 'graphic-campaigns',
    title: 'High-Impact Poster & Flyer Ads',
    category: 'graphic',
    iconName: 'Image',
    description: 'Eye-catching posters, flyers, and digital marketing banners designed to drive physical foot traffic, local RSVPs, and campaign sign-ups.',
    shortDesc: 'Digital & print-ready marketing flyers designed to attract customers.',
    priceEstimate: 'Starting at KSh 300',
    image: '/src/assets/images/flyer_poster_srv_1779692562955.png',
    features: ['Print-ready files (300 DPI)', 'Social media template package', 'Clean flyer layouts & font pairing', 'Print-shop setup guidance']
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Search Optimization',
    category: 'web',
    iconName: 'Search',
    description: 'Increase your search rankings and attract active local traffic. We set up professional key-term optimizations, Google Business profiles, and clean site structures.',
    shortDesc: 'Attract local clients and rank higher on Google search results.',
    priceEstimate: 'Starting at KSh 1,500',
    image: '/src/assets/images/seo_traffic_srv_1779692581410.png',
    features: ['On-page metadata & keyword optimization', 'Google Analytics & Search Console setup', 'Local competitive keywords review', 'Google Business Profile local setup']
  },
  {
    id: 'custom-software',
    title: 'Custom Software & Systems',
    category: 'software',
    iconName: 'Cpu',
    description: 'Custom client portals, database tools, CRM tracking dashboards, and task automations custom-built to match your team’s day-to-day operations.',
    shortDesc: 'Custom software tools built to organize and optimize your business.',
    priceEstimate: 'Starting at KSh 12,000',
    image: '/src/assets/images/apex_portal_1779689785777.png',
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
    description: 'A customized bulk grocery platform for organic produce, backed by robust local location routing, automatic checkout, and clean administrative control boards.',
    image: '/src/assets/images/verdant_market_1779689771801.png',
    technologies: ['React', 'Stripe checkout', 'Interactive Analytics'],
    clientName: 'Verdant Organic Grocers Ltd.',
    impactMetrics: 'Decreased cart abandonment by 28.5%'
  },
  {
    id: 'proj-3',
    title: 'Apex Prime Real Estate Portal',
    category: 'Software Development',
    description: 'A custom administrative workspace and client communication system engineered for a private property group to catalogue listings and track buyer briefs.',
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
    answer: 'Absolutely! We deal in stand-alone graphic design such as vector posters, promotional flyers, and clean business logos. We offer customized graphic design bundles to launch or upgrade your local brand presence.',
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
    answer: 'No hidden fees. We believe in absolute neutrality and transparency. We construct custom systems that you own entirely. Host options, service integrations, and domain setup will be itemized in our initial blueprint phase.',
    category: 'Software'
  },
  {
    id: 'faq-5',
    question: 'What is your primary color coding and design system?',
    answer: 'We craft digital interfaces with intention: Dodgerblue represents our professional technological stability (Primary), Red serves as high-impact highlights for action items and critical conversion elements, and Green offers a premium neutralist aesthetic.',
    category: 'Aesthetics'
  }
];
