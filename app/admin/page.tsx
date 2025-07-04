'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  BarChart3, 
  Settings, 
  Database,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const adminStats = [
  { label: 'Total Users', value: '2,547', change: '+12%', icon: Users, color: 'text-blue-400' },
  { label: 'Active Projects', value: '23', change: '+3', icon: BarChart3, color: 'text-green-400' },
  { label: 'System Health', value: '99.9%', change: '+0.1%', icon: Activity, color: 'text-primary' },
  { label: 'Revenue', value: '$45.2K', change: '+18%', icon: TrendingUp, color: 'text-yellow-400' },
];

const recentActivities = [
  { type: 'user', message: 'New user registration: sarah.chen@email.com', time: '2 minutes ago', status: 'success' },
  { type: 'project', message: 'Project "iLibrary" milestone completed', time: '15 minutes ago', status: 'success' },
  { type: 'system', message: 'Database backup completed successfully', time: '1 hour ago', status: 'success' },
  { type: 'alert', message: 'High CPU usage detected on server-02', time: '2 hours ago', status: 'warning' },
  { type: 'security', message: 'Failed login attempt from IP: 192.168.1.100', time: '3 hours ago', status: 'error' },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication
    if (credentials.username === 'admin' && credentials.password === 'hexora2025') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use admin/hexora2025 for demo.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-white/60">Secure access to platform management</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Username</label>
              <Input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="bg-white/5 border-white/10 text-white"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Password</label>
              <Input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="bg-white/5 border-white/10 text-white"
                placeholder="Enter password"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-navy font-semibold">
              Sign In to Admin Panel
            </Button>
          </form>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <p className="text-primary text-sm text-center">
              Demo credentials: admin / hexora2025
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-white/60">Platform management and monitoring</p>
            </div>
            <Button 
              onClick={() => setIsAuthenticated(false)}
              variant="outline" 
              className="glass-hover"
            >
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <span className="text-primary text-sm font-semibold">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass rounded-xl p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Activity className="h-5 w-5 text-primary mr-2" />
                  Recent Activities
                </h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-green-400' :
                        activity.status === 'warning' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`} />
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.message}</p>
                        <p className="text-white/60 text-xs">{activity.time}</p>
                      </div>
                      {activity.status === 'success' && <CheckCircle className="h-4 w-4 text-green-400" />}
                      {activity.status === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-400" />}
                      {activity.status === 'error' && <AlertTriangle className="h-4 w-4 text-red-400" />}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass rounded-xl p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Settings className="h-5 w-5 text-primary mr-2" />
                  Quick Actions
                </h2>
                <div className="space-y-4">
                  <Button className="w-full justify-start glass-hover">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Users
                  </Button>
                  <Button className="w-full justify-start glass-hover">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button className="w-full justify-start glass-hover">
                    <Database className="h-4 w-4 mr-2" />
                    Database Backup
                  </Button>
                  <Button className="w-full justify-start glass-hover">
                    <Settings className="h-4 w-4 mr-2" />
                    System Settings
                  </Button>
                </div>
              </motion.div>

              {/* System Status */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass rounded-xl p-6 mt-6"
              >
                <h2 className="text-xl font-semibold text-white mb-6">System Status</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/70">CPU Usage</span>
                      <span className="text-primary">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/70">Memory</span>
                      <span className="text-green-400">62%</span>
                    </div>
                    <Progress value={62} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/70">Storage</span>
                      <span className="text-yellow-400">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}