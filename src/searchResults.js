import React from 'react';
import Book from './book';

const SearchResults = props => {
  const { myBooks, searchBooks, onUpdateShelf} = props;

  // to render both books with the actual shelf state
  const updatedBooks = searchBooks.map(book => {
        myBooks.map(mybook => {
            if(mybook.id === book.id){
                book.shelf = mybook.shelf
            }
            return mybook;
        })
        return book;
    })
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            bookshelf={book.shelf ? book.shelf : 'none'}
            onUpdateShelf={onUpdateShelf}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
