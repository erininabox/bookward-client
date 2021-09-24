const url = 'http://localhost:4000/books';

class BooksModel {
    static all() {
        return fetch(url)
            .then((response) => {
                return response.json()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static show(bookID) {
        return fetch(`${url}/${bookID}`)
            .then((response) => response.json())
    }
}

export default BooksModel;