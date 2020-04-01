import React, {Component} from 'react';

class BookshelfChanger extends Component {
    state={
        // Why I need to set it to this value ?
        value: this.props.bookshelf
    }

    handleChange = (event) => {
        const { value } = event.target;

        // I don't know why State Doesn't change, also when I comment it, the code still work!!
        this.setState({ value });

        if(this.props.onUpdateShelf){
            this.props.onUpdateShelf(this.props.book, value)
        }
        
    } 
    
    render(){
        return (
            <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger;

// I have some Questions in the comments please answer them, thanks.