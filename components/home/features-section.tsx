'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Users, 
  Brain, 
  Vote, 
  Shield, 
  Coins,
  Target,
  GitBranch
} from 'lucide-react';
import { HexagonBackground } from '@/components/shared/hexagon-background';
import { useLanguage } from '@/components/providers/language-provider';

const features = [
  {
    icon: Zap,
    title: 'xpSystem',
    description: 'xpSystemDesc',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
  },
  {
    icon: Target,
    title: 'smartTaskMatching',
    description: 'smartTaskMatchingDesc',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Brain,
    title: 'aiCodeReview',
    description: 'aiCodeReviewDesc',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
  {
    icon: Vote,
    title: 'daoGovernance',
    description: 'daoGovernanceDesc',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    icon: Users,
    title: 'peerCollaboration',
    description: 'peerCollaborationDesc',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
  },
  {
    icon: Coins,
    title: 'tokenRewards',
    description: 'tokenRewardsDesc',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
  },
  {
    icon: Shield,
    title: 'secureTransparent',
    description: 'secureTransparentDesc',
    color: 'text-red-400',
    bgColor: 'bg-red-400/10',
  },
  {
    icon: GitBranch,
    title: 'versionControl',
    description: 'versionControlDesc',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10',
  },
];

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 relative">
      {/* Hexagon Background */}
      <HexagonBackground className="opacity-20" density={8} speed={0.2} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t('powerfulFeatures')} <span className="gradient-text">{t('features')}</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('featuresSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 card-hover group"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{t(feature.title)}</h3>
              <p className="text-white/70 leading-relaxed">{t(feature.description)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}