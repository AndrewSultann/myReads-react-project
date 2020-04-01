import React, {Component} from 'react';
import SearchInput from './searchInput'
import SearchResults from './searchResults'


class BookSearch extends Component {
    render(){

      const {onSearchBooks, searchBooks, myBooks, onUpdateShelf, onResetSearch} = this.props
        return(
            <div className="search-books">
              <SearchInput onSearchBooks={onSearchBooks} onResetSearch={onResetSearch} />
              <SearchResults myBooks={myBooks} searchBooks={searchBooks} onUpdateShelf={onUpdateShelf}/>
            </div>
        )
    }
}

export default BookSearch;