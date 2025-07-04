'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/components/providers/language-provider';
import Link from 'next/link';

export default function SignInPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = t('emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('emailInvalid');
    }
    
    if (!formData.password) {
      newErrors.password = t('passwordRequired');
    } else if (formData.password.length < 6) {
      newErrors.password = t('passwordTooShort');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // TODO: Replace with actual API call
      // const response = await api.auth.signin(formData);
      
      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock success - redirect to dashboard
      console.log('Sign in successful:', formData);
      // router.push('/dashboard');
      
    } catch (error) {
      console.error('Sign in error:', error);
      setErrors({ general: t('signinError') });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div className="glass rounded-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">{t('welcomeBack')}</h1>
              <p className="text-white/60">{t('signinSubtitle')}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                  {errors.general}
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {t('email')}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 ${
                      errors.email ? 'border-red-500/50' : ''
                    }`}
                    placeholder={t('emailPlaceholder')}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {t('password')}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`pl-10 pr-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 ${
                      errors.password ? 'border-red-500/50' : ''
                    }`}
                    placeholder={t('passwordPlaceholder')}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary bg-white/5 border-white/10 rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="ml-2 text-white/60 text-sm">{t('rememberMe')}</span>
                </label>
                <Link href="/auth/forgot-password" className="text-primary hover:text-primary/80 text-sm">
                  {t('forgotPassword')}
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-navy font-semibold py-3"
              >
                {isLoading ? t('signingIn') : t('signIn')}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-white/10"></div>
              <span className="px-4 text-white/60 text-sm">{t('orContinueWith')}</span>
              <div className="flex-1 border-t border-white/10"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button variant="outline" className="glass-hover">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="glass-hover">
                <Chrome className="h-5 w-5 mr-2" />
                Google
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-white/60">{t('noAccount')} </span>
              <Link href="/auth/join" className="text-primary hover:text-primary/80 font-semibold">
                {t('signUp')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}