import React, { useState } from 'react';
import Menu from './Menu';
import './HeaderSlim.css';

const HeaderSlim = () => {
  // ! move open/close dropdown state from Menu to redux. Once there, set conditional box shadow on .apps-dropdown to ensure shadow isn't visible on 'close' state.
  return (
    <div className='header-p'>
      <div className='navbar-lib'>
        <div className='navbar-top-p'></div>
        <div className='navbar-content-p'>
          <a className='navbar-logo-p' href='https://koribrus.io'>
            <p>koribrus.io</p>
          </a>
          <Menu>
            <ul type='1' className='apps-dropdown'>
              <li className='apps-dropdown-item'>
                <span className='dropdown-count'>1</span>
                <a href='/'>expanding cards</a>
              </li>
              <li className='apps-dropdown-item'>
                <span className='dropdown-count'>2</span>
                <a href='/'>progress steps</a>
              </li>
              <li className='apps-dropdown-item'>
                <span className='dropdown-count'>3</span>
                <a href='/' className='coming-soon'>
                  <span>rotating nav</span>
                  <span>(coming soon)</span>
                </a>
              </li>
              <li className='apps-dropdown-item'>
                <span className='dropdown-count'>4</span>
                <a href='/' className='coming-soon'>
                  <span>hidden search</span>
                  <span>(coming soon)</span>
                </a>
              </li>
              <li className='apps-dropdown-item'>
                <span className='dropdown-count'>5</span>
                <a href='/' className='coming-soon'>
                  <span>blurry loading</span>
                  <span>(coming soon)</span>
                </a>
              </li>
            </ul>
          </Menu>
        </div>
      </div>
      <div className='banner-p'>
        <div className='overlay-p'>
          <div className='banner-content'>
            <h1 className='banner-title'>50 react apps</h1>
            <p className='banner-text'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlim;
