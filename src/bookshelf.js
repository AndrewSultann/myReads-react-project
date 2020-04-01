import React from 'react';
import Book from './book'

const Bookshelf = (props) => {
    const {bookshelf, myBooks, onUpdateShelf} = props
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelf.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {myBooks.filter(book => book.shelf === bookshelf.key).map(book => (
                    <Book key={book.id} book={book} bookshelf={bookshelf} onUpdateShelf={onUpdateShelf} />
                ))}            
            </ol>
          </div>
        </div>
    )
}

export default Bookshelf;