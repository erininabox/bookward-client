import axios from 'axios';
const url = 'http://localhost:4000/teachers';

class TeachersModel {
    static all() {
        return fetch(url)
            .then((response) => {
                return response.json()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static show(teacherID) {
        return fetch(`${url}/${teacherID}`)
            .then((response) => response.json())
    }

    static delete(teacherID) {
        return axios.delete(`${url}/${teacherID}`)
    }

    static addTeacher(teacherObj) {
        return axios.post(`${url}/add`, teacherObj).then((teacherObj) => {
            this.setState(teacherObj)
            console.log(teacherObj)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default TeachersModel;