import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className='navbar'>
      <div></div>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <span className='paranthesis'>( </span>
            about
            <span className='paranthesis'> )</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <span className='paranthesis'>( </span>
            projects
            <span className='paranthesis'> )</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <span className='paranthesis'>( </span>
            contact
            <span className='paranthesis'> )</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <span className='paranthesis'>( </span>
            Resume
            <span className='paranthesis'> )</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
