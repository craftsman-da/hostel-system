import React, { useState } from 'react';
import { User, KeyRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

const VerificationPage = () => {
  const [appId, setAppId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Define Zod schema for APP ID
  const appIdSchema = z
    .string()
    .min(1, 'Application ID is required')
    .regex(
      /^APP-\d{4}-\d+$/,
      "Application ID must follow the format 'APP-YYYY-XXXXX' (e.g., APP-2025-70792)"
    );

  const handleVerify = () => {
    try {
      // Validate the AppID using Zod
      appIdSchema.parse(appId);
      setError('');

      // If validation passes, navigate to rooms
      navigate('/rooms');
    } catch (validationError) {
      // If Zod validation fails, show the error message
      if (validationError instanceof z.ZodError) {
        setError(validationError.errors[0].message);
      } else {
        setError('Invalid Application ID');
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <div className='max-w-md w-full mx-auto px-4 py-8'>
      <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8'>
        {/* Header Section */}
        <div className='text-center mb-8'>
          <div className='w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <User className='w-10 h-10 text-cyan-600' />
          </div>
          <h2 className='text-2xl font-bold text-blue-900 mb-2'>Find A Room</h2>
          <p className='text-gray-600'>Enter your Application ID to proceed</p>
        </div>

        {/* Input Section */}
        <div className='space-y-6'>
          <div>
            <label
              htmlFor='appId'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              Application ID
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <KeyRound className='h-5 w-5 text-gray-400' />
              </div>
              <input
                id='appId'
                type='text'
                value={appId}
                onChange={(e) => setAppId(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
                placeholder='APP-2025-70720'
                className={`w-full pl-12 pr-4 py-3 border-2 ${
                  error ? 'border-red-300' : 'border-gray-200'
                } rounded-xl
                  focus:ring-1 focus:outline-none
                  transition-colors placeholder:text-gray-400`}
              />
            </div>
            {error ? (
              <p className='text-xs text-red-500 mt-2'>{error}</p>
            ) : (
              <div className='flex items-center gap-2 mt-2'>
                <p className='text-xs text-gray-500'>Format: APP-YYYY-XXXXX</p>
                <div className='flex-grow border-t border-gray-200'></div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button
            onClick={handleVerify}
            className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white 
            py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 
            transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2'
          >
            <span>Verify & Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
