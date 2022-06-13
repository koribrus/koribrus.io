import React from 'react';
import Header from './Header';
import Skills from './Skills';
import './About.css';
import profileImg from './../../img/kori-brus-profile.jpg';

const About = () => {
  return (
    <div className='about'>
      <Header heading='about' />
      {/* <div className='about-header'>
        <h3>about</h3>
        <div className='line'></div>
      </div> */}
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
      <Skills />
    </div>
  );
};

export default About;
