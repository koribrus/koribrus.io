import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className='introduction'>
      <h6 className='animate-intro animate-intro-1'>Hello, I'm...</h6>
      <h1 className='animate-intro animate-intro-2'>kori brus</h1>
      <h2 className='animate-intro animate-intro-3'>Web Development | Communications</h2>
      <div className='intro-content'>
        <p className='animate-intro animate-intro-4'>
          Welcome to my portfolio! This site is a React application with a backend Express server in
          Node.js. Check out the code on my{' '}
          <a
            href='https://github.com/koribrus/koribrus.io'
            rel='noreferrer'
            target='_blank'
            className='body-link'
          >
            GitHub
          </a>{' '}
          page.
        </p>
        <p className='animate-intro animate-intro-4'>
          I've quickly come to love the challenges and opportunities of web programming. I'm excited
          to continue exploring JavaScript at greater depth and expand my understanding into new
          languages.
        </p>
        <p className='animate-intro animate-intro-4'>My focus has been on...</p>
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
