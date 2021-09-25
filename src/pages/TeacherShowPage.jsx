import { Component } from "react";
import TeachersModel from '../models/TeachersModel';

class TeacherShowPage extends Component {
    state = {
        firstName: '',
        lastName: '',
        department: ''
    }

    componentDidMount() {
        const teacherID = this.props.match.params.id;

        TeachersModel.show(teacherID).then((data) => {
            this.setState({
                firstName: data.firstName,
                lastName: data.lastName,
                department: data.department,
            })
        })
    }

    render() {
        console.log('props in the teachers show page')
        console.log(this.props);

        return(
                <main>
                    <h1>Teacher: {this.state.firstName} {this.state.lastName}</h1>
                    <h3>{this.state.department}</h3>
                </main>
        )
    }
}

export default TeacherShowPage;