import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-item-1'>koribrus.io</div>
      <div className='footer-item-2'>
        Design inspired by{' '}
        <a href='https://brittanychiang.com/' rel='noreferrer' target='_blank'>
          Brittany Chiang
        </a>
      </div>
    </div>
  );
};

export default Footer;
