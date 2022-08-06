import React from 'react';
import {AiFillFacebook, AiFillGithub, AiFillGooglePlusSquare} from 'react-icons/ai'
import './Css/Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
          <h1>Social link</h1>
          <span className='logo-footer'><AiFillFacebook/></span>
          <span className='logo-footer'><AiFillGithub/></span>
          <span className='logo-footer'><AiFillGooglePlusSquare/></span>
        </div>
    );
};

export default Footer;