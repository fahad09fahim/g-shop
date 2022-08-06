import React from 'react';
import {FaShoppingCart} from "react-icons/fa"
import {BsSearch} from 'react-icons/bs'
import {MdOutlineFavorite} from 'react-icons/md'
import './Css/Product.css'
const Product = ({item}) => {

    return (
        <div className='product-container'>
            <div className='circle'></div>
            <div id='image'><img src={item.img} alt="" /></div>
            <div className='info-card'>
            <div className='icons'>
                <FaShoppingCart/>
            </div>
            <div className='icons'>
            <BsSearch/>
            </div>
            <div className='icons'>
            <MdOutlineFavorite/>
            </div>
            </div>
        </div>
    );
};

export default Product;