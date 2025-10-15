import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <div className='min-h-screen flex flex-col bg-blue-900'>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
