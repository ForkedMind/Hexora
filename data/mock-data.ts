export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  xp: number;
  level: number;
  tasksCompleted: number;
  activeTasks: number;
  status: 'active' | 'idle' | 'busy';
  skills: string[];
  joinedDate: string;
  completionRate: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignedTo: string[];
  createdBy: string;
  createdAt: string;
  dueDate: string;
  xpReward: number;
  tags: string[];
  project: string;
  complexity: 'beginner' | 'intermediate' | 'advanced';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  progress: number;
  teamMembers: string[];
  totalTasks: number;
  completedTasks: number;
  xpPool: number;
  startDate: string;
  endDate?: string;
  tags: string[];
}

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Full-Stack Developer',
    avatar: 'SC',
    xp: 12480,
    level: 5,
    tasksCompleted: 42,
    activeTasks: 3,
    status: 'active',
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
    joinedDate: '2024-01-15',
    completionRate: 95,
  },
  {
    id: '2',
    name: 'Ahmed Hassan',
    role: 'Blockchain Developer',
    avatar: 'AH',
    xp: 15720,
    level: 6,
    tasksCompleted: 38,
    activeTasks: 2,
    status: 'active',
    skills: ['Solidity', 'Web3.js', 'Rust', 'Smart Contracts'],
    joinedDate: '2024-02-03',
    completionRate: 98,
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    role: 'UI/UX Designer',
    avatar: 'MR',
    xp: 9340,
    level: 4,
    tasksCompleted: 29,
    activeTasks: 4,
    status: 'busy',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    joinedDate: '2024-01-28',
    completionRate: 92,
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'DevOps Engineer',
    avatar: 'DK',
    xp: 11250,
    level: 5,
    tasksCompleted: 35,
    activeTasks: 1,
    status: 'idle',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    joinedDate: '2024-02-10',
    completionRate: 97,
  },
  {
    id: '5',
    name: 'Elena Volkov',
    role: 'Smart Contract Auditor',
    avatar: 'EV',
    xp: 18900,
    level: 7,
    tasksCompleted: 51,
    activeTasks: 2,
    status: 'active',
    skills: ['Security Auditing', 'Solidity', 'Formal Verification', 'DeFi'],
    joinedDate: '2023-12-05',
    completionRate: 99,
  },
  {
    id: '6',
    name: 'Jake Thompson',
    role: 'Frontend Developer',
    avatar: 'JT',
    xp: 8750,
    level: 4,
    tasksCompleted: 26,
    activeTasks: 3,
    status: 'active',
    skills: ['Vue.js', 'Tailwind CSS', 'Animation', 'Mobile-First'],
    joinedDate: '2024-02-15',
    completionRate: 89,
  },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Implement Web3 Authentication',
    description: 'Add MetaMask and WalletConnect integration for user authentication',
    status: 'in-progress',
    priority: 'high',
    assignedTo: ['2'],
    createdBy: '1',
    createdAt: '2024-12-10',
    dueDate: '2024-12-20',
    xpReward: 500,
    tags: ['authentication', 'web3', 'wallet'],
    project: 'iLibrary',
    complexity: 'intermediate',
  },
  {
    id: '2',
    title: 'Design User Dashboard',
    description: 'Create wireframes and high-fidelity mockups for the user dashboard',
    status: 'review',
    priority: 'medium',
    assignedTo: ['3'],
    createdBy: '1',
    createdAt: '2024-12-08',
    dueDate: '2024-12-18',
    xpReward: 350,
    tags: ['design', 'ui/ux', 'dashboard'],
    project: 'iLibrary',
    complexity: 'intermediate',
  },
  {
    id: '3',
    title: 'Setup CI/CD Pipeline',
    description: 'Configure GitHub Actions for automated testing and deployment',
    status: 'todo',
    priority: 'high',
    assignedTo: ['4'],
    createdBy: '2',
    createdAt: '2024-12-12',
    dueDate: '2024-12-22',
    xpReward: 400,
    tags: ['devops', 'ci/cd', 'automation'],
    project: 'iLibrary',
    complexity: 'advanced',
  },
  {
    id: '4',
    title: 'Smart Contract Security Audit',
    description: 'Comprehensive security audit of the token contract',
    status: 'in-progress',
    priority: 'high',
    assignedTo: ['5'],
    createdBy: '1',
    createdAt: '2024-12-09',
    dueDate: '2024-12-19',
    xpReward: 800,
    tags: ['security', 'audit', 'smart-contracts'],
    project: 'TokenRewards',
    complexity: 'advanced',
  },
  {
    id: '5',
    title: 'Mobile-Responsive Components',
    description: 'Ensure all UI components work perfectly on mobile devices',
    status: 'todo',
    priority: 'medium',
    assignedTo: ['6'],
    createdBy: '3',
    createdAt: '2024-12-11',
    dueDate: '2024-12-21',
    xpReward: 300,
    tags: ['frontend', 'responsive', 'mobile'],
    project: 'iLibrary',
    complexity: 'beginner',
  },
  {
    id: '6',
    title: 'API Documentation',
    description: 'Create comprehensive API documentation with examples',
    status: 'done',
    priority: 'low',
    assignedTo: ['1'],
    createdBy: '2',
    createdAt: '2024-12-05',
    dueDate: '2024-12-15',
    xpReward: 250,
    tags: ['documentation', 'api', 'backend'],
    project: 'iLibrary',
    complexity: 'beginner',
  },
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'iLibrary',
    description: 'Arabic digital platform for educational resources and collaborative learning',
    status: 'active',
    progress: 68,
    teamMembers: ['1', '2', '3', '4', '6'],
    totalTasks: 25,
    completedTasks: 17,
    xpPool: 12500,
    startDate: '2024-11-01',
    endDate: '2025-01-31',
    tags: ['education', 'arabic', 'web3', 'react'],
  },
  {
    id: '2',
    name: 'TokenRewards',
    description: 'Decentralized reward system for contributor incentivization',
    status: 'active',
    progress: 45,
    teamMembers: ['2', '5'],
    totalTasks: 18,
    completedTasks: 8,
    xpPool: 8900,
    startDate: '2024-12-01',
    endDate: '2025-02-28',
    tags: ['blockchain', 'defi', 'tokens', 'smart-contracts'],
  },
];