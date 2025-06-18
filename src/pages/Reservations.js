import Header from '../components/Header';
import Nav from '../components/Nav';
import ReservationsMain from '../components/ReservationsMain';

export default function Reservations () {
    return (
        <>
            <Nav/>
            <Header page_header='Make a Reservation'/>
            <ReservationsMain/>
        </>
    );
}
