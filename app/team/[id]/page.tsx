'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Award, 
  Calendar, 
  Clock, 
  Github, 
  Linkedin, 
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { mockTeamMembers, mockTasks } from '@/data/mock-data';
import Link from 'next/link';

export default function TeamMemberProfile() {
  const params = useParams();
  const memberId = params.id as string;
  
  const member = mockTeamMembers.find(m => m.id === memberId);
  const memberTasks = mockTasks.filter(task => task.assignedTo.includes(memberId));

  async function generateStaticParams() {
    return mockTeamMembers.map(member => ({ id: member.id }));
  }

  if (!member) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Member Not Found</h1>
          <Link href="/team">
            <Button variant="outline" className="glass-hover">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Team
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getXPProgress = (xp: number, level: number) => {
    const baseXP = level * 2000;
    const nextLevelXP = (level + 1) * 2000;
    const progress = ((xp - baseXP) / (nextLevelXP - baseXP)) * 100;
    return Math.max(0, Math.min(100, progress));
  };

  const completedTasks = memberTasks.filter(task => task.status === 'done');
  const activeTasks = memberTasks.filter(task => task.status !== 'done');

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/team">
            <Button variant="outline" size="sm" className="glass-hover mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Team
            </Button>
          </Link>
        </div>
      </section>

      {/* Profile Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">{member.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-white mb-2">{member.name}</h1>
                    <p className="text-xl text-white/80 mb-4">{member.role}</p>
                    <div className="flex items-center space-x-4 text-white/60">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Joined {new Date(member.joinedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    member.status === 'active' ? 'bg-green-400/20 text-green-400' :
                    member.status === 'idle' ? 'bg-yellow-400/20 text-yellow-400' :
                    'bg-red-400/20 text-red-400'
                  }`}>
                    {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                  </div>
                </div>

                {/* XP Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Level {member.level} Contributor</h3>
                    <span className="text-primary font-bold">{member.xp.toLocaleString()} XP</span>
                  </div>
                  <Progress value={getXPProgress(member.xp, member.level)} className="h-3 mb-2" />
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Current Level: {member.level * 2000} XP</span>
                    <span>Next Level: {(member.level + 1) * 2000} XP</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="glass-hover">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm" className="glass-hover">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="glass-hover">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="space-y-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-primary mr-2" />
                        <span className="text-white/80">Tasks Completed</span>
                      </div>
                      <span className="text-white font-semibold">{member.tasksCompleted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-400 mr-2" />
                        <span className="text-white/80">Active Tasks</span>
                      </div>
                      <span className="text-white font-semibold">{member.activeTasks}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                        <span className="text-white/80">Completion Rate</span>
                      </div>
                      <span className="text-white font-semibold">{member.completionRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        <span className="text-white/80">Average Rating</span>
                      </div>
                      <span className="text-white font-semibold">4.8/5</span>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Achievements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-white text-sm">Level 5 Contributor</p>
                        <p className="text-white/60 text-xs">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center mr-3">
                        <Zap className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm">Speed Demon</p>
                        <p className="text-white/60 text-xs">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm">Team Player</p>
                        <p className="text-white/60 text-xs">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tasks Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Active Tasks */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Active Tasks ({activeTasks.length})</h3>
              <div className="space-y-4">
                {activeTasks.slice(0, 3).map((task) => (
                  <div key={task.id} className="p-4 bg-white/5 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">{task.title}</h4>
                    <p className="text-white/70 text-sm mb-3">{task.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded text-xs ${
                        task.status === 'in-progress' ? 'bg-blue-400/20 text-blue-400' :
                        task.status === 'review' ? 'bg-yellow-400/20 text-yellow-400' :
                        'bg-white/20 text-white/60'
                      }`}>
                        {task.status.replace('-', ' ')}
                      </span>
                      <span className="text-primary text-sm font-semibold">{task.xpReward} XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Completed Tasks */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Recent Completions ({completedTasks.length})</h3>
              <div className="space-y-4">
                {completedTasks.slice(0, 3).map((task) => (
                  <div key={task.id} className="p-4 bg-white/5 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">{task.title}</h4>
                    <p className="text-white/70 text-sm mb-3">{task.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded text-xs">
                        Completed
                      </span>
                      <span className="text-primary text-sm font-semibold">+{task.xpReward} XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}