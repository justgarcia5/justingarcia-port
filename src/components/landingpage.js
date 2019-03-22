import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(

      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://render.bitstrips.com/v2/cpanel/76c3b171-f0cf-4dd6-b91f-91bd86693f61-1fa32da0-5aca-4ce8-a6b7-9e5d9dce98da-v1.png?transparent=1&palette=1"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Justin Garcia</h1>
              <h1>Full Stack Web Developer</h1>
              <p>HTML/CSS | Bootstrap | JavaScript | React | Ruby on Rails | NodeJS</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/just-g-garcia" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/justgarcia5" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a href="justgarcia5@gmail.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/Justin77832726" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
