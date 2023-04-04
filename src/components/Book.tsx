import { IBook } from '../interfaces/IBook';
import React from 'react';
import Shelf from '../interfaces/Shelf';
import '../images/default.png';
import { Link } from 'react-router-dom';

const Book: React.FC<{
  book: IBook;
  bookInShelf: boolean;
  handleShelfChange: Function;
}> = ({ book, handleShelfChange, bookInShelf }): JSX.Element => {
  return (
    <div className='book'>
      <div className='book-top'>
        <Link className='no-style-link' to={`/books/${book.id}`}>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${book.imageLinks?.thumbnail ? book.imageLinks.thumbnail : `default.png`}})`,
            }}
          ></div>
        </Link>
        <div className='book-shelf-changer'>
          <select defaultValue={book.shelf != Shelf.none ? book.shelf : 'default'} onChange={(e) => handleShelfChange(book, e.target.value)}>
            <option value='default' disabled>
              Move to...
            </option>
            {
              Object.entries(Shelf).map((kvp, index) => {
                const [key, value] = kvp;

                return <option key={index} value={key}>
                  {value}
                </option>;
              })
            }
          </select>
        </div>
      </div>
      <div className='book-title'>
        <Link className='no-style-link' to={`/books/${book.id}`}>{book.title}</Link>
      </div>
      <div className='book-authors'>
        {
          book.authors?.map((a, index) =>
            <span key={index}>{index === 0 ? a : ` & ${a}`}</span>
          )
        }
      </div>
      {
        bookInShelf === true && <span className='book-status'>Currently in your shelf</span>
      }
    </div >
  );
};

export default Book;