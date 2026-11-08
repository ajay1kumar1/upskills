export interface Article {
  id: string
  title: string
  slug: string
  category: string
  readTime: string
  date: string
  summary: string
  content: string
  author: {
    name: string
    role: string
  }
  image: string
}

export const insights: Article[] = [
  {
    id: 'enterprise-agentic-ai',
    title: 'Architecting Agentic AI for the Enterprise: Beyond Chatbots to Autonomous Workflows',
    slug: 'enterprise-agentic-ai',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    date: 'October 24, 2026',
    summary: 'Discover how enterprise leaders are transitioning from static LLM prompts to dynamic, goal-driven multi-agent architectures that execute complex business tasks securely.',
    author: {
      name: 'Sapna Singh',
      role: 'CEO & Founder, Upskills.in'
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&crop=center',
    content: `
      Enterprise AI adoption is undergoing a fundamental paradigm shift. While early generative AI implementations focused primarily on conversational assistants and document summaries, leading organizations are now deploying **Agentic AI systems** capable of autonomous decision-making and multi-step execution.

      ### The Evolution from Chatbots to Autonomous Agents
      Traditional LLM wrappers operate in a strictly reactive manner: prompt in, completion out. Agentic AI systems, by contrast, possess key characteristics required for modern enterprise workflows:

      1. **Goal Decomposition**: Breaking down complex executive prompts into actionable sub-tasks.
      2. **Tool Use & API Orchestration**: Calling external databases, ERP APIs, and enterprise software platforms autonomously.
      3. **Self-Reflection & Error Correction**: Evaluating intermediate output against business logic and retrying failed operations automatically.
      4. **Memory Retention**: Maintaining state across long-running operational workflows.

      ### Key Architectural Components of Enterprise RAG & Agents
      Building robust AI agents requires a layered infrastructure designed for security, auditability, and deterministic outcomes:

      * **Orchestration Layer**: Managing task loops, context windows, and tool dispatching safely.
      * **Enterprise Vector Store**: Providing real-time contextual grounding via high-performance embeddings.
      * **Guardrails & Governance**: Ensuring data loss prevention (DLP), policy enforcement, and role-based access control (RBAC).

      Organizations that systematically integrate agentic workflows into their core IT ecosystem will achieve unprecedented speed and operational agility.
    `
  },
  {
    id: 'enterprise-rag-architecture',
    title: 'Enterprise RAG Blueprint: Securing Private Knowledge for Generative AI',
    slug: 'enterprise-rag-architecture',
    category: 'Architecture',
    readTime: '8 min read',
    date: 'October 12, 2026',
    summary: 'A deep dive into Retrieval-Augmented Generation (RAG) architectures that allow enterprise foundation models to leverage internal domain knowledge securely.',
    author: {
      name: 'Upskills Technology Team',
      role: 'Enterprise AI Practice'
    },
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&crop=center',
    content: `
      Retrieval-Augmented Generation (RAG) has emerged as the definitive pattern for introducing proprietary domain knowledge into Generative AI workflows without expensive model re-training.

      ### Why Naive RAG Fails in Production
      Standard vector search implementations often hit scale barriers in enterprise deployments. Common failure modes include:
      * Irrelevant chunk retrieval due to poor document parsing.
      * Out-of-date vector indices missing real-time database updates.
      * Security breaches resulting from un-filtered vector queries that bypass document permission hierarchies.

      ### The Production-Ready Enterprise RAG Stack
      To achieve 99%+ accuracy and strict compliance, enterprise architecture must incorporate hybrid search (combining dense vector embeddings with sparse keyword search), intelligent re-ranking, and dynamic ACL (Access Control List) filtering before prompt construction.
    `
  },
  {
    id: 'cloud-modernization-strategy',
    title: 'Cloud Cost Governance and Platform Engineering: Navigating Legacy Migration',
    slug: 'cloud-modernization-strategy',
    category: 'Cloud & Infrastructure',
    readTime: '5 min read',
    date: 'September 28, 2026',
    summary: 'How modern platform engineering teams are leveraging automated FinOps and cloud-native standards to curb cloud spend while accelerating developer velocity.',
    author: {
      name: 'Upskills Technology Team',
      role: 'Cloud Engineering Practice'
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center',
    content: `
      As cloud infrastructure scales, unmanaged resource allocation and cloud sprawl frequently erode profit margins. Modern enterprise architectures require a disciplined Platform Engineering approach to unify developer experience and cloud spend control.
    `
  }
]
