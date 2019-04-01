import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Skills from './skills'


class Landing extends Component {
  render() {
    return(
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Justin Garcia</h1>
              <h1>Software Developer</h1>
              <Skills />
              <p>HTML/CSS | Bootstrap | JavaScript | React | Ruby on Rails | NodeJS | SQL</p>

              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/just-g-garcia" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>

              <a href="https://github.com/justgarcia5" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github" aria-hidden="true" />
              </a>

              <a href="mailto:justgarcia5@gmail.com" >
                <i className="fa fa-envelope" aria-hidden="true" />
              </a>

              <a href="https://twitter.com/Justgarcia85" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>

            </div>
          </Cell>
        </Grid>
        <div>
        </div>
      </div>
    )
  }
}

export default Landing;
