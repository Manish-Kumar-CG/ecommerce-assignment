import React from 'react'
import './Navbar.css'
import  logo from '../../assests/logo.png'
import search_icon from '../../assests/search-icon.png'
const Navbar = () =>{
    return(
        <div className = "navbar">
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Categories</li>
            </ul>
            <div className='cart'>
                <button id = "cartButton" variant="contained">Cart</button>
            </div>
            <div className="signIn">
                <button id = "SignIn" variant="contained">Sign In</button>
            </div>

        </div>
    );
};

export default Navbar