import { Cartwidget } from './CartWidget/Cartwidget';
import { useCartContext } from '../../context/CartContext';
import logoImg from '../../assets/img/SFH-Logo.png';
import { NavLink, Link } from 'react-router-dom';
import './NavbarStyle.css'


const NavBar = ({children}) => {
    const {cantidadTotal} = useCartContext()
    return (
        <div className='header'>
            <img src={logoImg} alt="Logo soportfuel" className="logo-img" />
            <h1 className="h1-sf"> SportFuel Hub </h1>
            <div className="navbar">
                <Link className='nav-link' to='/ItemListContainer'> Home </Link>
                <Link className='nav-link' to="/FeaturedProducts">Featured Products</Link>
                <Link className='nav-link' to="/AboutUs">About Us</Link>
                <Link className='nav-link' to="/Testimonials">Testimonials </Link>
                <Link className='nav-link' to="/Contact">Contact </Link>
                <Link className='nav-link' to="/Products">Products </Link>
            </div>
            <div className="search-bar">
                <i className='bx bx-search'> </i>
                <input type="text" placeholder="Search Products..." />
                <button className='btn-nav'> Search </button>
            </div>
            <div>
                <Link to='/cart'>
                    {cantidadTotal()} <Cartwidget saludo={'hola saludos'} />    
                </Link>
            </div>
            {children}
        </div> 
)}

export default NavBar