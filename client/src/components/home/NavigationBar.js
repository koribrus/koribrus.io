import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className='navbar'>
      <div></div>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <span className='nav-bullet'>{'>>'}</span>
            <span className='paranthesis'>(</span>
            about
            <span className='paranthesis paranthesis-r'>)</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <span className='nav-bullet'>{'>>'}</span>
            <span className='paranthesis'>(</span>
            <span clasName='nav-name'>projects</span>
            <span className='paranthesis paranthesis-r'>)</span>
          </a>
        </li>
        <li className='nav-item'>
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
