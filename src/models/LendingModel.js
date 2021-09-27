import axios from "axios";
const url = 'http://localhost:4000/books/:id/lending';

class LendingModel {
    static all() {
        return fetch(url)
            .then((response) => {
                return response.json()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static show(lendingID) {
        return fetch(`${url}/${lendingID}`)
            .then((response) => response.json())
    }

    static delete(lendingID) {
        return axios.delete(`${url}/${lendingID}`)
    }

    static addLendingRecord(lendingObj) {
        return axios.post(`${url}/add`, lendingObj)
    }
}

export default LendingModel;