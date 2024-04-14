import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar size={5} />
        <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
        </AuthContextProvider>
    </div>
  );
}

export default App;
