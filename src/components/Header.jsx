import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <img src='../images/BookWard.png' alt="logo" />
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/books'>Books</Link>
            <Link to='/teachers'>Teachers</Link>
            </nav>
        </header>
    )
}

export default Header