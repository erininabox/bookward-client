import {Link} from 'react-router-dom';

function Book(props) {
    console.log(props);

    return (
        <div>
            <h3><Link to={`/books/${props.bookObj._id}`}>{props.bookObj.title}</Link></h3>
            <p>by {props.bookObj.author}</p>
            <p>Published: {props.bookObj.yearPub}</p>
            <p>{props.bookObj.description}</p>
        </div>
    )
}

export default Book;