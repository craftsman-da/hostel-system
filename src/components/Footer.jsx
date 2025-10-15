import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-blue-900/50 backdrop-blur-md border-t border-white/20 mt-auto'>
      <div className='max-w-6xl mx-auto px-4 py-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          {/* Copyright */}
          <div className='text-cyan-100'>
            <p className='text-sm'>
              &copy; {new Date().getFullYear()}{' '}
              <span className='font-semibold hover:text-cyan-300 transition-colors'>
                Sbts Dev & Security
              </span>
            </p>
          </div>

          {/* Links */}
          <div className='flex items-center gap-6'>
            <a
              href='#privacy'
              className='text-sm text-cyan-100 hover:text-cyan-300 transition-colors'
            >
              Privacy Policy
            </a>
            <a
              href='#terms'
              className='text-sm text-cyan-100 hover:text-cyan-300 transition-colors'
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
