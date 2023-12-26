'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';
import { Button } from './ui/button';

export function DarkModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleDarkMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Button variant={'ghost'} size={'icon'} onClick={handleDarkMode}>
      {theme === 'light' ? <Moon fill='#0f172a' /> : <Sun fill='white' />}
    </Button>
  );
}
