import React, {Component} from 'react';
import Book from './Books';




class BooksItem extends Component {
    render() {
        console.log("my Guids from bookItemsJs", this.props);
        return (
            <li className="BooksItem">
                {/* {bookItems} */}
                My BooksItem
            </li>
        );
    }
}

export default BooksItem;
