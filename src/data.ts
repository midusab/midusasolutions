import { Service, Project, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    category: 'web',
    iconName: 'Globe',
    description: 'We understand your unique business needs and engineer a custom website that builds credibility and boosts your business presence. Perfect for local business owners looking to win their first digital customers.',
    shortDesc: 'Custom website development tailored to understand your needs and boost presence.',
    priceEstimate: 'Starting at KSh 4,000',
    image: '/src/assets/images/web_business_srv_1779692525316.png',
    features: ['Responsive layouts optimized for mobile displays', 'Custom on-page Google Search optimization', 'Direct contact channels & lead collection forms', 'Sleek Inter typography with lightning-fast load times']
  },
  {
    id: 'web-design',
    title: 'Website Design & UI/UX',
    category: 'graphic',
    iconName: 'Palette',
    description: 'Beautiful, clean interactive website designs custom-crafted before coding. We structure simple, eye-pleasing layouts that flow naturally and make it easy for your local visitors to take action.',
    shortDesc: 'Sleek user interface mockups and clean interactive wireframes.',
    priceEstimate: 'Starting at KSh 1,500',
    image: '/src/assets/images/ui_ux_srv_design_1779693013521.png',
    features: ['Custom visual layout prototyping', 'Modern Inter font size and hierarchy pairings', 'Mobile viewport responsive guidelines', 'Clean aesthetic styling personalized to your brand']
  },
  {
    id: 'posters-flyers',
    title: 'Posters & Flyers Design',
    category: 'graphic',
    iconName: 'Image',
    description: 'High-impact, custom posters and flyer designs that capture immediate attention. Ideal for local product campaigns, restaurant menus, retail sales, or school and community event banners.',
    shortDesc: 'Print-ready posters and promotional flyers to drive local business.',
    priceEstimate: 'Starting at KSh 400',
    image: '/src/assets/images/flyer_poster_srv_1779692562955.png',
    features: ['Print-ready formats (300 DPI high resolution)', 'Elegant layouts with clean color harmony', 'Social media flyer variants for status updates', '100% vector design formats for crisp printing']
  },
  {
    id: 'clothing-ecommerce',
    title: 'Clothing & Retail E-commerce',
    category: 'web',
    iconName: 'ShoppingCart',
    description: 'Clean online stores designed specifically for clothing brands and retail boutiques. Fully equipped with modern item showcases, structured catalog navigation, and automated checkout options.',
    shortDesc: 'Custom virtual storefronts for clothing brands and local boutique stores.',
    priceEstimate: 'Starting at KSh 8,000',
    image: '/src/assets/images/verdant_market_1779689771801.png',
    features: ['Polished clothing visual grid with categorization', 'Seamless checkout with direct WhatsApp order routing', 'Mobile-first cart and simplified touch controls', 'Beautifully scaled banner and tag badges']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Grand Horizon Hotel Website',
    category: 'Website Design',
    description: 'A premium, highly interactive hotel website showcasing deluxe rooms, dining services, and direct booking inquiries. Built to establish a premium hospitality presence and secure direct local reservations.',
    image: '/src/assets/images/veloce_trattoria_1779689750255.png',
    technologies: ['React', 'Inter Aesthetics', 'Inquiry Routing'],
    clientName: 'Grand Horizon Hotel & Suites',
    impactMetrics: 'Established a 100% direct digital booking channel'
  },
  {
    id: 'proj-2',
    title: 'Creative Professional Showcase',
    category: 'Portfolio & Brand',
    description: 'A minimalist digital portfolio website created for a professional designer to market architectural blueprints and graphic projects. Engineered for bold readability and rapid page load speed.',
    image: '/src/assets/images/sustainabrand_suite_1779689803596.png',
    technologies: ['React', 'Sleek Inter Layouts', 'Responsive Gallery'],
    clientName: 'Alex Kirui Design Studio',
    impactMetrics: 'Boosted inquiries by setting up a clear brand home'
  },
  {
    id: 'proj-3',
    title: 'AttireCo Online Clothing Boutique',
    category: 'E-commerce',
    description: 'A fully responsive e-commerce storefront for a local clothing apparel brand. Powered by modular design structures, clean item cards, and automatic checkout triggers.',
    image: '/src/assets/images/verdant_market_1779689771801.png',
    technologies: ['React', 'WhatsApp Checkout', 'Interactive Product Grid'],
    clientName: 'AttireCo Kenya Apparel',
    impactMetrics: 'Streamlined online purchase ordering through WhatsApp'
  },
  {
    id: 'proj-4',
    title: 'Verve Logistics Launch Platform',
    category: 'Website Design',
    description: 'A high-converting single-page landing platform for an emerging local delivery venture. Understands the local business needs to construct immediate trust, showcase service routes, and drive sign-ups.',
    image: '/src/assets/images/apex_portal_1779689785777.png',
    technologies: ['React', 'Brand Copywriting', 'Lead Collection Form'],
    clientName: 'Verve Logistics Ltd',
    impactMetrics: 'Acquired 150+ corporate local clients in month one'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you understand a business needs before building a website?',
    answer: 'We begin by diagnosing your exact target group and current market challenge. If you lack an online presence, we help layout the specific sections, wording, and functions required to display your professional credibility and boost incoming client calls.',
    category: 'Websites'
  },
  {
    id: 'faq-2',
    question: 'Do you design custom posters and flyers separately from websites?',
    answer: 'Yes! We design gorgeous posters, custom flyers, and digital marketing banners for social media status updates or print shops to help draw immediate attention to your business products or local events.',
    category: 'Graphics'
  },
  {
    id: 'faq-3',
    question: 'How does a custom website help local businesses with no presence?',
    answer: 'When prospective clients hear about your business, they search online to verify if you are real. A polished website styled with modern Inter typography, showing real photos and your services, instantly converts doubts into phone calls and direct orders.',
    category: 'Web Presence'
  },
  {
    id: 'faq-4',
    question: 'Are there hidden developer fees or ongoing platform costs?',
    answer: 'No hidden or recurring fees. We build custom websites that you completely own. Host selection, domains, and messaging numbers are fully registered in your details, ensuring 100% independence of your code and visuals.',
    category: 'Owner Ownership'
  }
];
