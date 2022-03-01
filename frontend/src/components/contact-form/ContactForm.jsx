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
  const {
    error,
    success,
    clearCurrent,
    createContact,
    current,
    updateContact,
  } = useContext(ContactContext);
  const { user } = useContext(AuthContext);
  const token = user.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (current === null) {
      setContactData({
        name: '',
        email: '',
        phone: '',
        type: 'Personal',
      });
    } else {
      setContactData(current);
    }
  }, [current]);

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
    // To create new contact
    if (current === null) {
      {
        if (!name || !phone) {
          toast.error('Please add required fields');
        }
        const data = { name, email, phone, type };
        createContact(data, token);
        navigate('/');
        toast('Contact Added');
        setContactData({
          name: '',
          email: '',
          phone: '',
          type: 'Personal',
        });
      }
    } // To update contact
    else {
      updateContact(contactData, token);
      navigate('/');
      toast('Contact Updated');
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
        <button type='submit'>
          {current !== null ? 'Update Contact' : 'Add Contact'}
        </button>
      </form>
      {current !== null ? (
        <button className='clear-btn' onClick={() => clearCurrent()}>
          Clear Form
        </button>
      ) : (
        <button className='clear-btn' onClick={() => navigate('/')}>
          Back To Home
        </button>
      )}
    </div>
  );
};

export default ContactForm;
