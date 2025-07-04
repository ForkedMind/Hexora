import Link from 'next/link';
import { Github, Twitter, Disc, Mail } from 'lucide-react';
import { HexagonBackground } from '@/components/shared/hexagon-background';
import { useLanguage } from '@/components/providers/language-provider';

const footerSections = [
  {
    title: 'product',
    links: [
      { name: 'features', href: '/features' },
      { name: 'howItWorks', href: '/how-it-works' },
      { name: 'pricing', href: '/pricing' },
      { name: 'projects', href: '/projects' },
    ],
  },
  {
    title: 'community',
    links: [
      { name: 'discord', href: '#' },
      { name: 'github', href: '#' },
      { name: 'twitter', href: '#' },
      { name: 'blog', href: '#' },
    ],
  },
  {
    title: 'legal',
    links: [
      { name: 'privacyPolicy', href: '/privacy' },
      { name: 'termsOfService', href: '/terms' },
      { name: 'cookiePolicy', href: '/cookies' },
      { name: 'daoGovernance', href: '/governance' },
    ],
  },
  {
    title: 'company',
    links: [
      { name: 'about', href: '/about' },
      { name: 'team', href: '/team' },
      { name: 'careers', href: '/careers' },
      { name: 'contact', href: '/contact' },
    ],
  },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Discord', icon: Disc, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@hexora.io' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/50 border-t border-white/10 relative overflow-hidden">
      {/* Hexagon Background */}
      <HexagonBackground className="opacity-10" density={6} speed={0.1} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/6z6p7DW/IMG-0775-removebg-preview.png" 
                  alt="Hexora Logo" 
                  className="h-8 w-8 object-contain hexora-logo group-hover:hexora-logo-animated transition-all duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/20 transition-all duration-300 opacity-50" />
              </div>
              <span className="text-xl font-bold gradient-text">Hexora</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-hover flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-white/60 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{t(section.title)}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-primary transition-colors text-sm"
                    >
                      {t(link.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            {t('copyright')}
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-white/60 text-sm">{t('builtWithLove')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}