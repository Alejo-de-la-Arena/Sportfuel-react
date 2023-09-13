import React from 'react';
import logoImg from '../../assets/img/SFH-Logo.png';
import { Link } from 'react-router-dom';
import { Cartwidget } from './CartWidget/Cartwidget';
// import { useCart } from '../cart/CartContext';
import './NavbarStyle.css';

const Navbar = () => {
    return (
        <div className='header'>
            <img src={logoImg} alt="Logo soportfuel" className="logo-img" />
            <h1 className="logo"> SportFuel Hub </h1>
            <div className="navbar">
                <a href="/Home" className="active">Home</a>
                <a href="/FeaturedProducts">Featured Products</a>
                <a href="/AboutUs">About Us</a>
                <a href="/Testimonials">Testimonials</a>
                <a href="/Contact">Contact</a>
                <Link to="/Products">Products</Link> 
            </div>
            <div className="search-bar">
                <i className='bx bx-search'> </i>
                <input type="text" placeholder="Buscar productos..." />
                <button className='btn-nav'> Buscar </button>
            </div>
            <div>
                <Cartwidget />
            </div>
        </div>
    );
}

export default Navbar;
