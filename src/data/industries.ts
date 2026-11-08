export interface Industry {
  id: string
  title: string
  slug: string
  description: string
  solutions: string[]
  image: string
}

export const industries: Industry[] = [
  {
    id: 'banking',
    title: 'Banking and Financial Services',
    slug: 'banking',
    description: 'Modernize core banking, build secure digital payment platforms, and deploy AI for fraud detection, risk management, and personalized customer experiences.',
    solutions: [
      'Fraud detection and risk assessment algorithms',
      'AI-powered credit scoring models',
      'Core banking modernization frameworks',
      'Regulatory compliance automation'
    ],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 'healthcare',
    title: 'Healthcare and Life Sciences',
    slug: 'healthcare',
    description: 'Transform patient care with data-driven insights, secure health data pipelines, AI-assisted diagnostics, and HIPAA-compliant cloud architectures.',
    solutions: [
      'Clinical trial data integration platforms',
      'Patient health data analytics',
      'AI diagnostics support tools',
      'Regulatory compliance systems'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 'retail',
    title: 'Retail and E-commerce',
    slug: 'retail',
    description: 'Build hyper-personalized customer journeys, optimize supply chains with predictive ML models, and create seamless omnichannel experiences.',
    solutions: [
      'Personalized recommendation engines',
      'Inventory forecasting algorithms',
      'Omnichannel commerce platforms',
      'Customer churn prediction'
    ],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industry 4.0',
    slug: 'manufacturing',
    description: 'Deploy Industry 4.0 solutions, IoT analytics, predictive maintenance models, and intelligent supply chain optimization platforms.',
    solutions: [
      'Predictive equipment maintenance',
      'IoT device telemetry analysis',
      'Supply chain optimization models',
      'Quality control computer vision'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 'edtech',
    title: 'Education and EdTech',
    slug: 'edtech',
    description: 'Power next-generation learning platforms with personalized learning paths, AI tutors, adaptive assessment systems, and scalable educational analytics.',
    solutions: [
      'Adaptive learning algorithms',
      'AI educational content generators',
      'Student engagement analytics',
      'Scalable LMS infrastructure'
    ],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 'telecom',
    title: 'Telecommunications',
    slug: 'telecom',
    description: 'Optimize network performance with real-time analytics, automate customer service workflows, and accelerate 5G enterprise solution delivery.',
    solutions: [
      'Network traffic prediction models',
      'Autonomous customer support agents',
      'Subscriber churn prevention analytics',
      'Billing & OSS/BSS integration'
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&crop=center'
  }
]
