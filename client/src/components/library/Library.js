import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Shelves from './Shelves';
import BookList from './BookList';
import BookDetail from './BookDetail';
import BookViewer from './BookViewer';
import LibraryModal from '../modals/LibraryModal';
import CarouselControls from './CarouselControls';
// import { fetchBooks } from '../redux/books';
import { fetchBooks } from '../../redux/books';
import { setCurrent } from '../../redux/slides';
import './Library.css';

const Library = () => {
  const { selectedBook } = useSelector((state) => state.books);
  const { showModal } = useSelector((state) => state.modal);
  // * carousel control state
  const { books } = useSelector((state) => state.books);
  const { current } = useSelector((state) => state.slides);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(1005));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderModal = () => {
    return showModal ? <LibraryModal /> : '';
  };

  // * carousel button control functions (adjustment variable changes the logic so that the list scrolls and stops on either end given an intial centering orientation for all items)
  const prev = () => {
    const adjustment = Math.floor(books.length / 2);
    // const adjustment = 0;
    console.log(adjustment);
    const index = current > 0 - adjustment ? current - 1 : current;
    dispatch(setCurrent(index));
  };

  const next = () => {
    const adjustment = Math.floor(books.length / 2);
    // const adjustment = 0;
    const index = current < books.length - 1 - adjustment ? current + 1 : current;
    dispatch(setCurrent(index));
  };

  return (
    <div className='library'>
      <Header />
      <div className='app-lib'>
        <div className='container-lib grid-lib'>
          <div className='column-lib column-left-lib'>
            <div className='column-insert'>
              <div className='book-detail'>
                <BookDetail book={selectedBook} />
              </div>
              <div className='book-selection'>
                <div className='booklist-container'>
                  <BookList />
                  {/* <CarouselControls /> */}
                  <CarouselControls prev={prev} next={next} />
                  <div className='overlay-left'></div>
                  <div className='overlay-right'></div>
                </div>
                <Shelves />
              </div>
            </div>
          </div>
          <div className='column book-view'>
            <BookViewer width='384' height='575' />
          </div>
        </div>
      </div>
      {renderModal()}
    </div>
  );
};

export default Library;
