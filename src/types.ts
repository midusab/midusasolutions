export interface Service {
  id: string;
  title: string;
  category: 'web' | 'graphic' | 'software';
  iconName: string; // Lucide icon name
  description: string;
  shortDesc: string;
  priceEstimate: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Website Design' | 'E-commerce' | 'Portfolio & Brand' | 'Graphic Design' | 'Software Development';
  description: string;
  image: string;
  technologies: string[];
  clientName: string;
  impactMetrics: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface OutreachSubmission {
  name: string;
  email: string;
  businessName: string;
  projectType: string;
  budgetRange: string;
  details: string;
  timestamp: string;
}
