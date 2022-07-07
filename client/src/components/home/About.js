import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
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
            For the past 20 months I've taught myself web programming through courses at Udemy and
            Codecademy and online tutorials.
          </p>
          <p>
            I've quickly come to love the challenges and opportunities of web programming. I'm
            excited to continue exploring JavaScript at greater depth and expand my understanding
            into new languages.
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
