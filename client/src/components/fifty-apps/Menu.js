import React, { useState, useRef } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Menu = (props) => {
  // ! move open/close dropdown state from Menu to redux. Once there, set conditional box shadow on .apps-dropdown to ensure shadow isn't visible on 'close' state.
  // * state controls open/close of dropdown
  const [open, setOpen] = useState(false);

  // * useRef to manually set div height for css transition
  const dropdownRef = useRef();

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
