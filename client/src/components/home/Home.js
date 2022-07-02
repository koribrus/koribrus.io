import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDesktop } from '../../redux/display';

import Sidebar from './Sidebar';
import NavigationBar from './NavigationBar';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import './Home.css';

const Home = () => {
  const { menuOpen } = useSelector((state) => state.display);
  const dispatch = useDispatch();

  // * set initial screen size state (desktop vs mobile)
  dispatch(setDesktop(window.innerWidth > 480));

  // * test node server
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
      });
  }, []);

  // * change screen size state on window resize (desktop vs mobile)
  const screenSizeRender = () => {
    dispatch(setDesktop(window.innerWidth > 480));
  };

  useEffect(() => {
    window.addEventListener('resize', screenSizeRender);
    return () => window.removeEventListener('resize', screenSizeRender);
  });

  // * toggles class names in the page to stop scroll when mobile nav is open
  const appGridOverflow = () => {
    return menuOpen ? 'app-grid app-grid--mobile-nav-open' : 'app-grid';
  };

  return (
    <div className={appGridOverflow()}>
      <Sidebar />
      <NavigationBar />
      <div className='main-content'>
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Home;
