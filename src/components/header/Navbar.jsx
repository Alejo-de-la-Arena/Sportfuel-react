import React from 'react';
import './NavbarStyle.css';


function Navbar() {
    return (
        <div className='header'> 
        <img src="./assets/img/SFH-Logo.png" className="logo-img" alt="logo soportfuel" />
        <h1 className="logo"> SportFuel Hub </h1>
        <nav className='navbar'>
            <a href="#home" className="active">Home</a>
            <a href="#Featured Products">Featured Products</a>
            <a href="#About us">About us</a>
            <a href="#Blog">Blog</a>
            <a href="#contact">Contact</a>
        </nav>
        <div className="search-bar">
            <i className='bx bx-search'> </i>
            <input type="text" placeholder="Search for products..." />
        </div>
        <div className="cart-icon"> 
            <i className='bx bxs-cart'></i>
        </div>
        </div>
    );
}

export default Navbar