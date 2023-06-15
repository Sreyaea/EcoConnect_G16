

import React from 'react';
import '../App.css';
import { Button } from '../ecobutton';
import './Herosection.css';
import video from "C:/Users/acer/Desktop/eco/nature/react-navbar-dropdown/src/videos/lake_-_52849 (Original).mp4"

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
             
         
        
           
      
    </div>
  );
}

export default HeroSection;