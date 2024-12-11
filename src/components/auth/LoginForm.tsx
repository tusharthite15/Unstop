// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
// import { loginUser } from '../../services/auth';
// import { useAuth } from '../../context/AuthContext';
// import { Button } from '../ui/Button';
// import { Input } from '../ui/Input';
// import { SocialLogin } from './SocialLogin';
// import { useFormValidation } from '../../hooks/useFormValidation';

// export function LoginForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const { errors, validateForm } = useFormValidation();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm(formData)) return;

//     try {
//       const response = await loginUser({
//         username: formData.username,
//         password: formData.password,
//       });
//       login(response);
//       toast.success('Login successful!');
//       navigate('/home');
//     } catch (error) {
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-3xl font-bold mb-2">Welcome to</h1>
//       <h2 className="text-4xl font-bold text-indigo-600 mb-8">Unstop</h2>

//       <div className="space-y-4 mb-8">
//         <SocialLogin provider="google" />
//         <SocialLogin provider="facebook" />
//       </div>

//       <div className="relative flex items-center justify-center mb-8">
//         <div className="absolute w-full border-t border-gray-300"></div>
//         <span className="relative px-4 bg-white text-sm text-gray-500">OR</span>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-4">
//           <Input
//             icon={User}
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             placeholder="Username"
//             error={errors.username}
//           />

//           <Input
//             icon={Mail}
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             error={errors.email}
//           />

//           <div className="relative">
//             <Input
//               icon={Lock}
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               error={errors.password}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//             >
//               {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//               className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
//             />
//             <span className="text-sm text-gray-600">Remember me</span>
//           </label>
//           <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
//             {/* Forgot Password? */}
//           </a>
//         </div>

//         <Button type="submit" fullWidth>
//           Login
//         </Button>

//         <p className="text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <a href="#" className="text-indigo-600 hover:text-indigo-500">
//             Register
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }