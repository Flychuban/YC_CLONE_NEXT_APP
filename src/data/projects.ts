export interface ProjectDetails {
  id: string
  title: string
  shortDescription: string
  description: string
  fullDescription: string
  image: string
  images: string[]
  tags: string[]
  technologies: string[]
  link: string
  github: string
  featured: boolean
  year: number
  role: string
  results: {
    label: string
    value: string
  }[]
  sections: {
    title: string
    content: string
  }[]
  testimonial?: {
    name: string
    role: string
    company: string
    quote: string
  }
}

export const projects: ProjectDetails[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'High-performance e-commerce solution handling 10K+ daily users',
    description: 'Full-stack e-commerce platform with real-time inventory management, payment processing, and advanced admin dashboard.',
    fullDescription: 'A complete e-commerce ecosystem built with modern technologies, designed to scale to enterprise level. Includes real-time inventory sync, multi-currency support, and intelligent recommendation engine.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db20?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-adf4e565db20?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&h=600&fit=crop',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    technologies: ['React 18', 'TypeScript', 'Express.js', 'MongoDB', 'Stripe API', 'Redis', 'Docker'],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    year: 2023,
    role: 'Full Stack Developer',
    results: [
      { label: 'Performance Score', value: '98/100' },
      { label: 'Daily Active Users', value: '10,000+' },
      { label: 'Conversion Rate Increase', value: '40%' },
      { label: 'Page Load Time', value: '1.2s' },
    ],
    sections: [
      {
        title: 'Challenge',
        content: 'The client needed a scalable e-commerce solution that could handle rapid growth and complex inventory management across multiple regions.',
      },
      {
        title: 'Solution',
        content: 'Built a microservices architecture with React frontend, Express backend, and MongoDB database. Implemented real-time inventory sync with WebSockets and optimized payment processing with Stripe.',
      },
      {
        title: 'Impact',
        content: 'Increased conversion rates by 40%, reduced page load times to 1.2 seconds, and achieved 98/100 Lighthouse score.',
      },
    ],
    testimonial: {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechFlow Inc',
      quote: 'Alex delivered an exceptional platform that exceeded our expectations. The attention to detail and performance optimization is outstanding.',
    },
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    shortDescription: 'Real-time data visualization for 1M+ monthly queries',
    description: 'Advanced analytics dashboard with interactive charts, custom reports, and real-time data synchronization.',
    fullDescription: 'Enterprise-grade analytics platform providing real-time insights with interactive visualizations, custom report generation, and predictive analytics capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop',
    ],
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    technologies: ['React 18', 'TypeScript', 'D3.js', 'Apache Superset', 'PostgreSQL', 'Node.js'],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    year: 2023,
    role: 'Lead Frontend Developer',
    results: [
      { label: 'Query Load Time', value: '1.2s' },
      { label: 'Monthly Queries', value: '1,000,000+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'User Satisfaction', value: '4.9/5' },
    ],
    sections: [
      {
        title: 'Challenge',
        content: 'Create a high-performance analytics platform capable of handling millions of queries daily with 60fps animations.',
      },
      {
        title: 'Solution',
        content: 'Implemented virtual scrolling, data virtualization, and WebWorkers for heavy computations. Used D3.js for custom visualizations.',
      },
      {
        title: 'Impact',
        content: 'Achieved 99.99% uptime, sub-second query response times, and 4.9/5 user satisfaction rating.',
      },
    ],
    testimonial: {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'DataViz Startup',
      quote: 'The dashboard transformed how we analyze our data. Performance is incredible and the UX is intuitive.',
    },
  },
  {
    id: 'design-system',
    title: 'Design System',
    shortDescription: 'Component library with 100+ production-ready components',
    description: 'Comprehensive design system and component library with accessibility guidelines and Figma integration.',
    fullDescription: 'Enterprise design system providing standardized components, design tokens, and comprehensive documentation for seamless design-to-development workflow.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    ],
    tags: ['React', 'Storybook', 'Tailwind', 'Figma'],
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Figma', 'Accessibility'],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    year: 2023,
    role: 'Design System Lead',
    results: [
      { label: 'Components', value: '100+' },
      { label: 'Development Time Saved', value: '45%' },
      { label: 'Design Consistency', value: '98%' },
      { label: 'Adoption Rate', value: '95%' },
    ],
    sections: [
      {
        title: 'Challenge',
        content: 'Multiple teams were creating duplicate components, leading to inconsistent UI and slowing development.',
      },
      {
        title: 'Solution',
        content: 'Built a comprehensive design system with 100+ components, full accessibility support, and Figma integration.',
      },
      {
        title: 'Impact',
        content: 'Reduced development time by 45%, improved design consistency to 98%, and achieved 95% adoption rate across teams.',
      },
    ],
    testimonial: {
      name: 'Emily Rodriguez',
      role: 'CTO',
      company: 'CloudBuild Solutions',
      quote: 'This design system standardized our entire product suite. The documentation and components are production-ready.',
    },
  },
  {
    id: 'saas-platform',
    title: 'SaaS Analytics Platform',
    shortDescription: 'Multi-tenant analytics with sentiment analysis and trend detection',
    description: 'Enterprise SaaS platform with multi-tenant architecture, advanced analytics, and competitor benchmarking.',
    fullDescription: 'Comprehensive SaaS analytics platform built for enterprises, featuring real-time data processing, multi-tenant isolation, and advanced ML-powered insights.',
    image: 'https://images.unsplash.com/photo-1559526323-cd4628902d4a?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1559526323-cd4628902d4a?w=1200&h=600&fit=crop',
    ],
    tags: ['Next.js', 'Python', 'AWS', 'PostgreSQL'],
    technologies: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'AWS', 'Machine Learning'],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: false,
    year: 2023,
    role: 'Full Stack Developer',
    results: [
      { label: 'Enterprise Clients', value: '50+' },
      { label: 'Data Accuracy', value: '99.7%' },
      { label: 'Processing Speed', value: '10x faster' },
      { label: 'Churn Rate', value: '2%' },
    ],
    sections: [
      {
        title: 'Challenge',
        content: 'Build scalable SaaS platform with multi-tenant isolation and real-time analytics capabilities.',
      },
      {
        title: 'Solution',
        content: 'Implemented Next.js with serverless AWS infrastructure and Python ML pipeline for advanced analytics.',
      },
      {
        title: 'Impact',
        content: 'Acquired 50+ enterprise clients with 98% retention rate and 10x faster processing than competitors.',
      },
    ],
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    shortDescription: 'Cross-platform mobile application with 500K+ downloads',
    description: 'Native-like mobile application built with React Native for iOS and Android platforms.',
    fullDescription: 'High-performance mobile application delivering native experience across iOS and Android with offline-first architecture.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    ],
    tags: ['React Native', 'Firebase', 'Stripe'],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Stripe', 'Redux'],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: false,
    year: 2023,
    role: 'Mobile Lead',
    results: [
      { label: 'Downloads', value: '500K+' },
      { label: 'Rating', value: '4.8/5' },
      { label: 'Retention (30d)', value: '65%' },
      { label: 'Performance Score', value: '95/100' },
    ],
    sections: [
      {
        title: 'Challenge',
        content: 'Create cross-platform mobile app with native performance and offline-first capabilities.',
      },
      {
        title: 'Solution',
        content: 'Built with React Native and Firebase for real-time sync and offline support.',
      },
      {
        title: 'Impact',
        content: 'Achieved 500K+ downloads with 4.8/5 rating and 65% 30-day retention.',
      },
    ],
  },
]
