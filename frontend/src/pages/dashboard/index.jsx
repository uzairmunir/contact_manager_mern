import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { ContactContext } from '../../context/contact/ContactContext';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import ContactItem from '../../components/contact-item/ContactItem';
import FilterContacts from '../../components/filter/FilterContacts';

const Index = () => {
  const { user } = useContext(AuthContext);
  const { contacts, filtered, getContacts, error, success } =
    useContext(ContactContext);
  let token = user.token;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    getContacts(token);
  }, [user, error, success]);

  if (contacts.length < 0) {
    return (
      <h1 style={{ margin: 'auto' }}>
        Currently Your Contact List is Empty Please add New Contact
      </h1>
    );
  }
  return (
    <div className='dashboard-container'>
      <section className='user-section'>
        <h1>Welcome {user?.name} </h1>
        <p>Contact Manager</p>
        <button>
          <Link to='/contact-form'>Create New Contact</Link>
        </button>
      </section>
      {contacts.length > 0 ? <FilterContacts /> : ''}
      <section className='contact-section'>
        {filtered !== null
          ? filtered.map((contact, index) => (
              <ContactItem key={index} contact={contact} />
            ))
          : contacts.map((contact, index) => (
              <ContactItem key={index} contact={contact} />
            ))}
      </section>
    </div>
  );
};

export default Index;
