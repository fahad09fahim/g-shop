import React from 'react';
import {IoIosSend}from "react-icons/io"
import './Css/NewsLetter.css'
const Newsletter = () => {
    return (
        <div className='container'>
         <div className='title'>
          <h1>NewsLetter</h1>
         </div>
         <div className="description">
       <h3>Get Timely Update Your Favorite Products.</h3>
         </div>
         <div className="inputcontainer">
             <input type="text" placeholder='Your Email' />
             <button id='input-btn'>
                 <IoIosSend/>
             </button>
         </div>
        </div>
    );
};

export default Newsletter;