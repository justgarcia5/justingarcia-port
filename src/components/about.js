import React, { Component } from 'react';
import Slideshow from './Slideshow'


class About extends Component {
  render() {
    return(
      <div className="about-page-div">
        <h2><b>About Me</b></h2>
        <hr/>
        <p>In the past year I have developed applications from design to coding under the direction of a bootcamp at LEARN academy. In my most recent role as an Intern for Coding Zeal, I participated in the Iteration Planning Meetings with our client, got exposure to Paired-Programing while working remotely, and developed an application that will be used internally by this company. I also gained knowledge in how a daily GitHub workflow works as well as Test-Driven Development. Previously, in my most recent role as a Service Manager, I was responsible for creating a structured system that I implemented to keep a fast paced yet organized workflow that allowed smooth day to day operations for our mechanics as well as managing all repairs from start to finish to ensure quality repairs in a very timely manner. In doing so, this prevented unnecessary problems that would arise previous to my placement into this role. Throughout my duration with this company I generated a 25% increase in part and equipment sales from the start and end of my role in this position by establishing many strong customer relationships in the greater Sacramento area.
        Leading up to the position in my management role, my journey began as a mechanic. My interest and willingness to learn more pushed me to excel as a professional and as a hobbyist. During this process I was able to develop problem-solving skills and gain an understanding of how to incorporate a step by step architecture to accomplish a build or repair. With these qualities I acquired from my previous profession and interests, I became very intrigued with the area of web development because it gave me the same sense of excitement and joy. I was able to incorporate all of these skills obtained throughout my adventure as a mechanic and apply them as a Web Developer. For the duration of my life I’ve have always been very artistic, whether it was drawing with pastels or using water colors, I have always seemed to have a vision of a finished product that was unique and that would stand out from the rest. Since becoming a Web Developer I’ve discovered that I was able to administer these same principles and allow myself to express my artistic side as a developer.</p>
        <Slideshow />
      </div>
    )
  }
}

export default About;
