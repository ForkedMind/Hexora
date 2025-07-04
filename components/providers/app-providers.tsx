'use client';

import { ReactNode } from 'react';
import { ThemeContext, useThemeState } from '@/lib/theme';
import { GuestModeContext, useGuestModeState } from '@/lib/guest-mode';
import { LanguageProvider } from './language-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const themeState = useThemeState();
  const guestModeState = useGuestModeState();

  return (
    <ThemeContext.Provider value={themeState}>
      <GuestModeContext.Provider value={guestModeState}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </GuestModeContext.Provider>
    </ThemeContext.Provider>
  );
}