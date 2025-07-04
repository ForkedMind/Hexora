'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, ExternalLink, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { mockProjects, mockTeamMembers } from '@/data/mock-data';

const featuredProject = {
  name: 'iLibrary',
  description: 'The first Arabic digital platform for educational resources built on Web3 principles',
  longDescription: 'iLibrary represents our flagship project—a comprehensive digital library and learning platform designed specifically for Arabic-speaking communities. Built with modern Web3 technologies, it features decentralized content management, contributor rewards, and community governance.',
  image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
  stats: {
    users: '5,000+',
    content: '1,200+',
    contributors: '45',
    countries: '12',
  },
  technologies: ['React', 'Next.js', 'Solidity', 'IPFS', 'Web3.js'],
  links: {
    website: '#',
    github: '#',
    demo: '#',
  },
  status: 'Live',
  progress: 85,
};

const upcomingProjects = [
  {
    name: 'FreelanceDAO',
    description: 'Decentralized freelancing platform with tokenized payments',
    status: 'Development',
    progress: 35,
    timeline: 'Q2 2025',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
  },
  {
    name: 'CodeCollab',
    description: 'Real-time collaborative coding environment with AI assistance',
    status: 'Planning',
    progress: 15,
    timeline: 'Q3 2025',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
  },
  {
    name: 'SkillChain',
    description: 'Blockchain-based skill verification and certification platform',
    status: 'Research',
    progress: 5,
    timeline: 'Q4 2025',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Discover the innovative projects built by our global community of developers, 
              designers, and creators. Each project represents real-world impact and 
              collaborative excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project - iLibrary */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              Featured <span className="gradient-text">MVP</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredProject.status}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-white mb-4">{featuredProject.name}</h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {featuredProject.longDescription}
                </p>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60">Project Progress</span>
                    <span className="text-primary font-semibold">{featuredProject.progress}%</span>
                  </div>
                  <Progress value={featuredProject.progress} className="h-2" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{featuredProject.stats.users}</div>
                    <div className="text-white/60 text-sm">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{featuredProject.stats.content}</div>
                    <div className="text-white/60 text-sm">Resources</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{featuredProject.stats.contributors}</div>
                    <div className="text-white/60 text-sm">Contributors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{featuredProject.stats.countries}</div>
                    <div className="text-white/60 text-sm">Countries</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-navy font-semibold">
                    <Globe className="mr-2 h-4 w-4" />
                    Visit Platform
                  </Button>
                  <Button variant="outline" className="glass-hover">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button variant="outline" className="glass-hover">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Upcoming <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The future is being built today. Here are the next game-changing projects 
              our community is working on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden card-hover"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Development' ? 'bg-primary/20 text-primary' :
                      project.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-white/20 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/60 text-sm">Progress</span>
                      <span className="text-primary text-sm font-semibold">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-1.5" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{project.timeline}</span>
                    </div>
                    <Button variant="outline" size="sm" className="glass-hover">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center"
          >
            <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Want to <span className="gradient-text">Contribute</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Join our community of builders and contribute to projects that matter. 
              Earn XP, build your reputation, and make a real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-navy font-semibold px-8">
                Start Contributing
              </Button>
              <Button variant="outline" size="lg" className="glass-hover px-8">
                Browse Open Tasks
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}