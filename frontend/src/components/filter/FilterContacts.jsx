import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ContactContext } from '../../context/contact/ContactContext';
import './Filter.css';

const FilterContacts = () => {
  const text = useRef('');
  const { filtered, filterContacts, clearFilter } = useContext(ContactContext);

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, []);
  // Handle on Change
  const handleChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div className='filter-contacts'>
      <input
        type='text'
        placeholder='Search Contacts'
        ref={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterContacts;
