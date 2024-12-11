import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function HomePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <nav className="bg-white shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Unstop</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Welcome, {user?.firstName || 'User'}!</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Welcome to Unstop</h2>
          <div className="flex flex-col items-center">
          <img
  className="w-32 h-32 rounded-full shadow-lg mb-4 object-cover"
  src={user?.profilePicture || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&crop=faces&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
  alt={`${user?.firstName || 'User'}'s profile`}
/>

            <h3 className="text-xl font-bold text-gray-900">{user?.firstName || 'User'} {user?.lastName || ''}</h3>
            <p className="text-gray-600">{user?.email || 'example@gmail.com'}</p>
            <p className="text-gray-600">{user?.gender || 'N/A'}</p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
