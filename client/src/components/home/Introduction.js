import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className='introduction'>
      <h6 className='animate-intro animate-intro-1'>Hello, I'm...</h6>
      <h1 className='animate-intro animate-intro-2'>kori brus</h1>
      <h2 className='animate-intro animate-intro-3'>Web Development | Communications</h2>
      <div className='intro-content'>
        <p className='animate-intro animate-intro-4'>
          I'm an aspiring full stack web developer with a background in marketing and
          communications. Check out my{' '}
          <Link to='/resume' className='body-link'>
            resume
          </Link>{' '}
          for a full list of my projects, coursework, and experience.
        </p>
        <p className='animate-intro animate-intro-4'>
          This site is a showcase for my growing portfolio — a React application with a backend
          Express server in Node.js. See the code on{' '}
          <a
            href='https://github.com/koribrus/koribrus.io'
            rel='noreferrer'
            target='_blank'
            className='body-link'
          >
            GitHub
          </a>
          .
        </p>
        <p className='animate-intro animate-intro-4'>Major technologies I've focused on are...</p>
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
