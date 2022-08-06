import React, { useEffect, useState } from 'react';
import CatagoryItems from './CatagoryItems';
const Catagories = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories)
    useEffect(()=>{
        fetch('Categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[]);

    return (
        <div style={{
            display: "flex",
            padding: '20px',
            justifyContent: 'space-around'
            
        }} >
            {
                categories.map(item=>(
                    <CatagoryItems  item={item} key={item.id} />
                ))
            }
        </div>
    );
};

export default Catagories;