import axios from 'axios';
import { Component } from 'react';
// import {Link} from 'react-router-dom';
import LendingModel from '../models/LendingModel';
import TeachersModel from '../models/TeachersModel';
// import BooksModel from '../models/BooksModel';
// import Book from '../components/Book';

class LendingRecord extends Component {
    constructor(props){
        super(props)
        this.state = {
            borrowDate: Date.now(),
            dueDate: '',
            teacher: '',
            bookSet: this.props.match.params.id,
            isRedirectClicked: false
    }}

    componentDidMount() {
        axios.get("http://localhost:4000/books/:id/lending").then((data) => {
            this.setState({ lendingData: data.data })
        })
        console.log('Book ID: ', this.props.match.params.id)
        console.log('TeachersModel.all() returns: ', TeachersModel.all())
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            isRedirectClicked: false
        })
    }

    handleSubmit = (event, props) => {
        event.preventDefault()
        let lendingObj = {
            borrowDate: this.state.borrowDate,
            dueDate: this.state.dueDate,
            teacher: this.state.teacher,
            bookSet: this.props.match.params.id
        }
        console.log('Lending Object: ', lendingObj)
        LendingModel.addLendingRecord(lendingObj)
        this.setState({
            ...lendingObj,
            isRedirectClicked: false
        })
    }


    render() {
        return (
            <div>
                {/* <h3>{this.props.bookObj.title}</h3>
                <p>by {this.props.bookObj.author}</p>
                <p>Quantity in set: {this.props.bookObj.quantity}</p> */}
                <h3>Title</h3>
                <form className="lending-form" onSubmit={this.handleSubmit}>
                    <label for="teacher">Teacher</label>
                    <input name="teacher" list="teacher-names"></input>
                        {/* <datalist id="teacher-names">
                            {TeachersModel.all().map(data => {
                                return(
                                    <option value={`${data.firstName} ${data.lastName}`} />
                                )
                            })}
                        </datalist> */}
                    <label for="due-date">Due Date</label>
                    <input name="due-date" type="date"></input>

                    <p><button type="submit" className="checkout-btn">Check Out</button></p>

                </form>

            </div>
        )}
}

export default LendingRecord;