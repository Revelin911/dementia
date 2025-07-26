//import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header'

const App = () => {
  return (
      <div className='app-background text-light'>
          <Header />
          <main className='container py-4'>
            <Outlet />
        </main>
      </div>
  );
};

export default App
