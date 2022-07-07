import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { setContact } from '../../redux/visibility';
import useObserver from '../../hooks/useObserver';
import Header from './Header';
import './Contact.css';

const Contact = () => {
  // * state & ref
  const { contactVisible } = useSelector((state) => state.visibility);
  const contactRef = useRef();

  // * useObserver custom hook for reveal on scroll
  useObserver(contactRef, setContact);

  return (
    <div ref={contactRef} className={contactVisible ? 'contact' : 'contact contact--hidden'}>
      <Header id='contact' heading='contact' />
      <div className='contact-content'>
        <div className='contact-left'>
          <div className='contact-text'>
            <p>
              My inbox is open to new inquiries and opportunities. Contact me by email below or find
              me on
              <a
                href='https://www.linkedin.com/in/koribrus'
                rel='noreferrer'
                target='_blank'
                className='body-link'
              >
                {' '}
                LinkedIn
              </a>
              .
            </p>
          </div>
          <div className='contact-btn-container btn'>
            <a className='nav-btn contact-btn' href='mailto:koribrus@pm.me?'>
              email
            </a>
          </div>
        </div>
        <div className='contact-right'>
          <div className='img-container'>
            <div className='contact-img-bg'>
              <img src='img/contact-me.jpg' alt='contact pic' className='contact-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
