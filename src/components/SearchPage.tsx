import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../interfaces/IBook';
import { search } from '../BookAPI';
import Books from './Books';
import Shelf from '../interfaces/Shelf';

const SearchPage: React.FC<{
  handleShelfChange: (book: IBook, shelf: Shelf) => void;
}> = ({
  handleShelfChange,
}) => {
    const [searchedBooks, setSearchedBooks] = useState<IBook[]>([]);
    const [isBookNotExist, setIsNotBookExist] = useState(false);
    const timer = useRef<NodeJS.Timeout | null>(null);

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      const query = e.target.value.trim();

      if (query.length === 0) {
        setSearchedBooks([]);
        setIsNotBookExist(false);
        return;
      }

      timer.current = setTimeout(() => {
        setIsNotBookExist(false);
        setSearchedBooks([]);

        search(query, '20').then(books => {
          if (books && books.length > 0) {
            setSearchedBooks([...books]);
          }
          else {
            setIsNotBookExist(true);
          }
        });
      }, 500);
    };

    /**
     * Update the searchedBooks array as well as update the books in the main page
     * @param book Book to be updated
     * @param shelf Shelf used for updating the book
     */
    const handleSearchShelfChange = (book: IBook, shelf: Shelf): void => {
      if (book && shelf !== Shelf.none) {
        setSearchedBooks(prev => prev.map(b => ({ ...b, shelf: b.id === book.id ? shelf : b.shelf })));

        handleShelfChange(book, shelf);
      }
    };

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title, author, or ISBN'
              onChange={handleSearchInput}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {
              searchedBooks && searchedBooks.length > 0 ? (
                <Books books={searchedBooks} handleShelfChange={handleSearchShelfChange} shelf={Shelf.none} />
              ) : (
                <div className='no-books-found'>
                  <h3>
                    {isBookNotExist ? 'No books found' : 'Please enter a search term'}
                  </h3>
                </div>
              )
            }
          </ol>
        </div>
      </div>
    );
  };

export default SearchPage;