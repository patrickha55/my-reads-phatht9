import { IBook } from '../interfaces/IBook';
import React from 'react';
import Shelf from '../interfaces/Shelf';

const Book: React.FC<{
  book: IBook;
  handleShelfChange: Function;
}> = ({ book, handleShelfChange }): JSX.Element => {

  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url(${book.imageLinks.thumbnail}})`,
          }}
        ></div>
        <div className='book-shelf-changer'>
          <select defaultValue={book.shelf} onChange={(e) => handleShelfChange(book, e.target.value)}>
            <option value={Shelf.none} disabled>
              Move to...
            </option>
            {
              Object.keys(Shelf).map((s, index) => {
                if (s !== Shelf.none) {
                  return <option key={index} value={s}>
                    {s}
                  </option>;
                }
              })
            }
          </select>
        </div>
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>
        {
          book.authors.map((a, index) =>
            <span key={index}>{index === 0 ? a : ` & ${a}`}</span>
          )
        }
      </div>
    </div >
  );
};

export default Book;