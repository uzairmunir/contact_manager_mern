import React from 'react';
import { FaUser } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { AuthContext } from '../../context/auth/AuthContext';
import { ContactContext } from '../../context/contact/ContactContext';
import { FiEdit } from 'react-icons/fi';
import './Contact.css';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ContactItem = ({ contact }) => {
  const { user } = useContext(AuthContext);
  const { deleteContact, setCurrent } = useContext(ContactContext);
  const token = user.token;
  const navigate = useNavigate();

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
        <FiEdit
          onClick={() => (setCurrent(contact), navigate('/contact-form'))}
          className='icon btn-icon'
        />
        <AiOutlineDelete
          onClick={() => (
            deleteContact(contact._id, token),
            toast(`Contact Deleted ${contact._id}`)
          )}
          className='icon btn-icon'
        />
      </div>
    </div>
  );
};

export default ContactItem;
