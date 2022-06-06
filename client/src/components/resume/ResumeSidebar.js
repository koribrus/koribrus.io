import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ResumeSidebar.css';
import logo1 from '../../img/logos/kb-logo-v1.png';
import logo2 from '../../img/logos/kb-logo-v1-b.png';
import logo3 from '../../img/logos/kb-logo-v2.png';
import logo4 from '../../img/logos/kb-logo-v3.png';

const ResumeSidebar = () => {
  return (
    <div className='resume-sidebar'>
      <div className='nav-links'>
        <div className='icons'>
          <a href='https://www.linkedin.com/in/koribrus' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} className='icon' />
          </a>
          <a href='https://github.com/koribrus' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faGithub} className='icon' />
          </a>
          <a href='https://www.instagram.com/koribrus' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={faInstagram} className='icon' />
          </a>
        </div>
        <div className='line-vertical'></div>
      </div>
    </div>
  );
};

export default ResumeSidebar;
