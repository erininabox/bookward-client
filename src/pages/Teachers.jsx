import Header from '../components/Header'
import Footer from '../components/Footer'
import SchoolHeader from '../components/SchoolHeader'
import Teachers from '../components/TeachersList'


function Catalog() {
    return(
        <div className='catalog-page'>
            <Header />
            <SchoolHeader />
            <Teachers />
            <Footer />
        </div>
    )
}

export default Catalog