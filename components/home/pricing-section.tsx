'use client';

import { motion } from 'framer-motion';
import { Check, Star, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Developer',
    description: 'Perfect for individual contributors',
    price: 'Free',
    period: '',
    icon: Users,
    popular: false,
    features: [
      'Access to public projects',
      'Basic XP tracking',
      'Peer review participation',
      'Community Discord access',
      'Basic task matching',
      'Monthly XP reports',
    ],
    limitations: [
      'Limited to 3 active tasks',
      'Basic AI feedback',
    ],
  },
  {
    name: 'Pro Contributor',
    description: 'For serious builders and earners',
    price: '$29',
    period: '/month',
    icon: Star,
    popular: true,
    features: [
      'Everything in Developer',
      'Unlimited active tasks',
      'Advanced AI code review',
      'Priority task matching',
      'Token rewards eligible',
      'Private project access',
      'Advanced analytics',
      'Direct mentor access',
    ],
    limitations: [],
  },
  {
    name: 'Organization',
    description: 'For teams and companies',
    price: '$99',
    period: '/month',
    icon: Building,
    popular: false,
    features: [
      'Everything in Pro',
      'Create private projects',
      'Team management tools',
      'Custom XP multipliers',
      'Branded project spaces',
      'Advanced reporting',
      'Priority support',
      'DAO voting rights',
    ],
    limitations: [],
  },
];

export function PricingSection() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Start free and scale as you grow. Every plan includes access to our 
            tokenized reward system and collaborative community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl p-8 card-hover relative ${
                plan.popular ? 'ring-2 ring-primary/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-navy px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  plan.popular ? 'bg-primary/20' : 'bg-white/10'
                }`}>
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-primary' : 'text-white'}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation) => (
                  <div key={limitation} className="flex items-center">
                    <div className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-white/50 text-sm">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-navy'
                    : 'glass-hover'
                }`}
                size="lg"
              >
                {plan.name === 'Developer' ? 'Start Free' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-8">
            All plans include access to our growing library of projects, 
            peer review system, and community support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span>24/7 community support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}