'use client';

import { motion } from 'framer-motion';
import { 
  Coins, 
  TrendingUp, 
  Users, 
  Award, 
  PieChart, 
  Download,
  ExternalLink,
  Target,
  Zap,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const tokenDistribution = [
  { label: 'Community Rewards', percentage: 40, color: 'bg-primary', amount: '400M HEX' },
  { label: 'Development Fund', percentage: 25, color: 'bg-blue-400', amount: '250M HEX' },
  { label: 'Team & Advisors', percentage: 15, color: 'bg-purple-400', amount: '150M HEX' },
  { label: 'Ecosystem Growth', percentage: 10, color: 'bg-green-400', amount: '100M HEX' },
  { label: 'Liquidity Pool', percentage: 10, color: 'bg-yellow-400', amount: '100M HEX' },
];

const tokenMetrics = [
  { label: 'Total Supply', value: '1,000,000,000', suffix: 'HEX', icon: Coins },
  { label: 'Circulating Supply', value: '250,000,000', suffix: 'HEX', icon: TrendingUp },
  { label: 'Market Cap', value: '$12.5M', suffix: '', icon: Target },
  { label: 'Holders', value: '15,420', suffix: '', icon: Users },
];

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Token Launch',
    status: 'completed',
    items: ['Initial token distribution', 'DEX listing', 'Community rewards activation'],
  },
  {
    phase: 'Phase 2',
    title: 'Ecosystem Expansion',
    status: 'active',
    items: ['Staking mechanism', 'Governance voting', 'Cross-chain bridge'],
  },
  {
    phase: 'Phase 3',
    title: 'DeFi Integration',
    status: 'upcoming',
    items: ['Yield farming', 'Lending protocol', 'NFT marketplace'],
  },
];

export default function TokenomicsPage() {
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
              <span className="gradient-text">Tokenomics</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Discover the economic model behind Hexora&apos;s ecosystem. Our tokenomics are designed
              to reward contributors, fund development, and ensure sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Token Metrics */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {tokenMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center card-hover"
              >
                <metric.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">
                  {metric.value} <span className="text-primary text-lg">{metric.suffix}</span>
                </div>
                <div className="text-white/60 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Token Distribution */}
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
              Token <span className="gradient-text">Distribution</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Fair and transparent distribution designed to incentivize long-term growth and community participation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Distribution Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {tokenDistribution.map((item, index) => {
                    const offset = tokenDistribution.slice(0, index).reduce((sum, prev) => sum + prev.percentage, 0);
                    const circumference = 2 * Math.PI * 40;
                    const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((offset / 100) * circumference);
                    
                    return (
                      <circle
                        key={item.label}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={`rgb(${item.color === 'bg-primary' ? '0, 255, 198' : 
                          item.color === 'bg-blue-400' ? '96, 165, 250' :
                          item.color === 'bg-purple-400' ? '196, 181, 253' :
                          item.color === 'bg-green-400' ? '74, 222, 128' :
                          '250, 204, 21'})`}
                        strokeWidth="8"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-1000"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1B</div>
                    <div className="text-white/60 text-sm">Total Supply</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Distribution Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {tokenDistribution.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white">{item.label}</h3>
                    <div className="text-right">
                      <div className="text-primary font-bold">{item.percentage}%</div>
                      <div className="text-white/60 text-sm">{item.amount}</div>
                    </div>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Utility & Benefits */}
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
              Token <span className="gradient-text">Utility</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              HEX tokens power the entire Hexora ecosystem with multiple use cases and benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Contribution Rewards',
                description: 'Earn HEX tokens for completing tasks, peer reviews, and project contributions.',
                color: 'text-primary',
              },
              {
                icon: Shield,
                title: 'Governance Rights',
                description: 'Vote on platform decisions, project funding, and ecosystem improvements.',
                color: 'text-blue-400',
              },
              {
                icon: Zap,
                title: 'Premium Features',
                description: 'Access advanced tools, priority support, and exclusive project opportunities.',
                color: 'text-purple-400',
              },
              {
                icon: TrendingUp,
                title: 'Staking Rewards',
                description: 'Stake HEX tokens to earn passive income and support network security.',
                color: 'text-green-400',
              },
              {
                icon: PieChart,
                title: 'Fee Discounts',
                description: 'Reduced transaction fees and platform charges for HEX holders.',
                color: 'text-yellow-400',
              },
              {
                icon: Target,
                title: 'Exclusive Access',
                description: 'Early access to new features, beta programs, and partnership opportunities.',
                color: 'text-red-400',
              },
            ].map((utility, index) => (
              <motion.div
                key={utility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 card-hover"
              >
                <utility.icon className={`h-12 w-12 ${utility.color} mb-4`} />
                <h3 className="text-xl font-semibold text-white mb-3">{utility.title}</h3>
                <p className="text-white/70 leading-relaxed">{utility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
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
              Token <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our strategic roadmap for token development and ecosystem expansion.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-8 ${
                  phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  phase.status === 'active' ? 'bg-primary/20 text-primary' :
                  'bg-white/10 text-white/60'
                }`}>
                  <span className="font-bold">{index + 1}</span>
                </div>
                
                <div className="glass rounded-xl p-6 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                      <p className="text-primary text-sm">{phase.phase}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      phase.status === 'active' ? 'bg-primary/20 text-primary' :
                      'bg-white/10 text-white/60'
                    }`}>
                      {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="text-white/70 flex items-center">
                        <div className="w-2 h-2 bg-primary/60 rounded-full mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepaper CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center"
          >
            <PieChart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Learn More About Our <span className="gradient-text">Economics</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Dive deeper into our tokenomics model, technical specifications, and long-term vision 
              in our comprehensive whitepaper.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-navy font-semibold px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Whitepaper
              </Button>
              <Button variant="outline" size="lg" className="glass-hover px-8">
                <ExternalLink className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}