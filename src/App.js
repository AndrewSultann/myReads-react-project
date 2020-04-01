import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import BookList from './bookList'
import BookSearch from './bookSearch'
import {debounce} from 'throttle-debounce'


class BooksApp extends React.Component {
  state={
    myBooks: [],
    searchBooks: [],
    error: false
  }

  componentDidMount(){
      BooksAPI.getAll()
          .then(data => {
            this.setState({
              myBooks: data
            })
          })
  }
  //needs modifying
  updateShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf)
      // I Changed it in the database but I still need to change it in the browswer
    
      let updatedBooks =[];
        // Removing it from books array and then adding it again when rerende
      updatedBooks = this.state.myBooks.filter(book => book.id !== updatedBook.id);
      if ( shelf !== 'none'){
        updatedBook.shelf = shelf;
        updatedBooks = updatedBooks.concat(updatedBook);
      }
      this.setState((currentState) => ({
        myBooks: updatedBooks,
      }))
  }
  //  I tried to make it search for two words using .match & .includes but I failed, please write how can I do it
  searchBooks = debounce(300, false, query => {
    console.log(query);
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        console.log(books);
        if (books.error) {
          console.log(books.error)
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });
  
  // to reset the search results when going back to main screen
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    console.log(this.state.myBooks)
    // create a bookshelves array to pass it as an argument
    const bookshelves = [
      { key: 'currentlyReading', name: 'Currently Reading' },
      { key: 'wantToRead', name: 'Want to Read' },
      { key: 'read', name: 'Read' },
    ];

    return (
      <div className="app">
            <Route exact path="/" render={() => (
              <BookList bookshelves={bookshelves} myBooks={this.state.myBooks} onUpdateShelf={this.updateShelf}/>
            )} />
            <Route path="/search" render={() => (
              <BookSearch
              searchBooks={this.state.searchBooks}
              myBooks={this.state.myBooks}
              onUpdateShelf={this.updateShelf}
              onResetSearch={this.resetSearch}
              onSearchBooks={this.searchBooks}
            />
            )}
            />
      </div>
    )
  }
}

export default BooksApp;
