import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className='navbar'>
      <div></div>
      <ul className='nav-menu'>
        <li className='nav-item'>about</li>
        <li className='nav-item'>projects</li>
        <li className='nav-item'>contact</li>
        <li className='nav-item'>resume</li>
      </ul>
    </div>
  );
};

export default NavigationBar;
