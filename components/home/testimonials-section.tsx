'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Full-Stack Developer',
    company: 'TechFlow Inc.',
    avatar: 'SC',
    rating: 5,
    content: 'Hexora transformed how I contribute to open source. The XP system makes every contribution meaningful, and the peer review process helped me grow as a developer.',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Blockchain Developer',
    company: 'CryptoInnovate',
    avatar: 'AH',
    rating: 5,
    content: 'The tokenized rewards system is genius. I\'ve earned more from contributing to Hexora projects than traditional freelancing, plus I\'m building amazing products.',
  },
  {
    name: 'Maria Rodriguez',
    role: 'UI/UX Designer',
    company: 'DesignDAO',
    avatar: 'MR',
    rating: 5,
    content: 'Finally, a platform that values design contributions equally with code. The DAO governance ensures everyone has a voice in the direction of projects.',
  },
];

export function TestimonialsSection() {
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
            What <span className="gradient-text">Contributors</span> Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from developers, designers, and creators 
            who are already building the future with Hexora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-primary/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                  <div className="text-primary text-sm">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-semibold">4.9/5</span>
              <span>Average Rating</span>
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full" />
            <div>
              <span className="font-semibold">2,500+</span>
              <span> Happy Contributors</span>
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full" />
            <div>
              <span className="font-semibold">99%</span>
              <span> Would Recommend</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}