import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAbout } from '../../redux/visibility';
import useObserver from '../../hooks/useObserver';
import Header from './Header';
import './About.css';

const About = () => {
  // * redux & ref
  const { aboutVisible } = useSelector((state) => state.visibility);
  const aboutRef = useRef();

  // * custom hook
  useObserver(aboutRef, setAbout);

  return (
    <div ref={aboutRef} className={aboutVisible ? 'about' : 'about about--hidden'}>
      <Header id='about' heading='about' />
      <div className='about-content'>
        <div className='profile-text'>
          <p>
            I'm an aspiring full stack web developer with a background in marketing and
            communications. For the past 20 months I've taught myself web programming through online
            courses and tutorials. For a full listing of my coursework, see my{' '}
            <Link to='/resume' className='body-link'>
              resume
            </Link>
            .
          </p>
          <p>
            While my goal has been a career, I've discovered a love of the discipline and the
            unending learning opportunities to be had.I have a talent for making complex ideas clear
            and bring that approach to my web projects.
          </p>
          <p>
            Outside of work, I'm a passionate photographer in film and digital, a voracious reader,
            and I play guitar. I've also traveled extensively.
          </p>
        </div>
        <div className='img-container'>
          <div className='profile-img-bg'>
            <img src='/img/kori-brus-profile.jpg' alt='profile pic' className='profile-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
