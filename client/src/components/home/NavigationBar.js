import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = React.memo(() => {
  // * state of viewport display (desktop vs mobile)
  const { desktop } = useSelector((state) => state.display);

  // * handling nav menu click events
  useEffect(() => {
    if (desktop) return;

    const navBtns = document.querySelectorAll('.nav-item');
    const toggler = document.querySelector('.toggler');

    const handleNavClick = (e, btn) => {
      const home = document.querySelector('.app-grid');
      const section = btn.innerText.slice(3);

      home.style.overflow = 'visible';
      home.style.height = 'auto';

      smoothScroll(e, section);

      toggler.checked = false;
    };

    navBtns.forEach((btn) => btn.addEventListener('click', (e) => handleNavClick(e, btn)));

    return () =>
      navBtns.forEach((btn) => btn.removeEventListener('click', (e) => handleNavClick(e, btn)));
  });

  // * handling nav menu toggler
  useEffect(() => {
    if (desktop) return;

    const toggler = document.querySelector('.toggler');

    const handleToggler = () => {
      const home = document.querySelector('.app-grid');

      if (toggler.checked) {
        home.style.overflow = 'hidden';
        home.style.height = '100vh';
      }
      if (!toggler.checked) {
        home.style.overflow = 'visible';
        home.style.height = 'auto';
      }
    };

    toggler.addEventListener('click', handleToggler);

    return () => toggler.removeEventListener('click', handleToggler);
  });

  // * smooth scrolling to page sections
  const smoothScroll = (e, section) => {
    window.history.replaceState(null, '', `/${section}`);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    e.preventDefault();
  };

  // * conditional rendering for desktop vs mobile
  const renderNavigation = () => {
    if (desktop) {
      return (
        <div className='navbar'>
          <div></div>
          <ul className='nav-menu'>
            <li
              className='nav-item animate-nav animate-nav-1'
              onClick={(e) => smoothScroll(e, 'about')}
            >
              <a className='nav-link' href='/'>
                <span className='nav-bullet'>{'>>'}</span>
                <span className='paranthesis'>(</span>
                about
                <span className='paranthesis paranthesis-r'>)</span>
              </a>
            </li>
            <li
              className='nav-item animate-nav animate-nav-2'
              onClick={(e) => smoothScroll(e, 'projects')}
            >
              <a className='nav-link' href='/'>
                <span className='nav-bullet'>{'>>'}</span>
                <span className='paranthesis'>(</span>
                <span className='nav-name'>projects</span>
                <span className='paranthesis paranthesis-r'>)</span>
              </a>
            </li>
            <li
              className='nav-item animate-nav animate-nav-3'
              onClick={(e) => smoothScroll(e, 'contact')}
            >
              <a className='nav-link' href='/'>
                <span className='nav-bullet'>{'>>'}</span>
                <span className='paranthesis'>(</span>
                contact
                <span className='paranthesis paranthesis-r'>)</span>
              </a>
            </li>
            <li className='nav-item animate-nav animate-nav-4 btn'>
              <Link className='nav-btn' to='/resume'>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className='mobile-navbar'>
          <img src='/img/kb-logo-v1.png' alt='KB logo' />
          <input type='checkbox' className='toggler' />
          <div className='hamburger'>
            <div></div>
          </div>
          <div className='mobile-nav--menu'>
            <div>
              <div>
                <ul>
                  <li className='nav-item animate-nav animate-nav-1'>
                    <div className='nav-link'>
                      <span className='nav-bullet'>{'>> '}</span>
                      about
                    </div>
                  </li>
                  <li className='nav-item animate-nav animate-nav-2'>
                    <div className='nav-link'>
                      <span className='nav-bullet'>{'>> '}</span>

                      <span className='nav-name'>projects</span>
                    </div>
                  </li>
                  <li className='nav-item animate-nav animate-nav-3'>
                    <div className='nav-link'>
                      <span className='nav-bullet'>{'>> '}</span>
                      contact
                    </div>
                  </li>
                  <li className='animate-nav animate-nav-4 btn'>
                    <a href={'/files/koribrus-resume.pdf'} className='nav-btn' download>
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <React.Fragment>{renderNavigation()}</React.Fragment>;
});

export default NavigationBar;
