import React, { Component } from 'react';
import {
  Grid,
  Cell
} from 'react-mdl';

import Skills from './skills'

class Landing extends Component {

  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Justin Garcia</h1>
              <h2>Software Developer</h2>
              <Skills className="banner-text" />
            </div>

            <div className="border-links">
              <div className="social-links">
                <a href="https://linkedin.com/in/just-g-garcia" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin" aria-hidden="true" style={{ color: "rgb(77, 184, 255)" }} />
                </a>

                <a href="https://github.com/justgarcia5" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github-square" aria-hidden="true" style={{ color: "rgb(33, 31, 31)" }} />
                </a>

                <a href="mailto:justgarcia5@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true" style={{ color: "white" }} />
                </a>

                <a href="https://twitter.com/Justgarcia85" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-twitter" aria-hidden="true" style={{ color: "rgb(29, 202, 255)" }} />
                </a>
              </div>
              <br/>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
