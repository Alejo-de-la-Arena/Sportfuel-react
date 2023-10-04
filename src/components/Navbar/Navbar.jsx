import { Cartwidget } from './CartWidget/Cartwidget';
import { useCartContext } from '../../context/CartContext';
import logoImg from '../../assets/img/SFH-Logo.png';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import './NavbarStyle.css'
import Filter from '../Filter/Filter';

// const categories = [
//     {},
//     {}
// ]


const NavBar = ({ children }) => {
    const { totalQuantity } = useCartContext()
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    return (
        <div className='header'>
            <img src={logoImg} alt="Logo soportfuel" className="logo-img" />
            <h1 className="h1-sf"> SportFuel Hub </h1>
            <i className={`bx bx-menu ${menuActive ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></i>
            <div className={`navbar ${menuActive ? 'active' : ''}`}>
                {/* {categories.map  }
                <NavLink key={categories.id} to={`/categories/`} */}
                <Link className='nav-link active' to="/">Home</Link>
                <Link className='nav-link' to="/Protein">Protein</Link>
                <Link className='nav-link' to="/Creatine">Creatine</Link>
                <NavLink className='nav-link' to="/ItemListContainer">Products</NavLink>
            </div>
            <div className="search-bar">
                <i className='bx bx-search'> </i>
                <input type="text" placeholder="Search Products..." />
                <button className='btn-nav'>Search</button>
            </div>
            <div className='cart-num'>
                <Link to='/cart'>
                    {totalQuantity()} <Cartwidget />
                </Link>
            </div>
            {children}
        </div>
    )
}

export default NavBar