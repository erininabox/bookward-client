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
            <div className="book">
                <div className="booklead">
                    <h3>{this.state.title}</h3>
                    <div>{this.state.author}</div>
                    <div>Published: {this.state.yearPub}</div>
                    <div>{this.state.quantity}</div>
                    <div className="faux-btn">Edit book details</div>
                    <div className="faux-btn">Check-out</div>
                </div>
                    <div>{this.state.description}</div>
            </div>
        )
    }
}

export default BookShowPage;