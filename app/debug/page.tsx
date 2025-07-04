'use client';

import { motion } from 'framer-motion';
import { Monitor, Palette, Globe, Database, Zap } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { useLanguage } from '@/components/providers/language-provider';
import { useGuestMode } from '@/lib/guest-mode';

export default function DebugPage() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { isGuestMode, toggleGuestMode } = useGuestMode();

  const debugInfo = {
    theme: theme,
    language: language,
    guestMode: isGuestMode,
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',
    viewport: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'SSR',
    timestamp: new Date().toISOString(),
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">
            Debug <span className="gradient-text">Dashboard</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Theme Debug */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Palette className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-white">Theme State</h3>
              </div>
              <div className="space-y-2 text-white/70">
                <p>Current: <span className="text-primary">{theme}</span></p>
                <p>System: <span className="text-white">{typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}</span></p>
                <button
                  onClick={toggleTheme}
                  className="mt-2 px-3 py-1 bg-primary/20 text-primary rounded text-sm"
                >
                  Toggle Theme
                </button>
              </div>
            </div>

            {/* Language Debug */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-white">Language State</h3>
              </div>
              <div className="space-y-2 text-white/70">
                <p>Current: <span className="text-primary">{language}</span></p>
                <p>Direction: <span className="text-white">{language === 'ar' ? 'RTL' : 'LTR'}</span></p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded text-sm ${language === 'en' ? 'bg-primary text-navy' : 'bg-primary/20 text-primary'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('ar')}
                    className={`px-3 py-1 rounded text-sm ${language === 'ar' ? 'bg-primary text-navy' : 'bg-primary/20 text-primary'}`}
                  >
                    AR
                  </button>
                </div>
              </div>
            </div>

            {/* Guest Mode Debug */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-white">Guest Mode</h3>
              </div>
              <div className="space-y-2 text-white/70">
                <p>Status: <span className="text-primary">{isGuestMode ? 'Active' : 'Inactive'}</span></p>
                <p>Data: <span className="text-white">{isGuestMode ? 'Mock' : 'Live'}</span></p>
                <button
                  onClick={toggleGuestMode}
                  className="mt-2 px-3 py-1 bg-primary/20 text-primary rounded text-sm"
                >
                  Toggle Guest Mode
                </button>
              </div>
            </div>

            {/* System Info */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Monitor className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-white">System Info</h3>
              </div>
              <div className="space-y-2 text-white/70 text-sm">
                <p>Viewport: <span className="text-white">{debugInfo.viewport}</span></p>
                <p>Timestamp: <span className="text-white">{debugInfo.timestamp}</span></p>
                <p>User Agent: <span className="text-white break-all">{debugInfo.userAgent.substring(0, 50)}...</span></p>
              </div>
            </div>

            {/* API Status */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-white">API Status</h3>
              </div>
              <div className="space-y-2 text-white/70">
                <p>Mode: <span className="text-yellow-400">Mock</span></p>
                <p>Endpoint: <span className="text-white">Local JSON</span></p>
                <p>Status: <span className="text-green-400">Ready</span></p>
              </div>
            </div>

            {/* Translation Test */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-white">Translation Test</h3>
              </div>
              <div className="space-y-2 text-white/70 text-sm">
                <p>Home: <span className="text-white">{t('home')}</span></p>
                <p>About: <span className="text-white">{t('about')}</span></p>
                <p>Projects: <span className="text-white">{t('projects')}</span></p>
                <p>Sign In: <span className="text-white">{t('signIn')}</span></p>
              </div>
            </div>
          </div>

          {/* Raw Debug Data */}
          <div className="mt-8 glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Raw Debug Data</h3>
            <pre className="text-white/70 text-sm overflow-auto bg-black/20 p-4 rounded">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
}