import React from 'react'
import './Css/Slider.css'
import sliderImg from '../Images/slider.png'
const Slider = () => {
  return (
    <div className='slider-container'>
    <div><img src={sliderImg} alt="" /></div>
    <div className='title'>
      <h3>Summer Sale</h3>
      <p>Don't Compromise on style! Get flat 30% off for new arrivals.</p>
      <button>SHOW NOW</button>
    </div>
    </div>
  )
}

export default Slider