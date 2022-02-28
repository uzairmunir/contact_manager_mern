import React from 'react';
import './Register.css';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;

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
  };

  return (
    <section className='register-container'>
      <h1>
        <FaUser />
        <span>Register </span>
      </h1>
      <p>Please create an account</p>
      <section className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Please enter your name'
              value={name}
              onChange={handleChange}
            />
          </div>
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
          <div className='form-group'>
            <label htmlFor='password1'>Confirm Password </label>
            <input
              type='text'
              name='password2'
              id='password2'
              placeholder='Please confirm your password'
              value={password2}
              onChange={handleChange}
            />
          </div>
          <button className='register-btn' type='submit'>
            Register
          </button>
        </form>
      </section>
    </section>
  );
};

export default Register;
