'use client';

import { UserCheck, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGuestMode } from '@/lib/guest-mode';
import { useLanguage } from '@/components/providers/language-provider';

export function GuestModeToggle() {
  const { isGuestMode, toggleGuestMode } = useGuestMode();
  const { t } = useLanguage();

  return (
    <Button
      variant={isGuestMode ? "default" : "outline"}
      size="sm"
      onClick={toggleGuestMode}
      className={`glass-hover ${isGuestMode ? 'bg-primary text-navy' : ''}`}
      aria-label={isGuestMode ? t('exitGuestMode') : t('tryAsGuest')}
    >
      {isGuestMode ? (
        <UserCheck className="h-4 w-4 mr-2" />
      ) : (
        <User className="h-4 w-4 mr-2" />
      )}
      <span className="hidden sm:inline">
        {isGuestMode ? t('guestMode') : t('tryAsGuest')}
      </span>
    </Button>
  );
}