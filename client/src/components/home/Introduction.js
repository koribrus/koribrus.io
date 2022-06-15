import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className='introduction'>
      <h4 className='animate-intro animate-intro-1'>Welcome! I'm...</h4>
      <h1 className='animate-intro animate-intro-2'>kori brus</h1>
      <h2 className='animate-intro animate-intro-3'>Web Development | Communications</h2>
      <div className='intro-content'>
        <p className='animate-intro animate-intro-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Ultrices in
          iaculis nunc sed augue lacus viverra vitae congue. Enim neque volutpat ac tincidunt vitae
          semper quis lectus nulla. Feugiat sed lectus vestibulum mattis.
        </p>
        <div className='bullet-columns animate-intro animate-intro-5'>
          <ul>
            <li>react/redux</li>
            <li>node/express</li>
          </ul>
          <ul>
            <li>javascript</li>
            <li>html/css</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
