'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'iLibrary', logo: 'iL', description: 'Arabic Digital Platform' },
  { name: 'StartupX', logo: 'SX', description: 'Innovation Hub' },
  { name: 'FreelanceDAO', logo: 'FD', description: 'Decentralized Freelancing' },
  { name: 'CodeCorp', logo: 'CC', description: 'Development Studio' },
  { name: 'WebChain', logo: 'WC', description: 'Blockchain Solutions' },
  { name: 'DevHub', logo: 'DH', description: 'Developer Community' },
];

export function LogosSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Trusted by <span className="gradient-text">Innovation Leaders</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join leading organizations already building the future with Hexora&apos;s collaborative platform.
          </p>
        </motion.div>

        {/* Animated Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center card-hover group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold text-primary">{partner.logo}</span>
              </div>
              <h3 className="font-semibold text-white mb-1">{partner.name}</h3>
              <p className="text-white/60 text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-2xl p-8 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$2.5M+</div>
              <div className="text-white/80">Value Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}