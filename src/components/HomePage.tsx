import React from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../interfaces/IBook';
import Books from './Books';
import Shelf from '../interfaces/Shelf';

const HomePage: React.FC<{
  books: IBook[];
  handleShelfChange: (book: IBook, shelf: Shelf) => void;
}> = ({
  books,
  handleShelfChange
}) => {
    let result = <div>Something went wrong! Please visit again later. Thank you!</div>;

    if (books) {
      result = (
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <div>
              {
                Object.entries(Shelf).map((kvp, index) => {
                  const [key, value] = kvp;

                  if (key !== Shelf.none) {
                    return (
                      <div key={index} className='bookshelf'>
                        <h2 className='bookshelf-title'>{value}</h2>
                        <Books books={books} handleShelfChange={handleShelfChange} shelf={key as Shelf} />
                      </div>
                    );
                  }
                })
              }
            </div>
          </div>
          <div className='open-search'>
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      );
    }

    return result;
  };

export default HomePage;