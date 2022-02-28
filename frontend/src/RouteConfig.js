import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from './context/auth/AuthContext';
import ContactForm from './components/contact-form/ContactForm';

const RouteConfig = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Dashboard /> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/contact-form'
            element={user ? <ContactForm /> : <Login />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default RouteConfig;
