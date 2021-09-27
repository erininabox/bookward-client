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
            <div>
                <h3><Link to={`/books/${this.props.bookObj._id}`}>{this.props.bookObj.title}</Link></h3>
                <p>by {this.props.bookObj.author}</p>
                <p>Quantity: {this.props.bookObj.quantity}</p>
                <p>Published: {this.props.bookObj.yearPub}</p>
                <p>{this.props.bookObj.description}</p>
                <p><button className="delete-btn" onClick={this.handleDelete}>Delete</button></p>
            </div>
        )}
}

export default Book;