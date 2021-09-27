import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import BooksModel from '../models/BooksModel';

class BookSetCreatePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            author: '',
            yearPub: '',
            description: '',
            quantity: 0,
            isRedirectClicked: false
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            isRedirectClicked: false
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        let bookObj = {
            title: this.state.title,
            author: this.state.author,
            yearPub: this.state.yearPub,
            description: this.state.description,
            quantity: this.state.quantity
        }
        console.log(bookObj)

        BooksModel.addBookSet(bookObj)

        this.setState({
            ...bookObj,
            isRedirectClicked: true
        })
        }

    render() {
        if (!this.state.isRedirectClicked) {
            return(
                <div>
                    <form onSubmit={ this.onFormSubmit }>
                        <p>Title:</p>
                        <p><input type="text" name='title' onChange={this.onInputChange} value={this.state.title}></input></p>
                        <p>Author:</p>
                        <p><input type="text" name='author' onChange={this.onInputChange} value={this.state.author}></input></p>
                        <p>Year Published:</p>
                        <p><input type="text" name='yearPub' onChange={this.onInputChange} value={this.state.yearPub}></input></p>
                        <p>Description:</p>
                        <p><input type="text" name='description' onChange={this.onInputChange} value={this.state.description}></input></p>
                        <p>Quantity:</p>
                        <p><input type="number" name='quantity' onChange={this.onInputChange} value={this.state.quantity}></input></p>
                        <p><button type="submit">Submit</button></p>
                    </form>
                </div>
            )
        } else {
            return(
                <Redirect to="/books" />
            )
        }
    }
}


export default BookSetCreatePage