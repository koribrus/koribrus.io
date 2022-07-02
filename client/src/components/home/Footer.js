import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-item-1'>koribrus.io</div>
      <div className='footer-item-2'>
        Design inspiration |{' '}
        <a href='https://brittanychiang.com/' rel='noreferrer' target='_blank'>
          brittanychiang.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
