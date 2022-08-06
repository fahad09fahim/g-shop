import React from 'react';
import './Css/categoryItems.css'
const CatagoryItems = ({item}) => {
    return (
        <div className='container'>
        <img src={item.img} alt="" />
        <div className='info'>
        <h4>{item.title}</h4>
        <button className='shop-btn'>Shop Now</button>
        </div>
        </div>
    );
};

export default CatagoryItems;