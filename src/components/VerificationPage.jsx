import React from 'react';
import { User, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const VerificationPage = ({
  appId = '',
  setAppId = () => {},
  handleVerify = () => {},
}) => {
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
          <h2 className='text-2xl font-bold text-blue-900 mb-2'>
            Student Identity
          </h2>
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
                className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl
                  focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none
                  transition-colors placeholder:text-gray-400'
              />
            </div>
            <div className='flex items-center gap-2 mt-2'>
              <p className='text-xs text-gray-500'>Format: APP-YYYY-XXXXX</p>
              <div className='flex-grow border-t border-gray-200'></div>
            </div>
          </div>

          {/* Action Button */}
          <Link to={'/rooms'}>
            <button
              onClick={handleVerify}
              className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white 
              py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 
              transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2'
            >
              <span>Verify & Continue</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
