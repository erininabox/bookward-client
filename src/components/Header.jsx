import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <Link to=''>Profile</Link>
            <Link to=''>Add/Edit Books</Link>
            <Link to=''>Add/Edit Teachers</Link>
            <Link to=''>Reports</Link>
            <img className='app-logo' src='' alt='Logo' />
        </div>
    )
}

export default Header