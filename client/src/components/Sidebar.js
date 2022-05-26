import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Sidebar.css';
import logo from './kb-logo-test.jpg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img src={logo} alt='KB logo' width='100' height='100' />
      <div className='icons'>
        <FontAwesomeIcon icon={faGithub} className='icon' />
        <FontAwesomeIcon icon={faInstagram} className='icon' />
        <FontAwesomeIcon icon={faLinkedin} className='icon' />
      </div>
    </div>
  );
};

export default Sidebar;
