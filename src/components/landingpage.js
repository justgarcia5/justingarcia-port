import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Justin Garcia</h1>
              <h1>Software Developer</h1>
              <p>HTML/CSS | Bootstrap | JavaScript | React | Ruby on Rails | NodeJS | SQL</p>
            </div>
            <div className="social-links">

                <a href="https://linkedin.com/in/just-g-garcia" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://github.com/justgarcia5" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>

                <a href="mailto:justgarcia5@gmail.com" >
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>

                <a href="https://twitter.com/Justgarcia85" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
