import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import LandingContent from '../components/LandingContent';

function Landing(){
    return(
        <div className='landing-page'>
            <LandingHeader />
            <LandingContent />
            <Footer />
        </div>
    )
}

export default Landing