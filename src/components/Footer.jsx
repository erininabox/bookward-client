import {Link} from 'react-router-dom';

function Footer() {
    return(
        <div className='footer'>
            <Link to=''>Git Repo</Link>
            <p>Copyright 2021 <Link to=''>Erin Halden</Link>.</p>
            <p>Built using:</p>
            <img src='' alt='React' />
            <img src='' alt='Express' />
            <img src='' alt='Node.js' />
            <img src='' alt='Sequelize' />
            <img src='' alt='PostgreSQL' />
        </div>
    )
}

export default Footer