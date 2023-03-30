import React from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../interfaces/IBook';
import Books from './Books';
import Shelf from '../interfaces/Shelf';

const HomePage: React.FC<{
  books: IBook[];
  handleShelfChange: Function;
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
              <div className='bookshelf'>
                <h2 className='bookshelf-title'>Currently Reading</h2>
                <Books books={books} handleShelfChange={handleShelfChange} shelf={Shelf.currentlyReading} />
              </div>
              <div className='bookshelf'>
                <h2 className='bookshelf-title'>Want to Read</h2>
                <Books books={books} handleShelfChange={handleShelfChange} shelf={Shelf.wantToRead} />
              </div>
              <div className='bookshelf'>
                <h2 className='bookshelf-title'>Read</h2>
                <Books books={books} handleShelfChange={handleShelfChange} shelf={Shelf.read} />
              </div>
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