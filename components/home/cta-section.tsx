'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Disc } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Ready to <span className="gradient-text">Transform</span> Your Code?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Join thousands of developers who are already earning XP, building impactful projects, 
              and shaping the future of Web3 collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-navy font-semibold px-12 py-6 text-lg rounded-xl group"
              >
                Start Contributing Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-hover px-8 py-6 rounded-xl group"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-hover px-8 py-6 rounded-xl group"
                >
                  <Disc className="mr-2 h-5 w-5" />
                  Join Discord
                </Button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2.5K+</div>
                <div className="text-white/60">Active Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-white/60">Projects Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$2.5M+</div>
                <div className="text-white/60">Value Created</div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span>Start earning immediately</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span>Join our growing community</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}