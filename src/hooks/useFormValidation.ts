import { useState } from 'react';

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (data: FormData): boolean => {
    const newErrors: FormErrors = {};

    if (data.username !== 'emilys') {
      newErrors.username = 'Username must be "emilys"';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (data.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm };
}