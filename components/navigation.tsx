'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { GuestModeToggle } from '@/components/ui/guest-mode-toggle';
import { useLanguage } from '@/components/providers/language-provider';

const navItems = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'projects', href: '/projects' },
  { name: 'howItWorks', href: '/how-it-works' },
  { name: 'team', href: '/team' },
  { name: 'tasks', href: '/tasks' },
  { name: 'tokenomics', href: '/tokenomics' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img 
                src="https://i.ibb.co/6z6p7DW/IMG-0775-removebg-preview.png" 
                alt="Hexora Logo" 
                className="h-10 w-10 object-contain hexora-logo group-hover:hexora-logo-animated transition-all duration-300"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/20 transition-all duration-300 opacity-60" />
            </div>
            <span className="text-xl font-bold gradient-text">Hexora</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-white/80'
                }`}
              >
                {t(item.name)}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <GuestModeToggle />
            <ThemeToggle />
            <LanguageToggle />
            <Link href="/auth/signin">
              <Button variant="outline" size="sm" className="glass-hover">
                {t('signIn')}
              </Button>
            </Link>
            <Link href="/auth/join">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-navy font-semibold">
                {t('joinHexora')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-hover"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 glass rounded-lg"
          >
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-white/80 hover:text-primary hover:bg-white/5'
                  }`}
                >
                  {t(item.name)}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <GuestModeToggle />
                  <div className="flex space-x-2">
                    <ThemeToggle />
                    <LanguageToggle />
                  </div>
                </div>
                <Link href="/auth/signin">
                  <Button variant="outline" size="sm" className="glass-hover w-full">
                    {t('signIn')}
                  </Button>
                </Link>
                <Link href="/auth/join">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-navy font-semibold w-full">
                    {t('joinHexora')}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}