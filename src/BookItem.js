import React, {Component} from 'react';
import Books from './Books';




class BooksItem extends Component {
    render(){
    console.log("hi",this.props.bGuides);
    return (
       <div className="guides">
        {/* <h2>(this.props.bGuides)</h2> */}
        {/* <h4 className="guide-title">{this.props.bGuides.title}</h4>
        <h5 className="guide-price">{this.props.bGuides.price}</h5> */}
        </div>
    );
}
}
// BooksItem();




export default BooksItem;



