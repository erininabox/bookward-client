import { Component } from 'react';
import TeachersModel from '../models/TeachersModel'
import Teacher from '../components/Teacher'
import {Link} from 'react-router-dom'
// import axios from 'axios';


class TeachersList extends Component {
    state = {
        teacherData: []
    }

    componentDidMount() {
        TeachersModel.all().then((data) => {
            this.setState({ teacherData: data })
        })
    }

    deleteTeacher = (teacherID) => {
        TeachersModel.delete(teacherID).then(() => {
            let teachers = this.state.teacherData.filter(function(teacherObj) {
                return teacherObj._id !== teacherID
            })
            this.setState({teacherData: teachers})
        }).catch(err => {console.log(err)})
        
    }

    renderTeachers() {
        const teachersJSX = this.state.teacherData.map((teacherObj, idx) => {
            return (
                <Teacher key={idx} teacherObj={teacherObj} deleteTeacher={this.deleteTeacher} />
            )
        });

        return teachersJSX;
    }

    render() {
        return (
            <main>
                <div className="all-teachers-header">
                    <h1>All Teachers</h1>
                    <Link className="faux-btn" to="/teachers/add">Add a teacher</Link>
                </div>
                    { this.renderTeachers() }
            </main>
        )
    }
}

export default TeachersList