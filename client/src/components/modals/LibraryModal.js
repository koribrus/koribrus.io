import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modals';
import BookViewerTwo from '../library/BookViewerTwo';
import './LibraryModal.css';

const LibraryModal = ({ visible }) => {
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div className='modal' onClick={() => dispatch(closeModal())}>
      <div className='modal-container'>
        <BookViewerTwo />
        {/* <div className='modal-box'>
          <h1 className='modal-title'>Library Modal</h1>
        </div> */}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default LibraryModal;
