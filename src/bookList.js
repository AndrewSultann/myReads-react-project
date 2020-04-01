import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Bookshelves from './bookshelves';



class BookList extends Component {
    render(){
        const {bookshelves, myBooks, onUpdateShelf} = this.props
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelves bookshelves={bookshelves} myBooks={myBooks} onUpdateShelf={onUpdateShelf} />
            </div>
            <div className="open-search">
              <Link to="/search"><button></button></Link>
            </div>
          </div>
        )
    }
}

export default BookList;