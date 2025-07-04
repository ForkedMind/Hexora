'use client';

import { motion } from 'framer-motion';
import { 
  User, 
  Target, 
  Code, 
  Users, 
  Brain, 
  Coins, 
  Award,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: User,
    title: 'Join the Community',
    description: 'Sign up and create your developer profile. Connect your GitHub and showcase your skills.',
    details: ['Create your profile', 'Connect GitHub account', 'Set skill preferences', 'Join community Discord'],
  },
  {
    number: '02',
    icon: Target,
    title: 'Get Matched with Tasks',
    description: 'Our AI system matches you with tasks that align with your skills and interests.',
    details: ['AI analyzes your skills', 'Personalized task recommendations', 'Choose difficulty level', 'Select project types'],
  },
  {
    number: '03',
    icon: Code,
    title: 'Contribute & Build',
    description: 'Work on meaningful projects with other talented developers around the world.',
    details: ['Access project resources', 'Collaborate with team', 'Use modern tools & tech', 'Get mentor support'],
  },
  {
    number: '04',
    icon: Users,
    title: 'Peer Review Process',
    description: 'Your work is reviewed by experienced community members for quality and impact.',
    details: ['Code review by peers', 'Feedback and suggestions', 'Quality assurance', 'Knowledge sharing'],
  },
  {
    number: '05',
    icon: Brain,
    title: 'AI Evaluation',
    description: 'Advanced AI analyzes your contribution for technical quality and innovation.',
    details: ['Code quality analysis', 'Performance evaluation', 'Best practices check', 'Innovation scoring'],
  },
  {
    number: '06',
    icon: Coins,
    title: 'Earn XP & Tokens',
    description: 'Receive XP based on Effort × Impact × Peer Evaluation formula and convert to tokens.',
    details: ['XP calculation', 'Token conversion', 'Reward distribution', 'Level progression'],
  },
];

const xpFormula = [
  {
    factor: 'Effort',
    weight: '40%',
    description: 'Time invested, complexity handled, and dedication shown',
    icon: TrendingUp,
    color: 'text-blue-400',
  },
  {
    factor: 'Impact',
    weight: '35%',
    description: 'Real-world value created and problem-solving effectiveness',
    icon: Target,
    color: 'text-primary',
  },
  {
    factor: 'Peer Evaluation',
    weight: '25%',
    description: 'Community feedback on code quality and collaboration',
    icon: Users,
    color: 'text-purple-400',
  },
];

export default function HowItWorksPage() {
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
              How <span className="gradient-text">Hexora</span> Works
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Discover how our tokenized collaboration engine transforms your coding skills 
              into real-world impact and meaningful rewards through our proven 6-step process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center mb-20 last:mb-0"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
                  <div className="relative">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-navy rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass rounded-2xl p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-white/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (except last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block ml-8">
                    <ArrowRight className="h-8 w-8 text-primary/60" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* XP Formula Explanation */}
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
              The <span className="gradient-text">XP Formula</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Your experience points are calculated using our fair and transparent formula 
              that rewards quality, impact, and collaboration.
            </p>
            
            {/* Formula Display */}
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto mb-12">
              <div className="text-2xl sm:text-3xl font-bold text-center mb-8">
                <span className="text-white">XP = </span>
                <span className="text-blue-400">Effort</span>
                <span className="text-white"> × </span>
                <span className="text-primary">Impact</span>
                <span className="text-white"> × </span>
                <span className="text-purple-400">Peer Evaluation</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {xpFormula.map((factor, index) => (
              <motion.div
                key={factor.factor}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 text-center card-hover"
              >
                <factor.icon className={`h-12 w-12 ${factor.color} mx-auto mb-4`} />
                <h3 className="text-2xl font-bold text-white mb-2">{factor.factor}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{factor.weight}</div>
                <p className="text-white/70 leading-relaxed">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Review System */}
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
                Advanced <span className="gradient-text">AI Review</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our cutting-edge AI system provides comprehensive code analysis, 
                performance evaluation, and innovation scoring to ensure fair rewards 
                and continuous learning opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Code Quality Analysis</h4>
                    <p className="text-white/70">Evaluates code structure, maintainability, and best practices</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Performance Optimization</h4>
                    <p className="text-white/70">Identifies opportunities for performance improvements</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Innovation Scoring</h4>
                    <p className="text-white/70">Recognizes creative solutions and novel approaches</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">AI Review Dashboard</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">Code Quality</span>
                    <span className="text-primary font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">Performance</span>
                    <span className="text-green-400 font-semibold">88%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">Innovation</span>
                    <span className="text-purple-400 font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70">Documentation</span>
                    <span className="text-yellow-400 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Total XP Earned</span>
                  <span className="text-2xl font-bold text-primary">+425 XP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Token Reward System */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center"
          >
            <Coins className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start <span className="gradient-text">Earning</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Join thousands of developers who are already earning XP and tokens 
              by contributing to meaningful projects. Your code can change the world 
              and reward you fairly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-navy font-semibold px-12 py-4 rounded-xl text-lg transition-colors"
              >
                Start Contributing Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-hover px-12 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                View Open Tasks
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}