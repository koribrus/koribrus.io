import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const smoothScroll = (e, section) => {
    e.preventDefault();
    window.history.replaceState(null, '', `/${section}`);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='navbar'>
      <div></div>
      <ul className='nav-menu'>
        <li className='nav-item' onClick={(e) => smoothScroll(e, 'about')}>
          <a className='nav-link' href='/'>
            <span className='nav-bullet'>{'>>'}</span>
            <span className='paranthesis'>(</span>
            about
            <span className='paranthesis paranthesis-r'>)</span>
          </a>
        </li>
        <li className='nav-item' onClick={(e) => smoothScroll(e, 'projects')}>
          <a className='nav-link' href='/'>
            <span className='nav-bullet'>{'>>'}</span>
            <span className='paranthesis'>(</span>
            <span className='nav-name'>projects</span>
            <span className='paranthesis paranthesis-r'>)</span>
          </a>
        </li>
        <li className='nav-item' onClick={(e) => smoothScroll(e, 'contact')}>
          <a className='nav-link' href='/'>
            <span className='nav-bullet'>{'>>'}</span>
            <span className='paranthesis'>(</span>
            contact
            <span className='paranthesis paranthesis-r'>)</span>
          </a>
        </li>
        <li className='nav-item btn'>
          <a className='nav-btn' href='/'>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
