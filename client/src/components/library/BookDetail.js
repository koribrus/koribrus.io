import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/modals';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { BiBookReader } from 'react-icons/bi';
import './BookDetail.css';

const BookDetail = ({ book }) => {
  const { showModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!book) return '';
  console.log(showModal);

  // console.log(book);
  return (
    <div className='book-details'>
      <div className='book-info'>
        <div className='book-title'>
          <h2>{`${book.volumeInfo.title} (${book.volumeInfo.publishedDate.slice(0, 4)})`}</h2>
        </div>
        <p>{book.volumeInfo.description}</p>
      </div>
      <div className='book-btns'>
        <button
          className='btn-book'
          book={book}
          onClick={() => {
            dispatch(openModal());
          }}
        >
          <BiBookReader />
        </button>
        <button className='btn-book' onClick={() => window.open(book.volumeInfo.infoLink)}>
          <IoLogoGooglePlaystore />
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
