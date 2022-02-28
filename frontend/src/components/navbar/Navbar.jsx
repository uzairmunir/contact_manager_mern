import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    logoutUser();
    navigate('/');
  };
  return (
    <nav>
      <div className='nav-logo'>
        <Link to='/'>
          <FcContacts />
          <span>Contact Manager</span>
        </Link>
      </div>
      {user ? (
        <button className='logout-btn' onClick={logout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      ) : (
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
      )}
    </nav>
  );
};

export default Navbar;
