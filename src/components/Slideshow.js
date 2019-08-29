import React from 'react';
import { Fade } from 'react-slideshow-image';

import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpeg'
import slide5 from '../images/slide5.jpg'
import slide6 from '../images/slide6.jpeg'

const fadeImages = [
  slide5,
  slide2,
  slide3,
  slide6,
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt='justin'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt='justin'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt='justin'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt='justin'/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;
