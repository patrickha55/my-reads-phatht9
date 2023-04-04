import React from 'react';
import { IBook } from '../interfaces/IBook';
import Book from './Book';
import Shelf from '../interfaces/Shelf';
import { useLocation } from 'react-router-dom';

const Books: React.FC<{
  books: IBook[];
  handleShelfChange: (book: IBook, shelf: Shelf) => void;
  shelf: Shelf;
}> = ({
  books,
  handleShelfChange,
  shelf
}) => {
    const location = useLocation();

    let result = <div>There is no book in this shelf :(</div>;

    const filteredBooks = shelf !== Shelf.none ? books.filter(book => book.shelf === shelf) : books;

    if (filteredBooks && filteredBooks.length > 0) {
      result = (
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {
              filteredBooks.map((book) => {
                const isInTheSearchPage = location.pathname.includes('/search');
                const isBookInShelf = book.shelf !== 'none' as Shelf;
                return (
                  <li key={book.id}>
                    <Book bookInShelf={isInTheSearchPage && isBookInShelf} book={book} handleShelfChange={handleShelfChange} />
                  </li>);
              }
              )
            }
          </ol>
        </div>
      );
    }

    return result;
  };

export default Books;