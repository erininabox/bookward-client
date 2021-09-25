// display a form
// onSubmit make an axios call that creates a brand new teacher (post request, passing in the teacher data in the req.body)
// redirect to the teachers index page

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TeachersModel from '../models/TeachersModel';
// import { Link } from "react-router-dom";

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
            [event.target.name]: event.target.value,
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
            // .then(<Redirect to="/teachers"/>)
            // .catch(err => {console.log(err)})
            // return <Redirect to="/teachers"/>  
            this.setState({
                ...teacherObj,
                isRedirectClicked: true
            })
        }

    render() {
        if (!this.state.isRedirectClicked) {
            return(
                <div>
                    <form onSubmit={ this.onFormSubmit }>
                        <p>Last Name:</p>
                        <p><input type="text" name='lastName' onChange={this.onInputChange} value={this.state.lastName}></input></p>
                        <p>First Name:</p>
                        <p><input type="text" name='firstName' onChange={this.onInputChange} value={this.state.firstName}></input></p>
                        <p>Department:</p>
                        <p><input type="text" name='department' onChange={this.onInputChange} value={this.state.department}></input></p>
                        <p><button type="submit">Submit</button></p>
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