import logo from '../images/Little_Lemon_logo_for_nav.svg';
import { Link } from 'react-router-dom';

export default function Nav () {
    return (
        <nav>
            <img src={logo} alt='Little Lemon logo'/>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/menu' className='nav-link'>Menu</Link>
            <Link to='/order-online' className='nav-link'>Order Online</Link>
            <Link to='/reservations' className='nav-link'>Reservations</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/login' className='nav-link'>Login</Link>
        </nav>
    );
}
