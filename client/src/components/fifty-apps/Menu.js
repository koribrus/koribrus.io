import React, { useState, useRef } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Menu = (props) => {
  // * state controls open/close of dropdown
  const [open, setOpen] = useState(false);

  // * useRef to manually set div height for css transition
  const dropdownRef = useRef();

  if (dropdownRef.current) console.log(dropdownRef.current.scrollHeight);

  return (
    <div className='apps-menu'>
      <div className='apps-menu-cntrl'>
        <div className='apps-menu-line'></div>
        <h4>select app</h4>
        <IoMdArrowDropdown onClick={() => setOpen(!open)} />
      </div>
      <div
        className='dropdown-container'
        ref={dropdownRef}
        style={open ? { height: dropdownRef.current.scrollHeight + 'px' } : { height: '0px' }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Menu;
