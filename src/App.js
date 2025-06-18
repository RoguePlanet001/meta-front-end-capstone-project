import './App.css';
import About from './pages/About'
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Reservations from './pages/Reservations';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/order-online' element={<OrderOnline/>}/>
        <Route path='/reservations' element={<Reservations/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
