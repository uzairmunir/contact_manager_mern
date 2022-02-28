import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Index = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='dashboard-container'>
      <section className='user-section'>
        <h1>Welcome {user?.name} </h1>
        <p>Contact Manager</p>
        <button>
          <Link to='/contact-form'>Create New Contact</Link>
        </button>
      </section>
    </div>
  );
};

export default Index;
