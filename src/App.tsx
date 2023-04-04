import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { IBook } from './interfaces/IBook';
import { getAll, update } from './BookAPI';
import HomePage from './components/HomePage';
import Shelf from './interfaces/Shelf';
import SearchPage from './components/SearchPage';

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [fetchBooks, setFetchBooks] = useState<boolean>(false);

  useEffect(() => {
    getAll().then(books => setBooks([...books]));
  }, []);

  useEffect(() => {
    if (fetchBooks)
      getAll().then(books => setBooks([...books]));

    setFetchBooks(false);
  }, [fetchBooks]);

  /**
   * Manage the shelf type of a book.
   * If the book is not in the main page, fetch the book again.
   * Otherwise, just update the state.
   * @param book Book object
   * @param shelf Type of shelf
   */
  const handleShelfChange = async (book: IBook, shelf: Shelf): Promise<void> => {
    if (shelf && book) {
      try {
        const result = await update(book, shelf);

        if (result) {
          const isExists: IBook | undefined = books.find(b => b.id === book.id);

          if (isExists) {
            setBooks(prev => prev.map(
              b => ({
                ...b,
                shelf: b.id === book.id ? shelf : b.shelf
              })
            ));
          } else {
            setFetchBooks(true);
          }
        }

        console.log('Handle shelf change status: ', result);
      } catch (error) {
        console.log('Handle shelf change error: ', error);
      }
    }
  };

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage books={books} handleShelfChange={handleShelfChange} />} />
        <Route path='/search' element={<SearchPage booksInShelf={books} handleShelfChange={handleShelfChange} />} />
        <Route path='*' element={<div>404 - Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
