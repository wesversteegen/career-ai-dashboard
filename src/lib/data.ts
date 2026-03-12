export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: "Remote" | "Hybrid" | "On-site";
  salary: string;
  matchScore: number;
  matchReason: string;
  tags: string[];
  postedAt: string;
  description: string;
  skillOverlap: string[];
  skillGaps: string[];
  saved?: boolean;
  companyInfo?: {
    size: string;
    funding: string;
    rating: number;
    industry: string;
  };
}

export interface Application {
  id: string;
  jobId: string;
  company: string;
  role: string;
  status: "applied" | "screening" | "interview" | "offer" | "rejected";
  appliedAt: string;
  lastUpdate: string;
  nextStep?: string;
  interviewDate?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface UserProfile {
  name: string;
  title: string;
  avatar: string;
  targetRole: string;
  targetSalary: string;
  skills: string[];
  experience: number;
  profileStrength: number;
  matchRate: number;
  applicationsSent: number;
  interviews: number;
  savedJobs: number;
}

export const user: UserProfile = {
  name: "Alex Chen",
  title: "Senior AI Engineer",
  avatar: "AC",
  targetRole: "Staff AI / ML Engineer",
  targetSalary: "$180k - $250k",
  skills: [
    "Python", "PyTorch", "TensorFlow", "LLMs", "RAG",
    "Transformers", "MLOps", "Kubernetes", "AWS", "Fine-tuning",
    "LangChain", "Vector Databases", "Computer Vision", "NLP"
  ],
  experience: 6,
  profileStrength: 82,
  matchRate: 73,
  applicationsSent: 28,
  interviews: 5,
  savedJobs: 12,
};

export const jobs: Job[] = [
  {
    id: "1",
    title: "Staff AI Engineer",
    company: "Anthropic",
    companyLogo: "A",
    location: "San Francisco, CA",
    type: "Hybrid",
    salary: "$220k - $310k",
    matchScore: 94,
    matchReason: "Your 6 years of ML experience and deep expertise in LLMs and fine-tuning directly align with their core research engineering needs.",
    tags: ["Series C", "AI Safety", "LLMs", "Research"],
    postedAt: "2 days ago",
    description: "Build and optimize large language models, develop evaluation frameworks, and contribute to alignment research.",
    skillOverlap: ["Python", "PyTorch", "LLMs", "Fine-tuning", "Transformers", "NLP"],
    skillGaps: ["Rust"],
    saved: true,
    companyInfo: { size: "800+", funding: "Series C", rating: 4.8, industry: "AI Safety" },
  },
  {
    id: "2",
    title: "Senior ML Engineer - Foundation Models",
    company: "OpenAI",
    companyLogo: "O",
    location: "San Francisco, CA",
    type: "On-site",
    salary: "$245k - $350k",
    matchScore: 91,
    matchReason: "Strong match on LLM training and Transformer architecture. Your PyTorch and distributed training experience is exactly what they need.",
    tags: ["Foundation Models", "Scale", "Research", "GPT"],
    postedAt: "1 day ago",
    description: "Work on next-generation foundation models, improve training infrastructure, and push the boundaries of AI capabilities.",
    skillOverlap: ["Python", "PyTorch", "LLMs", "Transformers", "NLP", "Kubernetes"],
    skillGaps: ["Triton", "CUDA"],
    saved: false,
    companyInfo: { size: "2000+", funding: "Series E", rating: 4.5, industry: "AI Research" },
  },
  {
    id: "3",
    title: "AI Platform Engineer",
    company: "Stripe",
    companyLogo: "S",
    location: "Remote (US)",
    type: "Remote",
    salary: "$195k - $275k",
    matchScore: 87,
    matchReason: "Your MLOps and Kubernetes experience maps perfectly to their AI platform infrastructure needs. RAG expertise is a bonus.",
    tags: ["Fintech", "Remote", "Platform", "MLOps"],
    postedAt: "3 days ago",
    description: "Build scalable ML infrastructure for fraud detection, revenue optimization, and intelligent automation across Stripe products.",
    skillOverlap: ["Python", "MLOps", "Kubernetes", "AWS", "RAG", "LangChain"],
    skillGaps: ["Ruby", "Terraform"],
    companyInfo: { size: "8000+", funding: "Public", rating: 4.4, industry: "Fintech" },
  },
  {
    id: "4",
    title: "Lead ML Engineer - Computer Vision",
    company: "Tesla",
    companyLogo: "T",
    location: "Palo Alto, CA",
    type: "On-site",
    salary: "$200k - $300k",
    matchScore: 78,
    matchReason: "Your Computer Vision and PyTorch skills are highly relevant. Gap in autonomous systems experience slightly reduces match.",
    tags: ["Autonomous", "Computer Vision", "Edge AI"],
    postedAt: "5 days ago",
    description: "Lead the development of computer vision models for autonomous driving perception systems.",
    skillOverlap: ["Python", "PyTorch", "Computer Vision", "TensorFlow"],
    skillGaps: ["C++", "Edge Deployment", "ONNX"],
    companyInfo: { size: "140k+", funding: "Public", rating: 3.9, industry: "Automotive / AI" },
  },
  {
    id: "5",
    title: "Staff Engineer - AI Products",
    company: "Notion",
    companyLogo: "N",
    location: "New York, NY",
    type: "Hybrid",
    salary: "$190k - $260k",
    matchScore: 85,
    matchReason: "Excellent RAG and LangChain experience for their AI-powered features. Your vector database knowledge is particularly valuable.",
    tags: ["Product", "AI Features", "Series C", "RAG"],
    postedAt: "1 day ago",
    description: "Build AI-powered features for Notion's workspace, including smart search, AI writing assistant, and knowledge graph.",
    skillOverlap: ["Python", "LLMs", "RAG", "LangChain", "Vector Databases", "NLP"],
    skillGaps: ["TypeScript"],
    companyInfo: { size: "500+", funding: "Series C", rating: 4.6, industry: "Productivity" },
  },
  {
    id: "6",
    title: "Senior AI Engineer - NLP",
    company: "Cohere",
    companyLogo: "C",
    location: "Remote",
    type: "Remote",
    salary: "$185k - $265k",
    matchScore: 89,
    matchReason: "Your NLP specialization and transformer expertise are core to this role. Strong cultural fit with their research-driven approach.",
    tags: ["NLP", "Remote", "Embeddings", "Enterprise AI"],
    postedAt: "4 days ago",
    description: "Develop and optimize enterprise NLP models, embeddings, and retrieval systems for production deployment.",
    skillOverlap: ["Python", "PyTorch", "Transformers", "NLP", "LLMs", "Fine-tuning"],
    skillGaps: ["JAX"],
    companyInfo: { size: "400+", funding: "Series C", rating: 4.5, industry: "Enterprise AI" },
  },
  {
    id: "7",
    title: "ML Engineer - Recommendations",
    company: "Spotify",
    companyLogo: "Sp",
    location: "Stockholm / Remote",
    type: "Remote",
    salary: "$175k - $240k",
    matchScore: 72,
    matchReason: "Your ML fundamentals are strong, but this role focuses heavily on recommendation systems and A/B testing which aren't in your core skillset.",
    tags: ["RecSys", "Music", "A/B Testing", "Remote"],
    postedAt: "1 week ago",
    description: "Build and improve music recommendation algorithms serving 500M+ users worldwide.",
    skillOverlap: ["Python", "PyTorch", "TensorFlow", "AWS"],
    skillGaps: ["Recommendation Systems", "A/B Testing", "Scala"],
    companyInfo: { size: "9000+", funding: "Public", rating: 4.3, industry: "Music / Tech" },
  },
  {
    id: "8",
    title: "AI Research Engineer",
    company: "DeepMind",
    companyLogo: "D",
    location: "London, UK",
    type: "On-site",
    salary: "$200k - $320k",
    matchScore: 82,
    matchReason: "Strong research fundamentals and PyTorch experience. The role requires more publications and research experience than your profile shows.",
    tags: ["Research", "AGI", "Publications", "Google"],
    postedAt: "3 days ago",
    description: "Conduct fundamental AI research in areas such as reasoning, planning, and multimodal understanding.",
    skillOverlap: ["Python", "PyTorch", "Transformers", "NLP", "Computer Vision"],
    skillGaps: ["JAX", "Publications", "PhD preferred"],
    companyInfo: { size: "3000+", funding: "Alphabet", rating: 4.7, industry: "AI Research" },
  },
];

export const applications: Application[] = [
  {
    id: "a1",
    jobId: "1",
    company: "Anthropic",
    role: "Staff AI Engineer",
    status: "interview",
    appliedAt: "Feb 28, 2026",
    lastUpdate: "Mar 10, 2026",
    nextStep: "Technical interview round 2",
    interviewDate: "Mar 15, 2026",
  },
  {
    id: "a2",
    jobId: "5",
    company: "Notion",
    role: "Staff Engineer - AI Products",
    status: "screening",
    appliedAt: "Mar 5, 2026",
    lastUpdate: "Mar 9, 2026",
    nextStep: "Recruiter phone screen",
    interviewDate: "Mar 14, 2026",
  },
  {
    id: "a3",
    jobId: "6",
    company: "Cohere",
    role: "Senior AI Engineer - NLP",
    status: "applied",
    appliedAt: "Mar 8, 2026",
    lastUpdate: "Mar 8, 2026",
  },
  {
    id: "a4",
    jobId: "3",
    company: "Stripe",
    role: "AI Platform Engineer",
    status: "interview",
    appliedAt: "Feb 20, 2026",
    lastUpdate: "Mar 7, 2026",
    nextStep: "System design interview",
    interviewDate: "Mar 13, 2026",
  },
  {
    id: "a5",
    jobId: "8",
    company: "DeepMind",
    role: "AI Research Engineer",
    status: "rejected",
    appliedAt: "Feb 15, 2026",
    lastUpdate: "Mar 1, 2026",
  },
  {
    id: "a6",
    jobId: "2",
    company: "OpenAI",
    role: "Senior ML Engineer",
    status: "offer",
    appliedAt: "Feb 10, 2026",
    lastUpdate: "Mar 11, 2026",
    nextStep: "Review offer details",
  },
];

export const chatMessages: ChatMessage[] = [
  {
    id: "m1",
    role: "assistant",
    content: "Hey Alex! I've been keeping an eye on the market for you. I found 8 new roles that match your profile since we last spoke. Your top match is a Staff AI Engineer position at Anthropic with a 94% match score. Want me to walk you through the highlights?",
    timestamp: "10:30 AM",
  },
  {
    id: "m2",
    role: "user",
    content: "Yes! Tell me more about the Anthropic role and the OpenAI one too.",
    timestamp: "10:32 AM",
  },
  {
    id: "m3",
    role: "assistant",
    content: "Great picks! Here's the breakdown:\n\n**Anthropic - Staff AI Engineer (94% match)**\nThis role is focused on building and optimizing LLMs and evaluation frameworks. Your PyTorch, fine-tuning, and Transformer expertise are exactly what they need. The only gap is Rust, which they list as nice-to-have. Salary range: $220k-$310k.\n\n**OpenAI - Senior ML Engineer (91% match)**\nFoundation model work — training infrastructure and pushing model capabilities. Your distributed training and PyTorch experience are very relevant. They'd want to see Triton/CUDA knowledge, but your strong fundamentals offset that. Salary: $245k-$350k.\n\nBoth are well within your target range. Want me to draft cover letters or prep you for their interview styles?",
    timestamp: "10:33 AM",
  },
  {
    id: "m4",
    role: "user",
    content: "That's really helpful. Can you also tell me what skills I should focus on to improve my match scores overall?",
    timestamp: "10:35 AM",
  },
  {
    id: "m5",
    role: "assistant",
    content: "Based on analyzing all your matched roles, here are the top skills that would boost your scores:\n\n1. **Rust** — mentioned in 35% of your top matches, especially for systems-level AI work\n2. **CUDA/Triton** — 40% of high-paying roles want GPU optimization experience\n3. **JAX** — growing in research roles at Google/DeepMind\n\nThe quickest win would be picking up some CUDA basics — even a weekend project would help. Want me to suggest some learning resources or find roles where your current skills are already a perfect fit?",
    timestamp: "10:36 AM",
  },
];

export const suggestedPrompts = [
  "What new jobs match my profile?",
  "Help me prep for my Anthropic interview",
  "Update my salary preferences",
  "Why did I match with Stripe?",
  "What skills should I learn next?",
  "Draft a cover letter for Notion",
];

export const weeklyActivity = [
  { day: "Mon", applications: 3, views: 12, responses: 1 },
  { day: "Tue", applications: 5, views: 18, responses: 2 },
  { day: "Wed", applications: 2, views: 15, responses: 1 },
  { day: "Thu", applications: 4, views: 22, responses: 3 },
  { day: "Fri", applications: 6, views: 25, responses: 2 },
  { day: "Sat", applications: 1, views: 8, responses: 0 },
  { day: "Sun", applications: 0, views: 5, responses: 0 },
];

export const upcomingEvents = [
  {
    id: "e1",
    type: "interview" as const,
    title: "Technical Interview - Stripe",
    date: "Mar 13",
    time: "2:00 PM PST",
  },
  {
    id: "e2",
    type: "interview" as const,
    title: "Phone Screen - Notion",
    date: "Mar 14",
    time: "11:00 AM PST",
  },
  {
    id: "e3",
    type: "interview" as const,
    title: "Technical Round 2 - Anthropic",
    date: "Mar 15",
    time: "10:00 AM PST",
  },
  {
    id: "e4",
    type: "deadline" as const,
    title: "Review OpenAI offer",
    date: "Mar 18",
    time: "End of day",
  },
];

export const skillDemand = [
  { skill: "LLMs", demand: 92, trend: "up" as const },
  { skill: "RAG", demand: 88, trend: "up" as const },
  { skill: "PyTorch", demand: 85, trend: "stable" as const },
  { skill: "CUDA", demand: 78, trend: "up" as const },
  { skill: "MLOps", demand: 75, trend: "stable" as const },
  { skill: "LangChain", demand: 70, trend: "up" as const },
];

// Skills radar: your level vs market demand
export const skillsRadar = [
  { skill: "LLMs", you: 90, market: 92 },
  { skill: "PyTorch", you: 88, market: 85 },
  { skill: "RAG", you: 82, market: 88 },
  { skill: "MLOps", you: 78, market: 75 },
  { skill: "CUDA", you: 35, market: 78 },
  { skill: "NLP", you: 85, market: 72 },
  { skill: "Fine-tuning", you: 80, market: 70 },
  { skill: "System Design", you: 75, market: 80 },
];

// Active offers for comparison
export interface Offer {
  id: string;
  company: string;
  companyLogo: string;
  role: string;
  baseSalary: number;
  equity: number;
  equitySchedule: string;
  signingBonus: number;
  annualBonus: string;
  totalComp: number;
  benefits: string[];
  deadline: string;
  location: string;
  remote: string;
  pto: string;
}

export const activeOffers: Offer[] = [
  {
    id: "o1",
    company: "OpenAI",
    companyLogo: "O",
    role: "Senior ML Engineer",
    baseSalary: 285000,
    equity: 400000,
    equitySchedule: "4yr vest, 1yr cliff",
    signingBonus: 50000,
    annualBonus: "15-25%",
    totalComp: 435000,
    benefits: ["Health/dental/vision", "401k match 4%", "$5k learning", "Gym", "Meals"],
    deadline: "Mar 18, 2026",
    location: "San Francisco, CA",
    remote: "On-site (3 days/week)",
    pto: "Unlimited PTO",
  },
];

// Daily goals
export const dailyGoals = [
  { id: "g1", label: "Apply to 2 jobs", completed: true },
  { id: "g2", label: "Review matched roles", completed: true },
  { id: "g3", label: "Prep for Stripe interview", completed: false },
  { id: "g4", label: "Update LinkedIn headline", completed: false },
  { id: "g5", label: "Research Anthropic culture", completed: true },
];

export const streakData = {
  currentStreak: 5,
  longestStreak: 12,
  thisWeek: [true, true, true, true, true, false, false], // Mon-Sun
};
