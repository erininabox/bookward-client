import {Link} from 'react-router-dom';

function Footer() {
    return(
        <div className='footer'>
            <Link to='/'>Git Repo</Link>
            <p>Copyright 2021 <Link to='/'>Erin Halden</Link></p>
        </div>
    )
}

export default Footer