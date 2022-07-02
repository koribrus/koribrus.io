import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuOpen } from '../../redux/display';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const dispatch = useDispatch();
  // * state of viewport display (desktop vs mobile)
  const { desktop } = useSelector((state) => state.display);

  const smoothScroll = (e, section) => {
    e.preventDefault();
    window.history.replaceState(null, '', `/${section}`);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

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
          <input type='checkbox' className='toggler' onClick={() => dispatch(setMenuOpen())} />
          <div className='hamburger'>
            <div></div>
          </div>
          <div className='mobile-nav--menu'>
            <div>
              <div>
                <ul>
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
                    <a href={'/files/koribrus-resume.pdf'} className='nav-btn'>
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
};

export default NavigationBar;
