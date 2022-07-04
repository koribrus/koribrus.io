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
        {/* <BookViewerTwo /> */}
        {window.innerWidth > 480 ? (
          <BookViewerTwo width={'533'} height={'800'} />
        ) : (
          <BookViewerTwo width={'384'} height={'575'} />
        )}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default LibraryModal;
