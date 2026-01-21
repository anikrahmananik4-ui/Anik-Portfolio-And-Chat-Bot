
import { Project, Skill, Experience } from './types';

export const USER_DATA = {
  name: 'Sahadatur Rahman Anik',
  email: 'anikrahmananik4@gmail.com',
  phone: '+8801859334774',
  nationality: 'Bangladesh',
  bio: 'Creative portfolio owner and technology visionary specialized in 2035-grade AI platforms and futuristic user experiences.',
  socials: {
    linkedin: '#',
    github: '#',
    twitter: '#'
  }
};

export const SKILLS: Skill[] = [
  { name: 'React/Next.js', level: 95, category: 'Frontend' },
  { name: 'Three.js/WebGL', level: 85, category: 'Frontend' },
  { name: 'AI Engineering', level: 90, category: 'AI' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'UI/UX Design', level: 92, category: 'Design' },
  { name: 'Gemini API', level: 94, category: 'AI' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neural Nexus',
    category: 'AI Interface',
    description: 'A mind-controlled interface for decentralized computing nodes.',
    image: 'https://picsum.photos/800/600?random=1',
    tags: ['React', 'Three.js', 'BCI']
  },
  {
    id: '2',
    title: 'Cyber City 3D',
    category: 'Metaverse',
    description: 'A fully immersive digital twin of Dhaka in the year 2050.',
    image: 'https://picsum.photos/800/600?random=2',
    tags: ['WebGL', 'Rust', 'WASM']
  },
  {
    id: '3',
    title: 'Holograph Pro',
    category: 'Visualization',
    description: 'Real-time volumetric data visualization for supply chain management.',
    image: 'https://picsum.photos/800/600?random=3',
    tags: ['D3.js', 'Next.js', 'AI']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Future Tech Labs',
    role: 'Lead AI Engineer',
    period: '2030 - Present',
    description: 'Pioneering human-AI neural links and adaptive UI systems.'
  },
  {
    company: 'Anik Visionary Corp',
    role: 'Full Stack Architect',
    period: '2026 - 2030',
    description: 'Built foundational infrastructure for high-speed Bangladesh connectivity.'
  }
];
