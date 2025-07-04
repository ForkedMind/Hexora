'use client';

import { motion } from 'framer-motion';
import { Target, Users, Rocket, Globe, Award, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We believe in the power of collective intelligence to solve real-world problems through code.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Every decision is made with our contributors in mind, fostering an inclusive and supportive environment.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in decentralized collaboration.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Our platform connects talent worldwide to create solutions that benefit everyone.',
  },
];

const roadmapItems = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'completed',
    items: ['Core platform development', 'XP system implementation', 'Basic DAO structure'],
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    status: 'active',
    items: ['AI-powered task matching', 'Advanced peer review', 'Token reward system'],
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    status: 'upcoming',
    items: ['Enterprise partnerships', 'Cross-chain integration', 'Mobile application'],
  },
  {
    phase: 'Phase 4',
    title: 'Evolution',
    status: 'future',
    items: ['Full DAO governance', 'Global expansion program', 'Ecosystem partnerships'],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Building the <span className="gradient-text">Future</span> Together
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Hexora is more than a platform—it&apos;s a movement. We&apos;re creating a world where
              every line of code contributes to meaningful change, where developers are fairly 
              rewarded, and where innovation knows no boundaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                We envision a future where software development is truly decentralized, 
                where contributions are transparently valued, and where the best ideas 
                rise to the top regardless of geography or background.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Through blockchain technology and community governance, we&apos;re creating
                an ecosystem that rewards merit, fosters collaboration, and drives 
                innovation at a scale never before possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2.5K+</div>
                  <div className="text-white/60">Contributors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-white/60">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-white/60">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$2.5M+</div>
                  <div className="text-white/60">Value Created</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 card-hover"
              >
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DAO Roadmap */}
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
              DAO <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our journey towards full decentralization is carefully planned and community-driven.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-8 ${
                  item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  item.status === 'active' ? 'bg-primary/20 text-primary' :
                  'bg-white/10 text-white/60'
                }`}>
                  <span className="font-bold">{index + 1}</span>
                </div>
                
                <div className="glass rounded-xl p-6 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-primary text-sm">{item.phase}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'active' ? 'bg-primary/20 text-primary' :
                      item.status === 'upcoming' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-white/10 text-white/60'
                    }`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((subItem) => (
                      <li key={subItem} className="text-white/70 flex items-center">
                        <div className="w-2 h-2 bg-primary/60 rounded-full mr-3 flex-shrink-0" />
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-world Impact */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center"
          >
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Real-World <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Our first MVP, iLibrary, is already making waves in the Arabic-speaking world, 
              providing educational resources to thousands of learners and creating new 
              opportunities for educators and content creators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60">
              <div className="flex items-center">
                <Rocket className="h-5 w-5 text-primary mr-2" />
                <span>First Arabic Web3 educational platform</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span>5,000+ active learners in 3 months</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-primary mr-2" />
                <span>Expanding to 15+ countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}