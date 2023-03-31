import React from 'react';
import { IBook } from '../interfaces/IBook';
import Book from './Book';
import Shelf from '../interfaces/Shelf';

const Books: React.FC<{
  books: IBook[];
  handleShelfChange: (book: IBook, shelf: Shelf) => void;
  shelf: Shelf;
}> = ({
  books,
  handleShelfChange,
  shelf
}) => {
    let result = <div>There is no book in this shelf :(</div>;

    const filteredBooks = shelf !== Shelf.none ? books.filter(book => book.shelf === shelf) : books;

    if (filteredBooks && filteredBooks.length > 0) {
      result = (
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {
              filteredBooks.map((book) => (
                <li key={book.id}>
                  <Book book={book} handleShelfChange={handleShelfChange} />
                </li>))
            }
          </ol>
        </div>
      );
    }

    return result;
  };

export default Books;