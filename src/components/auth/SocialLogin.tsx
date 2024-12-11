import React from 'react';
import { Button } from '../ui/Button';

interface SocialLoginProps {
  provider: 'google' | 'facebook';
  onClick?: () => void;
}

export function SocialLogin({ provider, onClick }: SocialLoginProps) {
  const config = {
    google: {
      icon: 'https://www.google.com/favicon.ico',
      text: 'Login with Google',
    },
    facebook: {
      icon: 'https://www.facebook.com/favicon.ico',
      text: 'Login with Facebook',
    },
  };

  const { icon, text } = config[provider];

  return (
    <Button
      variant="outline"
      fullWidth
      onClick={onClick}
      className="flex items-center justify-center gap-2"
    >
      <img src={icon} alt={provider} className="w-5 h-5" />
      {text}
    </Button>
  );
}