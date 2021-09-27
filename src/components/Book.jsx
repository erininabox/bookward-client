import axios from 'axios';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class Book extends Component {
    state = {
        title: '',
        author: '',
        yearPub: '',
        description: '',
        quantity: ''
    }

    componentDidMount() {
        axios.get("http://localhost:4000/books").then((data) => {
            this.setState({ bookData: data.data })
        })
    }

    handleDelete = e => {
        e.preventDefault()
        this.props.deleteBook(this.props.bookObj._id)
    }

    render() {
        return (
            <div className="book">
                <div className="booklead">
                    <h3><Link to={`/books/${this.props.bookObj._id}`}>{this.props.bookObj.title}</Link></h3>
                    <div>by {this.props.bookObj.author}</div>
                    <div>Quantity: {this.props.bookObj.quantity}</div>
                    <div>Published: {this.props.bookObj.yearPub}</div>
                <button className="delete-btn" onClick={this.handleDelete}>Delete</button>
                </div>
                <div className="description">{this.props.bookObj.description}</div>

            </div>
        )}
}

export default Book;