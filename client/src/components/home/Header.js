import React from 'react';
import './Header.css';

const Header = ({ heading }) => {
  return (
    <div className='header'>
      <h3>{heading}</h3>
      <div className='line'></div>
    </div>
  );
};

export default Header;
