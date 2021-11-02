import React, {Component}  from "react";
import './App.css'
import BookViewer from "./BookViewer/BookViewer";
import TitleBar from "./TitleBar/TitleBar";


class App extends Component {
    constructor(props) {
        super(props);
        this.books= [
            {title: "A Brief History of Time", author: "Stephen Hawking"},
            {title: "The Unreasonable Virtue of Fly Fishing", author: "Mark Kurlansky"},
            {title: "Fire and Blood", author: "George R. R. Martin"},
        ];
        this.state = {
            bookNumber: 2   
        };
    }

    goToNextBook = () =>{
        
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber ++
        if(tempBookNumber === this.books.length){
            tempBookNumber=0
        }
        this.state.bookNumber= tempBookNumber;

        this.setState({
            bookNumber: tempBookNumber
        });
        
    }

    goToPreviousBook = () =>{
        
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber --
        if(tempBookNumber < 0){
            tempBookNumber= this.books.length -1
        }
        this.state.bookNumber= tempBookNumber;

        this.setState({
            bookNumber: tempBookNumber
        });
        
    }

    render(){
        return(
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book= {this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook} /> 
            </div>
            
        )
            
        
    }
}

export default App;


