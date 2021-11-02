import React from "react";
import './Book.css'


const Book = (props) => {
    return ( 
        <div className='book'>
            <div className="cover">
                <h1 className= "title">{props.book.title}</h1> 
                <h1 className= "author">{props.book.author}</h1>  
            </div>

        </div>
     );
}
 
export default Book;