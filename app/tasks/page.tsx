'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { 
  Plus,
  Filter,
  Search,
  Calendar,
  User,
  Clock,
  Award,
  MoreVertical,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Target,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { mockTasks, mockTeamMembers, type Task } from '@/data/mock-data';

const columns = [
  { id: 'todo', title: 'To Do', color: 'border-white/20' },
  { id: 'in-progress', title: 'In Progress', color: 'border-blue-400/50' },
  { id: 'review', title: 'Review', color: 'border-yellow-400/50' },
  { id: 'done', title: 'Done', color: 'border-green-400/50' },
];

const priorityConfig = {
  low: { color: 'text-green-400', bg: 'bg-green-400/20', label: 'Low' },
  medium: { color: 'text-yellow-400', bg: 'bg-yellow-400/20', label: 'Medium' },
  high: { color: 'text-red-400', bg: 'bg-red-400/20', label: 'High' },
};

const complexityConfig = {
  beginner: { color: 'text-green-400', bg: 'bg-green-400/10' },
  intermediate: { color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  advanced: { color: 'text-red-400', bg: 'bg-red-400/10' },
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterAssignee, setFilterAssignee] = useState('all');

  // Sprint tracking
  const [sprintData, setSprintData] = useState({
    name: 'Sprint 12 - Q1 2025',
    startDate: '2024-12-01',
    endDate: '2024-12-31',
    progress: 68,
    velocity: 42,
    burndownData: [
      { day: 1, planned: 100, actual: 100 },
      { day: 5, planned: 80, actual: 85 },
      { day: 10, planned: 60, actual: 65 },
      { day: 15, planned: 40, actual: 42 },
      { day: 20, planned: 20, actual: 25 },
      { day: 25, planned: 10, actual: 15 },
      { day: 30, planned: 0, actual: 8 },
    ]
  });

  // Calculate sprint deadline
  const sprintEndDate = new Date(sprintData.endDate);
  const daysLeft = Math.ceil((sprintEndDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    const matchesAssignee = filterAssignee === 'all' || task.assignedTo.includes(filterAssignee);
    
    return matchesSearch && matchesPriority && matchesAssignee;
  });

  const getTasksByStatus = (status: string) => {
    return filteredTasks.filter(task => task.status === status);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    
    if (source.droppableId === destination.droppableId) return;

    const updatedTasks = tasks.map(task => 
      task.id === draggableId 
        ? { ...task, status: destination.droppableId as Task['status'] }
        : task
    );

    setTasks(updatedTasks);
  };

  const getAssigneeName = (userId: string) => {
    const member = mockTeamMembers.find(m => m.id === userId);
    return member ? member.name : 'Unassigned';
  };

  const getAssigneeAvatar = (userId: string) => {
    const member = mockTeamMembers.find(m => m.id === userId);
    return member ? member.avatar : '?';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date();
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Task <span className="gradient-text">Management</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Organize your work, track progress, and collaborate with your team using our 
              powerful Kanban-style task management system.
            </p>
          </motion.div>

          {/* Sprint Tracking Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-xl p-6 mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sprint Info */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  {sprintData.name}
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-white/60 text-sm">Sprint Progress</div>
                    <div className="text-2xl font-bold text-primary">{sprintData.progress}%</div>
                    <Progress value={sprintData.progress} className="h-2 mt-2" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Team Velocity</div>
                    <div className="text-2xl font-bold text-green-400">{sprintData.velocity}</div>
                    <div className="text-white/60 text-xs">story points/sprint</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-white/60 text-sm">
                  <span>Started: {formatDate(sprintData.startDate)}</span>
                  <span>•</span>
                  <span>Ends: {formatDate(sprintData.endDate)}</span>
                  <span>•</span>
                  <span className={daysLeft > 0 ? 'text-primary' : 'text-red-400'}>
                    {daysLeft > 0 ? `${daysLeft} days left` : 'Sprint ended'}
                  </span>
                </div>
              </div>

              {/* Sprint Stats */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{daysLeft > 0 ? daysLeft : 0}</div>
                  <div className="text-white/60 text-sm">Days Left</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">
                    {tasks.filter(t => t.status === 'done').length}
                  </div>
                  <div className="text-white/60 text-sm">Completed</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <ArrowRight className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">
                    {tasks.filter(t => t.status === 'in-progress').length}
                  </div>
                  <div className="text-white/60 text-sm">In Progress</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">
                    {tasks.reduce((sum, task) => sum + task.xpReward, 0)}
                  </div>
                  <div className="text-white/60 text-sm">Total XP</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                {/* Filters */}
                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                >
                  <option value="all" className="bg-navy">All Priorities</option>
                  <option value="high" className="bg-navy">High Priority</option>
                  <option value="medium" className="bg-navy">Medium Priority</option>
                  <option value="low" className="bg-navy">Low Priority</option>
                </select>

                <select
                  value={filterAssignee}
                  onChange={(e) => setFilterAssignee(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                >
                  <option value="all" className="bg-navy">All Assignees</option>
                  {mockTeamMembers.map((member) => (
                    <option key={member.id} value={member.id} className="bg-navy">
                      {member.name}
                    </option>
                  ))}
                </select>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-navy font-semibold">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kanban Board */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {columns.map((column, columnIndex) => (
                <motion.div
                  key={column.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
                  className={`glass rounded-xl p-4 border-t-4 ${column.color}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-white">{column.title}</h3>
                    <Badge variant="secondary" className="bg-white/10 text-white/80">
                      {getTasksByStatus(column.id).length}
                    </Badge>
                  </div>

                  <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`space-y-3 min-h-[200px] ${
                          snapshot.isDraggingOver ? 'bg-primary/5 rounded-lg' : ''
                        }`}
                      >
                        {getTasksByStatus(column.id).map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`glass rounded-lg p-4 cursor-grab active:cursor-grabbing transition-all ${
                                  snapshot.isDragging ? 'rotate-3 shadow-2xl' : 'card-hover'
                                }`}
                              >
                                {/* Task Header */}
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex items-center space-x-2">
                                    <div className={`w-2 h-2 rounded-full ${priorityConfig[task.priority].bg}`} />
                                    <span className={`text-xs font-medium px-2 py-1 rounded ${complexityConfig[task.complexity].bg} ${complexityConfig[task.complexity].color}`}>
                                      {task.complexity}
                                    </span>
                                  </div>
                                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </div>

                                {/* Task Title */}
                                <h4 className="font-semibold text-white mb-2 leading-tight">
                                  {task.title}
                                </h4>

                                {/* Task Description */}
                                <p className="text-white/70 text-sm mb-3 leading-relaxed line-clamp-2">
                                  {task.description}
                                </p>

                                {/* Tags */}
                                {task.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {task.tags.slice(0, 2).map((tag) => (
                                      <span
                                        key={tag}
                                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                    {task.tags.length > 2 && (
                                      <span className="px-2 py-1 bg-white/10 text-white/60 rounded-full text-xs">
                                        +{task.tags.length - 2}
                                      </span>
                                    )}
                                  </div>
                                )}

                                {/* Task Footer */}
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    {/* Assignees */}
                                    <div className="flex -space-x-2">
                                      {task.assignedTo.slice(0, 2).map((userId) => (
                                        <div
                                          key={userId}
                                          className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center border-2 border-navy"
                                          title={getAssigneeName(userId)}
                                        >
                                          <span className="text-xs text-primary font-medium">
                                            {getAssigneeAvatar(userId)}
                                          </span>
                                        </div>
                                      ))}
                                      {task.assignedTo.length > 2 && (
                                        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center border-2 border-navy">
                                          <span className="text-xs text-white/60">
                                            +{task.assignedTo.length - 2}
                                          </span>
                                        </div>
                                      )}
                                    </div>

                                    {/* Due Date */}
                                    <div className={`flex items-center text-xs ${
                                      isOverdue(task.dueDate) ? 'text-red-400' : 'text-white/60'
                                    }`}>
                                      {isOverdue(task.dueDate) && <AlertCircle className="h-3 w-3 mr-1" />}
                                      <Calendar className="h-3 w-3 mr-1" />
                                      <span>{formatDate(task.dueDate)}</span>
                                    </div>
                                  </div>

                                  {/* XP Reward */}
                                  <div className="flex items-center text-primary text-xs font-semibold">
                                    <Award className="h-3 w-3 mr-1" />
                                    <span>{task.xpReward} XP</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </motion.div>
              ))}
            </div>
          </DragDropContext>
        </div>
      </section>
    </div>
  );
}