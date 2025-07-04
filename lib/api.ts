// API Service Layer for Hexora Platform
// This file provides a centralized interface for all API calls
// TODO: Replace mock implementations with actual backend API calls

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  xp: number;
  level: number;
  role: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

// API Client Class
class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    // TODO: Initialize token from localStorage or secure storage
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('auth_token');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    let headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    headers = new Headers({
      'Content-Type': 'application/json',
    });

    if (this.token) {
      headers.set('Authorization', `Bearer ${this.token}`);
    }

    await fetch(url, {
      method: 'GET',
      headers: headers,
    });


    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Authentication Methods
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // TODO: Replace with actual API call
    // return this.request<AuthResponse>('/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify(credentials),
    // });

    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: credentials.email,
      xp: 12480,
      level: 5,
      role: 'Developer',
    };

    const mockResponse: AuthResponse = {
      user: mockUser,
      token: 'mock_jwt_token_' + Date.now(),
      refreshToken: 'mock_refresh_token_' + Date.now(),
    };

    this.token = mockResponse.token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', mockResponse.token);
      localStorage.setItem('user', JSON.stringify(mockUser));
    }

    return mockResponse;
  }

  async signup(data: SignupData): Promise<AuthResponse> {
    // TODO: Replace with actual API call
    // return this.request<AuthResponse>('/auth/signup', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // });

    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      xp: 0,
      level: 1,
      role: 'New Contributor',
    };

    const mockResponse: AuthResponse = {
      user: mockUser,
      token: 'mock_jwt_token_' + Date.now(),
      refreshToken: 'mock_refresh_token_' + Date.now(),
    };

    this.token = mockResponse.token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', mockResponse.token);
      localStorage.setItem('user', JSON.stringify(mockUser));
    }

    return mockResponse;
  }

  async logout(): Promise<void> {
    // TODO: Replace with actual API call
    // await this.request('/auth/logout', { method: 'POST' });

    // Mock implementation
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    }
  }

  async refreshToken(): Promise<AuthResponse> {
    // TODO: Replace with actual API call
    // return this.request<AuthResponse>('/auth/refresh', {
    //   method: 'POST',
    //   body: JSON.stringify({ refreshToken: this.refreshToken }),
    // });

    throw new Error('Token refresh not implemented');
  }

  // User Methods
  async getCurrentUser(): Promise<User> {
    // TODO: Replace with actual API call
    // return this.request<User>('/user/me');

    // Mock implementation
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      if (userData) {
        return JSON.parse(userData);
      }
    }
    
    throw new Error('No authenticated user');
  }

  async updateUser(data: Partial<User>): Promise<User> {
    // TODO: Replace with actual API call
    // return this.request<User>('/user/me', {
    //   method: 'PATCH',
    //   body: JSON.stringify(data),
    // });

    // Mock implementation
    const currentUser = await this.getCurrentUser();
    const updatedUser = { ...currentUser, ...data };
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    
    return updatedUser;
  }

  // Tasks Methods
  async getTasks(): Promise<any[]> {
    // TODO: Replace with actual API call
    // return this.request<any[]>('/tasks');

    // Mock implementation - return data from mock-data.ts
    const { mockTasks } = await import('@/data/mock-data');
    return mockTasks;
  }

  async createTask(taskData: any): Promise<any> {
    // TODO: Replace with actual API call
    // return this.request<any>('/tasks', {
    //   method: 'POST',
    //   body: JSON.stringify(taskData),
    // });

    // Mock implementation
    const newTask = {
      id: Date.now().toString(),
      ...taskData,
      createdAt: new Date().toISOString(),
    };
    
    return newTask;
  }

  async updateTask(taskId: string, updates: any): Promise<any> {
    // TODO: Replace with actual API call
    // return this.request<any>(`/tasks/${taskId}`, {
    //   method: 'PATCH',
    //   body: JSON.stringify(updates),
    // });

    // Mock implementation
    return { id: taskId, ...updates };
  }

  // Team Methods
  async getTeamMembers(): Promise<any[]> {
    // TODO: Replace with actual API call
    // return this.request<any[]>('/team');

    // Mock implementation
    const { mockTeamMembers } = await import('@/data/mock-data');
    return mockTeamMembers;
  }

  async getTeamMember(memberId: string): Promise<any> {
    // TODO: Replace with actual API call
    // return this.request<any>(`/team/${memberId}`);

    // Mock implementation
    const { mockTeamMembers } = await import('@/data/mock-data');
    const member = mockTeamMembers.find(m => m.id === memberId);
    if (!member) {
      throw new Error('Team member not found');
    }
    return member;
  }

  // Projects Methods
  async getProjects(): Promise<any[]> {
    // TODO: Replace with actual API call
    // return this.request<any[]>('/projects');

    // Mock implementation
    const { mockProjects } = await import('@/data/mock-data');
    return mockProjects;
  }

  async getProject(projectId: string): Promise<any> {
    // TODO: Replace with actual API call
    // return this.request<any>(`/projects/${projectId}`);

    // Mock implementation
    const { mockProjects } = await import('@/data/mock-data');
    const project = mockProjects.find(p => p.id === projectId);
    if (!project) {
      throw new Error('Project not found');
    }
    return project;
  }
}

// Export singleton instance
export const api = new ApiClient(API_BASE_URL);

// Export individual API functions for convenience
export const auth = {
  login: (credentials: LoginCredentials) => api.login(credentials),
  signup: (data: SignupData) => api.signup(data),
  logout: () => api.logout(),
  refreshToken: () => api.refreshToken(),
};

export const users = {
  getCurrent: () => api.getCurrentUser(),
  update: (data: Partial<User>) => api.updateUser(data),
};

export const tasks = {
  getAll: () => api.getTasks(),
  create: (data: any) => api.createTask(data),
  update: (id: string, updates: any) => api.updateTask(id, updates),
};

export const team = {
  getAll: () => api.getTeamMembers(),
  getById: (id: string) => api.getTeamMember(id),
};

export const projects = {
  getAll: () => api.getProjects(),
  getById: (id: string) => api.getProject(id),
};