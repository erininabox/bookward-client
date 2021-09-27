import {Link} from 'react-router-dom';
import {Component} from 'react';
import axios from 'axios';

class Teacher extends Component {
    state = {
        firstName: '',
        lastName: '',
        department: ''
    }

    componentDidMount() {
        axios.get("http://localhost:4000/teachers").then((data) => {
            this.setState({ teacherData: data.data })
        })
    }

    handleDelete = e => {
        e.preventDefault()
        this.props.deleteTeacher(this.props.teacherObj._id);
    }

    render() {
        return (
            <div className="teacher">
                <div className="teacher-name-dpt">
                    <h4>Teacher:</h4>
                    <p>
                    <Link to={`/teachers/${this.props.teacherObj._id}`}>{this.props.teacherObj.firstName} {this.props.teacherObj.lastName}</Link></p>
                    <p>{this.props.teacherObj.department}</p>
                </div>
                <div className="borrowed-book-set">
                    <h4>Checked out:</h4>
                    <p><Link to='/books/614e01a5c94fd8acd118fe1c'>Anne of Avonlea</Link></p>
                    <p>Due: 10/30/2021</p>
                </div>
                <button className="delete-btn" onClick={this.handleDelete}>Delete</button>
                {/* Look up 'modal' when you implement the pop-up edit feature later */}
            </div>
    )}
}

export default Teacher;