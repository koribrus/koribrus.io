import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAbout } from '../../redux/visibility';
import Header from './Header';
import Skills from './Skills';
import './About.css';
import profileImg from './../../img/kori-brus-profile.jpg';

const About = () => {
  // const [elVisible, setElVisible] = useState(null);

  // * redux store test
  const { aboutVisible } = useSelector((state) => state.visibility);
  const aboutRef = useRef();
  const dispatch = useDispatch();

  console.log(aboutVisible);

  useEffect(() => {
    const revealSection = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      // setElVisible(entry.isIntersecting);

      dispatch(setAbout(entry.isIntersecting));

      observer.unobserve(aboutRef.current);
    };

    const observer = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    observer.observe(aboutRef.current);
  }, []);

  return (
    <div ref={aboutRef} className={aboutVisible ? 'about' : 'about about--hidden'}>
      {/* <div ref={aboutRef} className='about about--hidden'> */}
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
      <Skills />
    </div>
  );
};

export default About;
