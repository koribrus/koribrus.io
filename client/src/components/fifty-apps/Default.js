import React from 'react';
import './Default.css';
import reactLogo from '../../img/react.jpg';
import trioLogo from '../../img/trio.jpg';

const Default = () => {
  return (
    <div className='default-container'>
      <div className='content-container'>
        <div className='content-border'>
          <div className='default-content'>
            <div className='default-column-left'>
              <img src={reactLogo} alt='React logo' />
              <img src={trioLogo} alt='html css js logos' />
            </div>
            <div className='default-column-right'>
              <div className='default-col-r-content'>
                <h3>50 React Apps</h3>
                <p>
                  This is a self directed tutorial project that recreates each project from the
                  Udemy Course{' '}
                  <span style={{ fontStyle: 'italic' }}>
                    50 Projects in 50 Days (HTML, CSS & JavaScript) in React{' '}
                  </span>{' '}
                  by Brad Traversy and Florin Pop. All project concepts are taken from the course
                  authors. All React coding is my own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
