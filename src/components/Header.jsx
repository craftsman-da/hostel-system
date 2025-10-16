import React from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ menuOpen, setMenuOpen, goHome, showMenu = true }) => {
  return (
    <nav className='sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo and Title */}
          <Link to={'/'}>
            <div
              className='flex items-center gap-3 cursor-pointer'
              onClick={goHome}
            >
              <Building2 className='w-8 h-8 text-cyan-400 hover:text-cyan-300 transition-colors' />
              <div>
                <h1 className='text-lg font-bold text-white'>
                  SBTS Hostel Portal
                </h1>
                <p className='text-xs font-medium text-cyan-200'>
                  Student accommodation
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-4'>
            <Link to={'/registration'}>
              <button className='text-white px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all'>
                Find a room
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {showMenu && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-all'
              aria-label='Toggle menu'
            >
              {menuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && showMenu && (
          <div className='md:hidden border-t border-white/20 mt-4'>
            <div className='py-4 space-y-2'>
              <Link to={'/'}>
                <button className='block w-full text-left text-white px-4 py-2 hover:bg-white/20 rounded-lg transition-all'>
                  Home
                </button>
              </Link>

              <Link to={'/registration'}>
                <button className='block w-full text-left text-white px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all'>
                  Find a room
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
