export interface AiTopic {
  id: string
  title: string
  detail: string
}

export const AI_TOPICS: AiTopic[] = [
  {
    id: 'llm',
    title: 'LLM Architecture',
    detail: 'Studying how large language models are structured and how components interact.',
  },
  {
    id: 'transformers',
    title: 'Transformers',
    detail: 'Exploring attention, layers, and the building blocks behind modern language models.',
  },
  {
    id: 'embeddings',
    title: 'Embeddings',
    detail: 'Learning how meaning becomes vectors and how similarity search powers AI features.',
  },
  {
    id: 'rag',
    title: 'RAG',
    detail: 'Experimenting with retrieval-augmented generation for grounded, context-aware answers.',
  },
  {
    id: 'agents',
    title: 'AI Agents',
    detail: 'Building ideas around agents that plan, use tools, and complete multi-step tasks.',
  },
  {
    id: 'local',
    title: 'Local AI',
    detail: 'Running and integrating models locally for privacy-focused experimentation.',
  },
  {
    id: 'experimentation',
    title: 'Model Experimentation',
    detail: 'Trying architectures, prompts, and pipelines to understand what actually works.',
  },
  {
    id: 'applications',
    title: 'AI Applications',
    detail: 'Turning AI concepts into practical software features and prototypes.',
  },
]
