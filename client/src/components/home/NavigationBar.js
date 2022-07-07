import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuOpen } from '../../redux/display';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = React.memo(() => {
  // * defined hooks
  // const toggler = useRef();
  const dispatch = useDispatch();

  // * state of viewport display (desktop vs mobile)
  const { desktop } = useSelector((state) => state.display);

  // const home = document.querySelector('.app-grid');

  useEffect(() => {
    if (desktop) return;

    const navBtns = document.querySelectorAll('.nav-item');
    const toggler = document.querySelector('.toggler');

    navBtns.forEach((btn) =>
      btn.addEventListener('click', (e) => {
        const home = document.querySelector('.app-grid');
        const section = btn.innerText.slice(3);

        home.style.overflow = 'visible';
        home.style.height = 'auto';

        smoothScroll(e, section);

        toggler.checked = false;
      })
    );
  });

  useEffect(() => {
    if (desktop) return;

    const toggler = document.querySelector('.toggler');

    toggler.addEventListener('click', (e) => {
      const home = document.querySelector('.app-grid');

      if (toggler.checked) {
        home.style.overflow = 'hidden';
        home.style.height = '100vh';
      }
      if (!toggler.checked) {
        home.style.overflow = 'visible';
        home.style.height = 'auto';
      }
    });
  });

  const smoothScroll = (e, section) => {
    window.history.replaceState(null, '', `/${section}`);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    e.preventDefault();
  };

  // const toggleToggler = (section) => {
  //   setSection(section);
  //   console.log(toggler.current);
  //   toggler.current.checked = false;
  //   dispatch(setMenuOpen());
  //   setTimeout(() => {
  //     smoothScroll(section);
  //     // smoothScroll('about');
  //     // console.log(toggler.current);
  //     // toggler.current.checked = false;
  //     // dispatch(setMenuOpen());
  //   }, 5000);
  // };

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
          <input
            type='checkbox'
            className='toggler'
            // ref={toggler}
            // onClick={() => {
            //   dispatch(setMenuOpen());
            // }}
          />
          <div className='hamburger'>
            <div></div>
          </div>
          <div className='mobile-nav--menu'>
            <div>
              <div>
                <ul>
                  <li
                    className='nav-item animate-nav animate-nav-1'
                    // onClick={(e) => smoothScroll(e, 'about')}
                  >
                    <div className='nav-link'>
                      <span className='nav-bullet'>{'>> '}</span>
                      about
                    </div>
                  </li>
                  <li
                    className='nav-item animate-nav animate-nav-2'
                    onClick={(e) => {
                      smoothScroll(e, 'projects');
                      console.log(document.querySelector('.toggler'));
                    }}
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
