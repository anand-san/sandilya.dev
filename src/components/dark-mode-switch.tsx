'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';
import { Button } from './ui/button';

export function DarkModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  // TODO: Fix hydration without using these additional hacks
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDarkMode = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  if (!isMounted)
    return (
      <Button variant={'ghost'} size={'icon'}>
        <Moon fill='#0f172a' />
      </Button>
    );
  return (
    <Button variant={'ghost'} size={'icon'} onClick={handleDarkMode}>
      {resolvedTheme === 'light' ? (
        <Moon fill='#0f172a' />
      ) : (
        <Sun fill='white' />
      )}
    </Button>
  );
}
