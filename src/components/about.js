import React, { Component } from 'react';
import Slideshow from './Slideshow'


class About extends Component {
  render() {
    return(
      <div className="about-page-div">
        <h2><b>About Me</b></h2>
        <hr/>
        <p> For the duration of my life I’ve have always been very artistic, whether it was drawing with pastels or using water colors, I have always seemed to have a vision of a finished product that was unique and that would stand out from the rest. Since becoming a Web Developer I’ve discovered that I was able to administer these same principles and allow myself to express my artistic side as a developer.</p>
        <Slideshow />
      </div>
    )
  }
}

export default About;
