import { Component } from "react";
import BooksModel from '../models/BooksModel';

class BookShowPage extends Component {
    state = {
        title: '',
        author: '',
        yearPub: '',
        description: '',
        quantity: 0
    }

    componentDidMount() {
        const bookID = this.props.match.params.id;

        BooksModel.show(bookID).then((data) => {
            this.setState({
                title: data.title,
                author: data.author,
                yearPub: data.yearPub,
                description: data.description,
                quantity: data.quantity
            })
        })
    }

    render() {
        console.log('props in the books show page')
        console.log(this.props);

        return(
                <main>
                    <h1>Book Show Page</h1>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.author}</p>
                    <p>Published: {this.state.yearPub}</p>
                    <p>{this.state.description}</p>
                    <p>{this.state.quantity}</p>
                </main>
        )
    }
}

export default BookShowPage;