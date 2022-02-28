import React from 'react';
import { useState } from 'react';
import './Form.css';

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const { name, email, phone, type } = contactData;

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
    console.log(contactData);
    setContactData({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
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
            value='personal'
            checked={type === 'personal'}
            onChange={handleChange}
          />{' '}
          Personal{' '}
          <input
            type='radio'
            name='type'
            value='professional'
            checked={type === 'professional'}
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
