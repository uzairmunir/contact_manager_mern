import React from 'react';
import { FaUser } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';
import './Contact.css';

const ContactItem = ({ contact }) => {
  return (
    <div className='contact-item'>
      <div className='contact-name'>
        <h3>
          <FaUser />
          {contact.name}
        </h3>
        <h6
          className={`${
            contact.type === 'Personal' ? 'personal' : 'professional'
          }`}
        >
          {contact.type}
        </h6>
      </div>
      <h4>
        <HiOutlineMail className='icon' />
        <span>{contact.email}</span>
      </h4>
      <h4>
        <AiOutlinePhone className='icon' />
        <span>{contact.phone}</span>
      </h4>
      <div className='btn-div'>
        <FiEdit className='icon' />
        <AiOutlineDelete className='icon' />
      </div>
    </div>
  );
};

export default ContactItem;
