
"use client";
import { sanityloginUploader } from '@/services/sanityApi';
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
  
    // Call the API to store the login data
    try {
      const response = await sanityloginUploader(username, password);
      alert('Data uploaded successfully');
      setSuccess('Login successful!');
      // Reset form
      setUsername('');
      setPassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const loginSanityFunction = async () => {{
//         const response = await sanityloginUploader(username, password);
//         alert(response);
    
//     loginSanityFunction();
// }
//     }
// setError('');
// setSuccess('');
// setIsLoading(true);

    // Simulate API call
  //   try {
  //     await new Promise(resolve => setTimeout(resolve, 1500));
  //     // Add your actual login logic here
  //     if (username && password) {
  //       setSuccess('Login successful!');
  //       // Reset form
  //       setUsername('');
  //       setPassword('');
  //     } else {
  //       throw new Error('Please fill in all fields');
  //     }
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : 'Login failed');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

    





  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x text-gray-700">
      <div className="p-8 bg-white shadow-2xl rounded-xl w-96 max-w-md transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-center  mb-8 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
        Login Form
        </h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            ⚠️ {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
            ✅ {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-800">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Enter your username"
                disabled={isLoading}
              />
              <svg
                className="absolute right-3 top-4 h-5 w-5 text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-lg font-medium text-gray-900">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Enter your password"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-800 hover:text-indigo-600 focus:outline-none"
              >
                {showPassword ? '👁️' : '👁️🗨️'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don't have an account?{' '}
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;