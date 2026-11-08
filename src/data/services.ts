export interface Service {
  id: string
  title: string
  description: string
  challenges: string[]
  capabilities: string[]
  benefits: string[]
  image: string
  slug: string
  category: string
}

export const services: Service[] = [
  {
    id: 'it-consulting',
    title: 'IT Consulting and Enterprise Architecture',
    slug: 'it-consulting',
    category: 'Strategic Consulting',
    description: 'Architect your enterprise technology landscape with proven frameworks and industry best practices. We align technology strategy with business objectives, design target operating models, and establish technology governance for sustainable growth.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Technology debt and legacy system complexity',
      'Misalignment between IT strategy and business objectives',
      'Lack of enterprise-wide technology governance',
      'Difficulty in making technology investments measurable'
    ],
    capabilities: [
      'Enterprise architecture planning and roadmap development',
      'Technology assessment and modernization strategy',
      'Enterprise application architecture design',
      'Technology governance framework implementation'
    ],
    benefits: [
      'Clear technology roadmaps aligned with business strategy',
      'Reduced technology complexity and operational costs',
      'Improved governance and risk management',
      'Faster time-to-market for new initiatives'
    ]
  },
  {
    id: 'ai-generative',
    title: 'Artificial Intelligence and Generative AI',
    slug: 'ai-generative',
    category: 'Artificial Intelligence',
    description: 'Implement enterprise-grade AI solutions that drive operational efficiency and create new revenue streams. From generative AI to intelligent automation, we help you transform data into actionable intelligence.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Evaluating AI opportunities and use cases',
      'Data quality and availability for AI models',
      'AI model governance and responsible AI',
      'Integration of AI with existing enterprise systems'
    ],
    capabilities: [
      'AI strategy and use case identification',
      'Large language model fine-tuning and deployment',
      'Retrieval-augmented generation (RAG) implementation',
      'AI governance and responsible AI frameworks'
    ],
    benefits: [
      'Significant operational cost reduction',
      'Enhanced decision making with AI insights',
      'New AI-powered product and service offerings',
      'Competitive advantage through intelligent automation'
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI and Intelligent Automation',
    slug: 'agentic-ai',
    category: 'Artificial Intelligence',
    description: 'Deploy autonomous AI agents that handle complex workflows, make decisions, and interact with customers and systems. Create intelligent automation that scales with your business.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Complex multi-step processes that require human oversight',
      'Integration challenges between systems and AI agents',
      'Ensuring reliable agent behavior in production',
      'Managing agent autonomy within business guardrails'
    ],
    capabilities: [
      'Multi-agent system design and orchestration',
      'Agent workflow automation and monitoring',
      'Integration with enterprise tools and systems',
      'Agent performance tuning and optimization'
    ],
    benefits: [
      '24/7 autonomous operation of business processes',
      'Reduced human error in repetitive tasks',
      'Improved customer experience through intelligent agents',
      'Scalable automation without proportional headcount growth'
    ]
  },
  {
    id: 'ml-deep-learning',
    title: 'Machine Learning and Deep Learning',
    slug: 'ml-deep-learning',
    category: 'Artificial Intelligence',
    description: 'Build predictive and prescriptive models that anticipate customer behavior, optimize operations, and deliver data-driven insights. Harness the power of machine learning at enterprise scale.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Data silos preventing model training',
      'Lack of MLOps capabilities for model lifecycle',
      'Model drift and performance degradation',
      'Explainability requirements for regulated industries'
    ],
    capabilities: [
      'Predictive analytics and forecasting models',
      'Computer vision and NLP solution development',
      'MLOps pipeline design and implementation',
      'Model monitoring and continuous improvement'
    ],
    benefits: [
      'Accurate predictions for better business decisions',
      'Automated insights discovery from historical patterns',
      'Reduced manual analysis effort',
      'Continuous learning and adaptation to changing conditions'
    ]
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering and Analytics',
    slug: 'data-engineering',
    category: 'Data & Analytics',
    description: 'Build robust data pipelines, lakehouses, and analytics platforms that provide a single source of truth for your enterprise. Transform raw data into actionable business intelligence.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Data scattered across multiple systems and platforms',
      'Real-time processing requirements',
      'Data quality and governance concerns',
      'Scaling analytics to support business growth'
    ],
    capabilities: [
      'Data pipeline architecture and implementation',
      'Data lake and data warehouse design',
      'Real-time streaming analytics solutions',
      'Self-service BI and analytics platform setup'
    ],
    benefits: [
      'Unified view of enterprise data',
      'Faster insights delivery to business users',
      'Cost-effective data storage and processing',
      'Improved data quality and governance'
    ]
  },
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture and Migration',
    slug: 'cloud-architecture',
    category: 'Cloud & Infrastructure',
    description: 'Design and implement cloud solutions that scale with your business. Modernize your infrastructure with cloud-native architectures that improve performance, resilience, and cost efficiency.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Multi-cloud complexity and vendor lock-in concerns',
      'Security and compliance in cloud environments',
      'Optimizing cloud costs without sacrificing performance',
      'Skills gap in cloud-native technologies'
    ],
    capabilities: [
      'Cloud readiness assessment and migration planning',
      'Multi-cloud and hybrid cloud architecture design',
      'Cloud cost optimization and governance',
      'Cloud-native application modernization'
    ],
    benefits: [
      'Reduced infrastructure costs and improved efficiency',
      'Enhanced scalability and disaster recovery',
      'Faster deployment and time-to-market',
      'Improved security posture and compliance'
    ]
  },
  {
    id: 'app-modernization',
    title: 'Application Development and Modernization',
    slug: 'app-modernization',
    category: 'Software Engineering',
    description: 'Modernize monolithic applications into microservices and cloud-native architectures. Build high-performance web, mobile, and enterprise software designed for reliability and scale.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'High maintenance costs of legacy codebases',
      'Slow feature velocity and release cycles',
      'Scalability bottlenecks under peak load',
      'Inflexible technical architectures'
    ],
    capabilities: [
      'Legacy monolith re-architecting to microservices',
      'Modern web application development (React, Next, Node)',
      'Cross-platform mobile application development',
      'Domain-Driven Design (DDD) implementation'
    ],
    benefits: [
      'Faster feature deployment velocity',
      'Seamless horizontal scalability under high traffic',
      'Reduced ongoing maintenance overhead',
      'Enhanced user experience and engagement'
    ]
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software Solutions',
    slug: 'enterprise-software',
    category: 'Software Engineering',
    description: 'Custom enterprise software platforms built to digitize core business processes, integrate supply chain workflows, and optimize resource planning.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Off-the-shelf software failing to match custom workflows',
      'Fragmented tools creating operational silos',
      'Inconsistent security compliance across departments',
      'High licensing fees with underutilized features'
    ],
    capabilities: [
      'Custom ERP & CRM solution engineering',
      'Workflow automation and portal development',
      'Enterprise role-based access control (RBAC)',
      'Audit logging and compliance infrastructure'
    ],
    benefits: [
      'Tailored enterprise software aligned to exact processes',
      'Single pane of glass operational visibility',
      'Elimination of redundant third-party license costs',
      'Enhanced data security and governance'
    ]
  },
  {
    id: 'devops-mlops',
    title: 'DevOps, MLOps and Platform Engineering',
    slug: 'devops-mlops',
    category: 'Cloud & Infrastructure',
    description: 'Automate CI/CD pipelines, container orchestration, and machine learning lifecycle operations. Build internal developer platforms that empower engineering teams.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Manual deployment processes prone to human error',
      'Slow model deployment cycles in machine learning',
      'Developer friction due to environment mismatches',
      'Lack of visibility into system telemetry and observability'
    ],
    capabilities: [
      'Kubernetes and container orchestration setup',
      'Automated CI/CD pipeline engineering',
      'MLOps model registry, training, and tracking pipelines',
      'Infrastructure as Code (Terraform, Pulumi)'
    ],
    benefits: [
      'Daily zero-downtime production releases',
      'Automated ML model retraining and deployment',
      'Consistent, reproducible environments across stages',
      'Improved developer velocity and team productivity'
    ]
  },
  {
    id: 'api-microservices',
    title: 'API Integration and Microservices',
    slug: 'api-microservices',
    category: 'Software Engineering',
    description: 'Connect disparate enterprise platforms via secure, high-throughput REST and GraphQL APIs. Design scalable microservices architectures.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Siloed systems unable to share data seamlessly',
      'Brittle API integrations breaking under load',
      'Lack of API security, rate limiting, and monitoring',
      'Unmanaged API endpoints creating security vulnerabilities'
    ],
    capabilities: [
      'Enterprise API gateway implementation',
      'GraphQL & REST API design and documentation',
      'Event-driven architecture with Kafka/RabbitMQ',
      'Third-party ERP, CRM, and payment API integrations'
    ],
    benefits: [
      'Seamless interoperability across enterprise tools',
      'High-performance event-driven data distribution',
      'Centralized API governance and security monitoring',
      'Reduced integration failure rates'
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    slug: 'digital-transformation',
    category: 'Strategic Consulting',
    description: 'Guide executive leadership through end-to-end digital transformation. Align culture, processes, data, and technology for competitive advantage.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Resistance to organizational and technology change',
      'Unclear digital roadmap prioritizing tech over value',
      'Fragmented digital initiatives lacking central governance',
      'Difficulty in tracking digital maturity metrics'
    ],
    capabilities: [
      'Digital maturity assessment and vision roadmap',
      'Operating model and organizational change strategy',
      'Customer experience (CX) digital design',
      'Technology portfolio prioritization'
    ],
    benefits: [
      'Unified executive strategy for digital growth',
      'Accelerated organizational agility and innovation',
      'Enhanced customer and employee experiences',
      'Maximization of technology investment ROI'
    ]
  },
  {
    id: 'tech-staffing',
    title: 'Technology Staffing and Engineering Services',
    slug: 'tech-staffing',
    category: 'Strategic Consulting',
    description: 'Scale your technical capacity with elite software engineers, AI researchers, cloud architects, and DevOps specialists integrated into your agile teams.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center',
    challenges: [
      'Talent shortages in niche AI, Cloud, and Data domains',
      'Long recruitment cycles delaying key project milestones',
      'Difficulty in vetting top-tier technical capability',
      'High overhead associated with full-time hiring'
    ],
    capabilities: [
      'Dedicated engineering team augmentation',
      'Specialized AI/ML research and development talent',
      'Senior Cloud Architecture and DevOps talent',
      'Agile squad delivery model'
    ],
    benefits: [
      'Rapid ramp-up of expert technical talent',
      'Flexible engagement models matching project lifecycle',
      'Rigorously vetted, enterprise-ready engineers',
      'Reduced time-to-market for critical releases'
    ]
  }
]

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug)
