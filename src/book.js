import React from 'react';
import BookshelfChanger from './bookshelfChanger';

const Book = (props) => { 
    const {book, bookshelf, onUpdateShelf} = props
    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193,
                    backgroundImage: `url(${
                      book.imageLinks
                      ? book.imageLinks.thumbnail
                      : 'icons/book-placeholder.svg'
                    })` 
                }}></div>
                <BookshelfChanger book={book} bookshelf={bookshelf} onUpdateShelf={onUpdateShelf}  />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {/* Conditional Rendering */}
                    {book.authors ? book.authors.join(', ') : 'Unknown Author'}
                </div>
            </div>
        </li>
    )
}

export default Book;