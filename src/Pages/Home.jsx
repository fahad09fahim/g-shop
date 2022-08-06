
import React from 'react';
import Announcement from '../Components/Announcement';
import Catagories from '../Components/Catagories';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import NewsLetter from '../Components/NewsLetter';
import Products from '../Components/Products';

import Slider from '../Components/Slider';

const Home = () => {
    return (
        <div>
         <Announcement/>
          <Navbar/>
          <Slider/>
          <Catagories/>
          <Products/>
          <NewsLetter/>
          <Footer/>
        </div>
    );
};

export default Home;