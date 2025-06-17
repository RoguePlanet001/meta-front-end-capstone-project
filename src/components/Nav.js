import logo from '../images/Little_Lemon_logo_for_nav.svg';

export default function Nav () {
    return (
        <nav>
            <img src={logo} alt='Little Lemon logo'/>
            <a href='/index.html'>Home</a>
            <a href='/menu.html'>Menu</a>
            <a href='/order-online.html'>Order Online</a>
            <a href='/reservations.html'>Reservations</a>
            <a href='/about.html'>About</a>
            <a href='/login/html'>Login</a>
        </nav>
    );
}
