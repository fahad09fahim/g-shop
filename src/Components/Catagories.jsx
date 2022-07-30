import React from 'react';
import {categories} from '../data'
import CatagoryItems from './CatagoryItems';
const Catagories = () => {
    return (
        <div style={{
            display: "flex",
            padding: '20px',
            justifyContent: 'space-around'
            
        }} >
            {
                categories.map(item=>(
                    <CatagoryItems  item={item} />
                ))
            }
        </div>
    );
};

export default Catagories;