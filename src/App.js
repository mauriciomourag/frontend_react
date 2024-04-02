import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
        <Navbar />
        <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>

    </div>
  );
}

export default App;
