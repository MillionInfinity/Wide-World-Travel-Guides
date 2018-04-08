import React, {Component} from 'react';
import BooksItem from './BookItem';

class Books extends Component{
  render(){
           let guideBooks;
    if(this.props.guides){
         guideBooks=this.props.guides.map(bGuides => {
           return (
             <BooksItem bGuides={bGuides} />
        );
      });
    }
    return (
            <div className="guides">
                  <h3>Latest Projects</h3>
                  { guideBooks}
            </div>
);
}
}
export default Books;

