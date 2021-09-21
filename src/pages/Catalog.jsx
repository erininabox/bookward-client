import Header from '../components/Header'
import Footer from '../components/Footer'
import SchoolHeader from '../components/SchoolHeader'
import CatalogSort from '../components/CatalogSort'
import BooksList from '../components/BooksList'


function Catalog() {
    return(
        <div className='catalog-page'>
            <Header />
            <SchoolHeader />
            <CatalogSort />
            <BooksList />
            <Footer />
        </div>
    )
}

export default Catalog