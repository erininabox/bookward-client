import { Component } from 'react';
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

    renderBooks() {
        const booksJSX = this.state.bookData.map((bookObj, idx) => {
            return (
                <Book key={idx} bookObj={bookObj} />
            )
        });

        return booksJSX;
    }

    render() {
        return (
            <div>
                <main>
                    <h1>All Books</h1>
                    { this.renderBooks() }
                </main>
            </div>
        )
    }
}

export default Catalog