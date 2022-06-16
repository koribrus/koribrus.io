import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { setAbout } from '../../redux/visibility';
import useObserver from '../../hooks/useObserver';
import Header from './Header';
import './About.css';
import profileImg from './../../img/kori-brus-profile.jpg';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis.
            Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Enim neque volutpat ac
            tincidunt vitae semper quis lectus nulla. Feugiat sed lectus vestibulum mattis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis.
            Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Enim neque volutpat ac
            tincidunt vitae semper quis lectus nulla. Feugiat sed lectus vestibulum mattis.
          </p>
        </div>
        <div className='img-container'>
          <div className='profile-img-bg'>
            <img src={profileImg} alt='profile pic' className='profile-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
