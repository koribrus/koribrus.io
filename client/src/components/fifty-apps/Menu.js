import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdArrowDropdown } from 'react-icons/io';
import { open, close } from '../../redux/dropdown';

const Menu = (props) => {
  // * state controls open of dropdown
  const { menuOpen } = useSelector((state) => state.dropdown);
  const dispatch = useDispatch();

  // * useRef to manually set div height & box shadow for css transition
  const dropdownRef = useRef();

  return (
    <div className='apps-menu' onMouseLeave={() => dispatch(close())}>
      <div className='apps-menu-cntrl'>
        <div className='apps-menu-line'></div>
        <h4>select app</h4>
        <IoMdArrowDropdown onMouseOver={() => dispatch(open())} />
      </div>
      <div
        className='dropdown-container'
        ref={dropdownRef}
        style={
          menuOpen
            ? {
                height: dropdownRef.current.scrollHeight + 'px',
                boxShadow: '1px 1px 5px 0.5px #3d3d3dff',
              }
            : { height: '0px' }
        }
      >
        {props.children}
      </div>
    </div>
  );
};

export default Menu;
