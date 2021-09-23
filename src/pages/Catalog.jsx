import Header from '../components/Header'
import Footer from '../components/Footer'
import SchoolHeader from '../components/SchoolHeader'
import BooksList from '../components/BooksList'


function Catalog() {
    return(
        <div className='catalog-page'>
            <Header />
            <SchoolHeader />
            <BooksList />
            <Footer />
        </div>
    )
}

export default Catalog