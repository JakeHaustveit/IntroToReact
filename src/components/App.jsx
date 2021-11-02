import React, {Component}  from "react";
import './App.css'
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
        if(tempBookNumber < this.books.length){
            tempBookNumber=0
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
                <div className= "row">
                <div className= "col-md-4">
                    <button onClick={this.goToPreviousBook}> Previous Book </button>
                </div>
                <div className= "col-md-4">
                    <h1> {this.books[this.state.bookNumber].title}</h1>
                    <h1> {this.books[this.state.bookNumber].author}</h1>             
                </div>
                <div className= "col-md-4">
                    <button onClick={this.goToNextBook}> Next Book </button>
                </div>                    
                </div>
                

            </div>
            
        )
            
        
    }
}

export default App;


