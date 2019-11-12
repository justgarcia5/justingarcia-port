import React, { Component } from 'react';

import Skills from './skills'

class Landing extends Component {

  render() {
    return (
      <div className="landing-page">
      <div className="container p-5">
        <div className="jumbotron" style={{width: "200px;"}}>
          <h1 className="text-justify text-white display-3 pt-5 text-center fred-font">Justin Garcia</h1>
          <h2 className="text-justify text-white display-8 pb-5 text-center fred-font">Software Developer</h2>
          {/* <hr className="my-4 landing-hr"/> */}
          <Skills />
        </div>
        <div className="border-links">
            <div className="social-links">
              <a href="https://linkedin.com/in/just-g-garcia" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true" style={{ color: "rgb(77, 184, 255)" }} />
              </a>

              <a href="https://github.com/justgarcia5" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github-square" aria-hidden="true" style={{ color: "#AD5C51" }} />
              </a>

              <a href="mailto:justgarcia5@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true" style={{ color: "white" }} />
              </a>

              <a href="https://twitter.com/Justgarcia85" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-twitter" aria-hidden="true" style={{ color: "rgb(29, 202, 255)" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
