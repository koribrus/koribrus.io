import React from 'react';
import './HeaderSlim.css';

const HeaderSlim = () => {
  return (
    <div className='header-p'>
      <div className='navbar-lib'>
        <div className='navbar-top-p'></div>
        <div className='navbar-content-p'>
          <a className='navbar-logo-p' href='https://koribrus.io'>
            <p>koribrus.io</p>
          </a>
        </div>
      </div>
      <div className='banner-p'>
        <div className='overlay-p'>
          <div className='banner-content'>
            <h1 className='banner-title'>The Library</h1>
            <p className='banner-text'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlim;
