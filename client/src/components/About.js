import React from 'react';
import './About.css';
import profileImg from './../img/kori-brus-profile.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='about-header'>
        <h3>about</h3>
        <div className='line'></div>
      </div>
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
        <div>
          <img src={profileImg} alt='profile pic' className='profile-img' />
        </div>
      </div>
      <div className='about-graph'>
        <div className='graph-section'>
          <h5>HTML/CSS</h5>
          <div className='graph-line'></div>
        </div>
        <div className='graph-section'>
          <h5>JavaScript</h5>
          <div className='graph-line'></div>
        </div>
        <div className='graph-section'>
          <h5>React</h5>
          <div className='graph-line'></div>
        </div>
        <div className='graph-section'>
          <h5>Redux</h5>
          <div className='graph-line'></div>
        </div>
        <div className='graph-section'>
          <h5>Node.js</h5>
          <div className='graph-line'></div>
        </div>
      </div>
    </div>
  );
};

export default About;
