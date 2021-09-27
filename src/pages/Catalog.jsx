import { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksModel from '../models/BooksModel'
import Book from '../components/Book'


class Catalog extends Component {
    state = {
        bookData: []
    }

    componentDidMount() {
        BooksModel.all().then((data) => {
            this.setState({ bookData: data })
        })
    }

    deleteBook = (bookID) => {
        BooksModel.delete(bookID).then(() => {
            let books = this.state.bookData.filter(function(bookObj) {
                return bookObj._id !== bookID
            })
            this.setState({bookData: books})
        }).catch(err => {console.log(err)})
    }
    
    renderBooks() {
        const booksJSX = this.state.bookData.map((bookObj, idx) => {
            return (
                <Book key={idx} bookObj={bookObj} deleteBook={this.deleteBook} />
            )
        });

        return booksJSX;
    }

    render() {
        return (
            <div>
                <main>
                    <h1>All Books</h1>
                    <Link to="/books/add">Add a Book Set</Link>
                    { this.renderBooks() }
                </main>
            </div>
        )
    }
}

export default Catalog