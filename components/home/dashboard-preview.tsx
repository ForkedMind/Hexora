'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Award, Calendar, Activity } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const dashboardData = [
  { label: 'Total XP', value: '12,480', change: '+15%', icon: Award },
  { label: 'Active Tasks', value: '8', change: '+2', icon: Target },
  { label: 'Team Members', value: '24', change: '+3', icon: Users },
  { label: 'Completed Projects', value: '6', change: '+1', icon: TrendingUp },
];

const recentActivity = [
  { type: 'task_completed', message: 'Completed "API Integration" task', time: '2 hours ago', xp: '+250 XP' },
  { type: 'peer_review', message: 'Received peer review from Alex', time: '5 hours ago', xp: '+100 XP' },
  { type: 'milestone', message: 'Reached Silver contributor level', time: '1 day ago', xp: '+500 XP' },
];

export function DashboardPreview() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your <span className="gradient-text">Impact Dashboard</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Track your contributions, XP earnings, and community impact in real-time. 
            Every line of code matters in the Hexora ecosystem.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 backdrop-blur-xl border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white">Welcome back, Developer!</h3>
                <p className="text-white/60">Here's your contribution overview</p>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Level 3 Contributor</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardData.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                    <span className="text-primary text-sm font-semibold">{item.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-white/60 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Progress Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* XP Progress */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  XP Progress to Next Level
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Current: 12,480 XP</span>
                    <span className="text-white/60">Next Level: 15,000 XP</span>
                  </div>
                  <Progress value={83} className="h-3" />
                  <p className="text-white/60 text-sm">2,520 XP remaining</p>
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  Recent Activity
                </h4>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.message}</p>
                        <p className="text-white/60 text-xs">{activity.time}</p>
                      </div>
                      <span className="text-primary text-sm font-semibold">{activity.xp}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}