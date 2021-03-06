import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img
        src='/img/kb-logo-v1.png'
        alt='KB logo'
        width='150'
        height='150'
        className='animate-sidebar animate-sidebar-1'
      />
      <div className='nav-links animate-sidebar animate-sidebar-2'>
        <div className='line-vertical top'></div>
        <div className='icons'>
          <a href='https://github.com/koribrus' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faGithub} className='icon' />
          </a>
          <a href='https://www.instagram.com/koribrus' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faInstagram} className='icon' />
          </a>
          <a href='https://www.codewars.com/users/bruzky' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faFan} className='icon' />
          </a>
          <a href='https://www.linkedin.com/in/koribrus' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} className='icon' />
          </a>
        </div>
        <div className='line-vertical'></div>
      </div>
    </div>
  );
};

export default Sidebar;
