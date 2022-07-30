import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import React from 'react';
import './Css/Navbar.css'



const Navbar = () => {
    return (
        <div className='navbar' >
        <nav>
            <ul>
                <li>En</li>
                <li className="search-field">
              <input type="text" />
               <BsSearch style={{
                color:"gray",
                fontSize:"16px"
                }}/>
                </li>
                <li className="logo">G-Shop</li>
                <li className="menu">
                   <span>Register</span>
                    <span>Log In</span>
                    <span><FaShoppingCart style={{
               paddingTop:'10px'
               
                }}/></span>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;