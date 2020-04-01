import React  from 'react';
import Bookshelf from './bookshelf'

// props**
const Bookshelves = (props) => {
    const {bookshelves , myBooks, onUpdateShelf} = props
    return (
        <div>
            {bookshelves.map(bookshelf => (
                <Bookshelf key={bookshelf.key} bookshelf={bookshelf} myBooks={myBooks} onUpdateShelf={onUpdateShelf} />
            ))}
            
        </div>
    )
}

export default Bookshelves




        