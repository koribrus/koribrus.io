import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { setContact } from '../../redux/visibility';
import useObserver from '../../hooks/useObserver';
import Header from './Header';
import './Contact.css';

const Contact = () => {
  // * redux & ref
  const { contactVisible } = useSelector((state) => state.visibility);
  const contactRef = useRef();

  // * custom hook
  useObserver(contactRef, setContact);

  return (
    <div ref={contactRef} className={contactVisible ? 'contact' : 'contact contact--hidden'}>
      <Header id='contact' heading='contact' />
      <div className='contact-content'>
        <div className='contact-left'>
          <div className='contact-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis.
              Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Enim neque volutpat ac
              tincidunt vitae semper quis lectus nulla. Feugiat sed lectus vestibulum mattis.
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
