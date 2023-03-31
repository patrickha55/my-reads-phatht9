import React, { useEffect, useState } from 'react';
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
    const [searchInput, setSearchInput] = useState('');
    const [searchedBooks, setSearchedBooks] = useState<IBook[]>([]);

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(prev => e.target.value.trim());
    };

    useEffect(() => {
      if (searchInput.length > 0) {
        search(searchInput, '10').then(books => {
          if (books && books.length > 0) {
            setSearchedBooks([...books]);
          }
        });
      }
      else {
        setSearchedBooks([]);
      }
    }, [searchInput]);

    const handleSearchShelfChange = (book: IBook, shelf: Shelf) => {
      setSearchedBooks(prev => prev.map(b => ({ ...b, shelf: b.id === book.id ? shelf : b.shelf })));
      handleShelfChange(book, shelf);
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
              onChange={(e) => handleSearchInput(e)}
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
                  <h3>It's empty here :(</h3>
                </div>
              )
            }
          </ol>
        </div>
      </div>
    );
  };

export default SearchPage;