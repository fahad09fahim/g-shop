
import React from 'react';
import Announcement from '../Components/Announcement';
import Catagories from '../Components/Catagories';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';

const Home = () => {
    return (
        <div>
         <Announcement/>
          <Navbar/>
          <Slider/>
          <Catagories/>
        </div>
    );
};

export default Home;