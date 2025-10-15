import React from 'react';
import { Building2, User, Home, CheckCircle, ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      icon: <User className='w-6 h-6 text-white' />,
      title: 'Easy Verification',
      description: 'Simply enter your Application ID to get started',
    },
    {
      icon: <Home className='w-6 h-6 text-white' />,
      title: 'Choose Your Room',
      description: 'Browse available rooms and select your preference',
    },
    {
      icon: <CheckCircle className='w-6 h-6 text-white' />,
      title: 'Instant Confirmation',
      description: 'Get immediate confirmation and payment details',
    },
  ];

  return (
    <div className='min-h-screen  relative overflow-hidden'>
      {/* Decorative Background */}
      <div
        className='absolute top-0 left-0 w-[40rem] h-[40rem] bg-cyan-500 rounded-full 
        mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'
      ></div>
      <div
        className='absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-blue-500 rounded-full 
        mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000'
      ></div>

      {/* Main Content */}
      <main className='relative z-10'>
        <div className='max-w-6xl mx-auto px-4 py-16 md:py-24'>
          {/* Hero Section */}
          <div className='text-center mb-20'>
            <div className='inline-block mb-8'>
              <div
                className='w-28 h-28 bg-white/20 backdrop-blur-md rounded-full 
                flex items-center justify-center mx-auto border-4 border-cyan-400 
                shadow-2xl transform hover:scale-105 transition-transform duration-300'
              >
                <Building2 className='w-14 h-14 text-white' />
              </div>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
              Welcome to
              <br />
              <span className='text-cyan-300 hover:text-cyan-200 transition-colors'>
                ICBM Hostel Portal
              </span>
            </h1>

            <p className='text-xl text-cyan-100 mb-10 max-w-2xl mx-auto leading-relaxed'>
              Secure your accommodation in just a few clicks. Simple, fast, and
              hassle-free room allocation for all accepted students.
            </p>

            <Link to={'/registration'}>
              <button
                className='group bg-gradient-to-r from-cyan-500 to-blue-600 text-white 
                px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 
                hover:to-blue-700 transition-all shadow-2xl hover:scale-105 
                transform flex items-center gap-3 mx-auto'
              >
                <span>Check Available Rooms</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className='grid md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group bg-white/10 backdrop-blur-md rounded-xl p-8 
                  border border-white/20 hover:bg-white/20 transition-all 
                  transform hover:scale-105'
              >
                <div
                  className='w-14 h-14 bg-cyan-500 rounded-xl flex items-center 
                  justify-center mb-6 group-hover:bg-cyan-600 transition-colors'
                >
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  {feature.title}
                </h3>
                <p className='text-cyan-100'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
