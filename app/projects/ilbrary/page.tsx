'use client';

import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Target, 
  TrendingUp,
  Github,
  Globe,
  ExternalLink,
  Award,
  BookOpen,
  Download,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

const projectStats = [
  { label: 'Active Users', value: '5,247', icon: Users, color: 'text-blue-400' },
  { label: 'Resources', value: '1,284', icon: BookOpen, color: 'text-green-400' },
  { label: 'Contributors', value: '47', icon: Award, color: 'text-primary' },
  { label: 'Countries', value: '15', icon: Globe, color: 'text-purple-400' },
];

const milestones = [
  { title: 'Platform Launch', date: '2024-11-01', status: 'completed', description: 'Initial platform release with core features' },
  { title: 'User Authentication', date: '2024-11-15', status: 'completed', description: 'Web3 wallet integration and user profiles' },
  { title: 'Content Management', date: '2024-12-01', status: 'completed', description: 'Advanced content creation and management tools' },
  { title: 'Mobile App', date: '2025-01-15', status: 'in-progress', description: 'Native mobile application for iOS and Android' },
  { title: 'AI Recommendations', date: '2025-02-01', status: 'upcoming', description: 'Personalized content recommendations using AI' },
];

const teamMembers = [
  { name: 'Sarah Chen', role: 'Lead Developer', avatar: 'SC', contribution: 'Frontend & Architecture' },
  { name: 'Ahmed Hassan', role: 'Blockchain Developer', avatar: 'AH', contribution: 'Smart Contracts & Web3' },
  { name: 'Maria Rodriguez', role: 'UI/UX Designer', avatar: 'MR', contribution: 'Design System & UX' },
  { name: 'David Kim', role: 'DevOps Engineer', avatar: 'DK', contribution: 'Infrastructure & Deployment' },
];

export default function iLibraryProjectPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects">
            <Button variant="outline" size="sm" className="glass-hover mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </section>

      {/* Project Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">iLibrary</h1>
                  <p className="text-primary">Arabic Digital Learning Platform</p>
                </div>
              </div>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                The first comprehensive Arabic digital platform for educational resources, 
                built on Web3 principles to democratize access to quality education across 
                the Arabic-speaking world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-navy font-semibold">
                  <Globe className="mr-2 h-5 w-5" />
                  Visit Platform
                </Button>
                <Button variant="outline" size="lg" className="glass-hover">
                  <Github className="mr-2 h-5 w-5" />
                  View Source
                </Button>
                <Button variant="outline" size="lg" className="glass-hover">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-white/60">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Started Nov 2024</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-4 w-4 mr-2" />
                  <span>85% Complete</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="glass rounded-2xl p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
                  alt="iLibrary Platform"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  {projectStats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Progress */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Project <span className="gradient-text">Progress</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Track our journey from concept to launch and beyond.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-8 ${
                  milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  milestone.status === 'in-progress' ? 'bg-primary/20 text-primary' :
                  'bg-white/10 text-white/60'
                }`}>
                  <span className="font-bold">{index + 1}</span>
                </div>
                
                <div className="glass rounded-xl p-6 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                      <p className="text-white/60 text-sm">{new Date(milestone.date).toLocaleDateString()}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      milestone.status === 'in-progress' ? 'bg-primary/20 text-primary' :
                      'bg-white/10 text-white/60'
                    }`}>
                      {milestone.status.replace('-', ' ').charAt(0).toUpperCase() + milestone.status.slice(1)}
                    </div>
                  </div>
                  <p className="text-white/70">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Project <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Meet the talented individuals bringing iLibrary to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-semibold text-lg">{member.avatar}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-white/60 text-sm">{member.contribution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Technical <span className="gradient-text">Stack</span>
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Built with modern technologies and best practices to ensure scalability, 
                  security, and exceptional user experience.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express', 'MongoDB', 'Redis'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Blockchain</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Solidity', 'Web3.js', 'IPFS', 'MetaMask'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Project Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70">Development Progress</span>
                        <span className="text-primary">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70">Testing Coverage</span>
                        <span className="text-green-400">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70">Documentation</span>
                        <span className="text-yellow-400">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button className="bg-primary hover:bg-primary/90 text-navy font-semibold">
                    <Download className="mr-2 h-4 w-4" />
                    Download Documentation
                  </Button>
                  <Button variant="outline" className="glass-hover">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    API Reference
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}