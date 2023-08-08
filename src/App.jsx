import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import ProtectedData from './ProtectedData';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <a href='https://vitejs.dev' target='noreferrer'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <Link to='/login'>Login</Link> | <Link to='/signup'>Signup</Link> |{' '}
          <Link to='/protected-data'>Protected Data</Link>
        </div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/protected-data' element={<ProtectedData />} />
        </Routes>
        <p className='read-the-docs'>Click on the Vite logo to learn more</p>
      </Router>
    </div>
  );
}

export default App;
