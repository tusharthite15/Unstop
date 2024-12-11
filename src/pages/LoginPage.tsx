import React from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-1">
<div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-24 items-center">
<div className="hidden md:block">
          <img
            src="https://res.cloudinary.com/dmwhg18or/image/upload/v1733849957/Illustration_likckk.png"
            alt="Login illustration"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}