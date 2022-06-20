import React, { useState, useEffect } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.history.replaceState(null, '', `/`);
  };

  return (
    <div>
      {showBtn && <HiOutlineChevronDoubleUp className='scroll-btn' onClick={scrollToTop} />}
    </div>
  );
};

export default ScrollToTop;
