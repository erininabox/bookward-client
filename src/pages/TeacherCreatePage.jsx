import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TeachersModel from '../models/TeachersModel';

class TeacherCreatePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            lastName: '',
            firstName: '',
            department: '',
            isRedirectClicked: false
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            isRedirectClicked: false
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        let teacherObj = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            department: this.state.department
        }
        console.log(teacherObj)

        TeachersModel.addTeacher(teacherObj)

        this.setState({
            ...teacherObj,
            isRedirectClicked: true
        })
        }

    render() {
        if (!this.state.isRedirectClicked) {
            return(
                <div>
                    <h1>Add a Teacher</h1>
                    <form onSubmit={ this.onFormSubmit }>
                        <div className="form">
                        <p>Last Name:</p>
                        <p><input type="text" name='lastName' onChange={this.onInputChange} value={this.state.lastName}></input></p>
                        <p>First Name:</p>
                        <p><input type="text" name='firstName' onChange={this.onInputChange} value={this.state.firstName}></input></p>
                        <p>Department:</p>
                        <p><input type="text" name='department' onChange={this.onInputChange} value={this.state.department}></input></p>
                        <p><button className="submit-btn" type="submit">Submit</button></p>
                        </div>
                    </form>
                </div>
            )
        } else {
            return(
                <Redirect to="/teachers" />
            )
        }
    }
}


export default TeacherCreatePage