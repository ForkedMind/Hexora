'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface GuestModeContextType {
  isGuestMode: boolean;
  toggleGuestMode: () => void;
}

export const GuestModeContext = createContext<GuestModeContextType | undefined>(undefined);

export function useGuestMode() {
  const context = useContext(GuestModeContext);
  if (!context) {
    throw new Error('useGuestMode must be used within a GuestModeProvider');
  }
  return context;
}

export function useGuestModeState() {
  const [isGuestMode, setIsGuestMode] = useState(false);

  // Load guest mode from localStorage on mount
  useEffect(() => {
    const savedGuestMode = localStorage.getItem('guestMode');
    if (savedGuestMode === 'true') {
      setIsGuestMode(true);
    }
  }, []);

  const toggleGuestMode = () => {
    const newGuestMode = !isGuestMode;
    setIsGuestMode(newGuestMode);
    localStorage.setItem('guestMode', newGuestMode.toString());
  };

  return { isGuestMode, toggleGuestMode };
}