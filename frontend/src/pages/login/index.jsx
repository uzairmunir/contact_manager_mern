import React, { useContext, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useState } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../components/spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const { user, error, success, loginUser, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      navigate('/');
    }
  }, [success, user, error, navigate]);

  // Function to handle onChange
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // Function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('All fields are required');
    }
    loginUser({ email, password });
    setFormData({
      email: '',
      password: '',
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className='register-container'>
      <h1>
        <FaSignInAlt />
        <span>Login </span>
      </h1>
      <p>Login and start setting goals</p>
      <section className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Please enter your email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password </label>
            <input
              type='text'
              name='password'
              id='password'
              placeholder='Please enter your password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <button className='register-btn' type='submit'>
            Login
          </button>
        </form>
      </section>
    </section>
  );
};

export default Login;
