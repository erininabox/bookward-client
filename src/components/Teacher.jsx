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
            <div>
                <p>Teacher: <Link to={`/teachers/${this.props.teacherObj._id}`}>{this.props.teacherObj.firstName} {this.props.teacherObj.lastName}</Link></p>
                <p>{this.props.teacherObj.department}</p>
                <p><button className="delete-btn" onClick={this.handleDelete}>Delete</button></p>
                {/* Look up 'modal' when you implement the pop-up edit feature later */}
            </div>
    )}
}

export default Teacher;