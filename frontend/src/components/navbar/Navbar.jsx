import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-logo'>
        <Link to='/'>
          <FcContacts />
          <span>Contact Manager</span>
        </Link>
      </div>
      {/* {user ? (
        <button className='logout-btn' onClick={logoutUser}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      ) : ( */}
      <ul>
        <li>
          <Link to='/login'>
            <FaSignInAlt />
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaUser />
            <span>Register</span>
          </Link>
        </li>
      </ul>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
