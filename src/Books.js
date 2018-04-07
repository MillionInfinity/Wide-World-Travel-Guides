import React, {Component} from 'react';
import BooksItem from './BookItem';

class Books extends Component {
    render() {
       
console.log("my Guids from bookJs",this.props);
        return (
            <div className="Books">
               {/* {bookItems} */}
              My Guides
             </div>
        );
    }
}

export default Books;
