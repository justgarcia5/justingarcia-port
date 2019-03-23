import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Profile2 from '../images/profile2.png';


class Landing extends Component {
  render() {
    return(

      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Profile2}
              alt="profile-pic"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Justin Garcia</h1>
              <h1>Software Developer</h1>
              <p>HTML/CSS | Bootstrap | JavaScript | React | Ruby on Rails | NodeJS | PSQL</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/just-g-garcia" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/justgarcia5" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>

                {/* Email */}
                <a href="mailto:justgarcia5@gmail.com" >
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/Justgarcia85" rel="noopener noreferrer" target="_blank">
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
