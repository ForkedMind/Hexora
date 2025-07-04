'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Filter, 
  Search, 
  MoreVertical, 
  Award,
  Clock,
  CheckCircle,
  User,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { mockTeamMembers, type TeamMember } from '@/data/mock-data';

const statusConfig = {
  active: { color: 'text-green-400', bg: 'bg-green-400/20', label: 'Active' },
  idle: { color: 'text-yellow-400', bg: 'bg-yellow-400/20', label: 'Idle' },
  busy: { color: 'text-red-400', bg: 'bg-red-400/20', label: 'Busy' },
};

const filters = [
  { label: 'All Members', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Idle', value: 'idle' },
  { label: 'Busy', value: 'busy' },
];

const roleFilters = [
  { label: 'All Roles', value: 'all' },
  { label: 'Developers', value: 'developer' },
  { label: 'Designers', value: 'designer' },
  { label: 'DevOps', value: 'devops' },
];

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  const filteredMembers = mockTeamMembers.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    const matchesRole = roleFilter === 'all' || 
                       member.role.toLowerCase().includes(roleFilter.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getXPProgress = (xp: number, level: number) => {
    const baseXP = level * 2000;
    const nextLevelXP = (level + 1) * 2000;
    const progress = ((xp - baseXP) / (nextLevelXP - baseXP)) * 100;
    return Math.max(0, Math.min(100, progress));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Team <span className="gradient-text">Management</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Monitor your team&apos;s progress, track XP earnings, and manage task assignments.
              Build high-performing teams with our comprehensive management tools.
            </p>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <div className="glass rounded-xl p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{mockTeamMembers.length}</div>
              <div className="text-white/60 text-sm">Total Members</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">
                {mockTeamMembers.filter(m => m.status === 'active').length}
              </div>
              <div className="text-white/60 text-sm">Active Members</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">
                {mockTeamMembers.reduce((sum, m) => sum + m.xp, 0).toLocaleString()}
              </div>
              <div className="text-white/60 text-sm">Total XP</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">
                {mockTeamMembers.reduce((sum, m) => sum + m.tasksCompleted, 0)}
              </div>
              <div className="text-white/60 text-sm">Tasks Completed</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                <Input
                  placeholder="Search team members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                >
                  {filters.map((filter) => (
                    <option key={filter.value} value={filter.value} className="bg-navy text-white">
                      {filter.label}
                    </option>
                  ))}
                </select>

                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                >
                  {roleFilters.map((filter) => (
                    <option key={filter.value} value={filter.value} className="bg-navy text-white">
                      {filter.label}
                    </option>
                  ))}
                </select>

                <Button variant="outline" size="sm" className="glass-hover">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Team
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 card-hover"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold">{member.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{member.name}</h3>
                      <p className="text-white/60 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${statusConfig[member.status].bg}`} />
                    <span className={`text-xs font-medium ${statusConfig[member.status].color}`}>
                      {statusConfig[member.status].label}
                    </span>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* XP Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm">Level {member.level}</span>
                    <span className="text-primary font-semibold text-sm">{member.xp.toLocaleString()} XP</span>
                  </div>
                  <Progress value={getXPProgress(member.xp, member.level)} className="h-2" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white mb-1">{member.tasksCompleted}</div>
                    <div className="text-white/60 text-xs">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary mb-1">{member.activeTasks}</div>
                    <div className="text-white/60 text-xs">Active Tasks</div>
                  </div>
                </div>

                {/* Completion Rate */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60 text-sm">Completion Rate</span>
                    <span className="text-green-400 font-semibold text-sm">{member.completionRate}%</span>
                  </div>
                  <Progress value={member.completionRate} className="h-1.5" />
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-white/60 text-sm mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/60 rounded text-xs">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 glass-hover">
                    <User className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-navy">
                    Assign Task
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Users className="h-16 w-16 text-white/20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No team members found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}