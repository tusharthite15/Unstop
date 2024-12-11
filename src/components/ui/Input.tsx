import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  error?: string;
}

export function Input({
  icon: Icon,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      )}
      <input
        className={`
          w-full
          ${Icon ? 'pl-10' : 'pl-4'}
          pr-4 py-3
          bg-gray-50
          border ${error ? 'border-red-500' : 'border-gray-300'}
          rounded-lg
          focus:ring-2
          focus:ring-indigo-500
          focus:border-transparent
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}