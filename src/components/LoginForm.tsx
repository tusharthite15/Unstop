import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  // const validateForm = () => {
  //   const validUsername = 'emilys';
  //   const validEmail = 'emilys@example.com';
  //   const validPassword = 'password123';

  //   if (username.trim() !== validUsername || email.trim() !== validEmail || password !== validPassword) {
  //     toast.error('Invalid credentials. Please use the correct username, email, and password.');
  //     return false;
  //   }

  //   return true;
  // };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const validUsername = 'emilys';
    const validEmail = 'emilys@example.com';
    const validPassword = 'password123';

    if (username === validUsername && email === validEmail && password === validPassword) {
      login({ username, email }); // Update context with user data
      toast.success('Login successful!');
      navigate('/home'); // Redirect to home
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-2">Welcome to</h1>
      <h2 className="text-4xl font-bold text-indigo-600 mb-8">Unstop</h2>

      <div className="space-y-4 mb-8">
        <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Login with Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
          Login with Facebook
        </button>
      </div>

      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute w-full border-t border-gray-300"></div>
        <span className="relative px-4 bg-white text-sm text-gray-500">OR</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
          <a href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-indigo-600 hover:text-indigo-500">
            Register
          </a>
        </p>
      </form>
     
      
    </div>
    <div className="mt-6 p-4 bg-gray-100 border border-gray-300 text-sm text-gray-700 w-full max-w-md p-8  rounded-2xl shadow-lg">
        <p><strong>Default Credentials:</strong></p>
        <p><strong>Username:</strong> emilys</p>
        <p><strong>Email:</strong> emilys@example.com</p>
        <p><strong>Password:</strong> password123</p>
      </div>
    </div>
  );
}
