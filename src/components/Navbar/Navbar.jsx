import { Cartwidget } from './CartWidget/Cartwidget';
import { useCartContext } from '../../context/CartContext';
import logoImg from '../../assets/img/SFH-Logo.png';
import { NavLink, Link } from 'react-router-dom';
import './NavbarStyle.css'

// Agregar categorias dinamicas
const categories = [
    {},
    {}
]


const NavBar = ({ children }) => {
    const { cantidadTotal } = useCartContext()
    return (
        <div className='header'>
            <img src={logoImg} alt="Logo soportfuel" className="logo-img" />
            <h1 className="h1-sf"> SportFuel Hub </h1>
            <div className="navbar">
                {/* {categories.map  }
                <NavLink key={categories.id} to={`/categories/`} */}
                <Link className='nav-link' to="/Home"> Home </Link>
                <a className='nav-link' href="#FeaturedProducts">Featured Products</a>
                <a className='nav-link' href="#AboutUs">About Us</a>
                <a className='nav-link' href="#Testimonials">Testimonials </a>
                <a className='nav-link' href="#Contact">Contact </a>
                <NavLink className='nav-link' to="/ItemListContainer"> Products </NavLink>

            </div>
            <div className="search-bar">
                <i className='bx bx-search'> </i>
                <input type="text" placeholder="Search Products..." />
                <button className='btn-nav'> Search </button>
            </div>
            <div>
                <Link to='/cart' className='cart-num'>
                    {cantidadTotal()} <Cartwidget />
                </Link>
            </div>
            {children}
        </div>
    )
}

export default NavBar