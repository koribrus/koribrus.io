import React from 'react';
import './Header.css';

const Header = ({ id, heading }) => {
  return (
    <div id={id} className='header'>
      <h3>{heading}</h3>
      <div className='line'></div>
    </div>
  );
};

export default Header;
