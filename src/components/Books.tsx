import React from 'react';
import { IBook } from '../interfaces/IBook';
import Book from './Book';
import Shelf from '../interfaces/Shelf';

const Books: React.FC<{
  books: IBook[];
  handleShelfChange: Function;
  shelf: Shelf;
}> = ({
  books,
  handleShelfChange,
  shelf
}) => {
    let result = <div>There is no book in this shelf :(</div>;

    const filteredBooks = books.filter(
      (book) => book.shelf === shelf
    );

    if (filteredBooks) {
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