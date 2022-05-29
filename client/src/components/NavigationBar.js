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
            <span className='nav-bullet'>{'>> '}</span>
            about
            <span className='paranthesis'> )</span>
          </a>
          {/* <a className='nav-link-b' href='/'>
            <span className='paranthesis'>{'(  '}</span>
            about
            <span className='paranthesis'> )</span>
          </a> */}
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <span className='paranthesis'>( </span>
            <span className='nav-bullet'>{'(> '}</span>
            projects
            <span className='paranthesis'> )</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <span className='paranthesis'>( </span>
            <span className='nav-bullet'>{'>> '}</span>
            contact
            <span className='paranthesis'> )</span>
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
