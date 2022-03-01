import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { ContactContext } from '../../context/contact/ContactContext';
import { AuthContext } from '../../context/auth/AuthContext';
import './Form.css';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Personal',
  });
  const { name, email, phone, type } = contactData;
  const { error, success, createContact } = useContext(ContactContext);
  const { user } = useContext(AuthContext);
  const token = user.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [user, navigate, error, success, token]);

  // Function to handle change
  const handleChange = (e) => {
    setContactData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // Function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error('Please add required fields');
    } else {
      const data = { name, email, phone, type };
      createContact(data, token);
      navigate('/');
      setContactData({
        name: '',
        email: '',
        phone: '',
        type: 'Personal',
      });
    }
  };
  return (
    <div className='contact-form-container'>
      <h1>Create New Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={handleChange}
          name='name'
          placeholder='Enter Name'
        />
        <input
          type='email'
          value={email}
          onChange={handleChange}
          name='email'
          placeholder='Enter Email'
        />
        <input
          type='text'
          value={phone}
          onChange={handleChange}
          name='phone'
          placeholder='Enter phone'
        />
        <div className='contact-type'>
          <h5>Contact Type</h5>
          <input
            type='radio'
            name='type'
            value='Personal'
            checked={type === 'Personal'}
            onChange={handleChange}
          />{' '}
          Personal{' '}
          <input
            type='radio'
            name='type'
            value='Professional'
            checked={type === 'Professional'}
            onChange={handleChange}
          />{' '}
          Professional{' '}
        </div>
        <button type='submit'>Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
