import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './education';
import Experience from './experience';
import ProfilePic from '../images/profile_pic.jpg';
import PdfDocs from './pdfDocs'

class Resume extends Component {
  render() {
    return(
      <div className="resume">
        <Grid>
          <Cell col={4}>
            <div>
              <img
                src={ProfilePic}
                alt="profile-pic"
                className='resume-pic'
                 />
            </div>
            <div>
              <h2><b>Justin Garcia</b></h2>
              <h4><b>Programmer</b></h4>
              <hr/>
              <p shadow={5}>Highly motivated individual seeking opportunities as a full stack web developer. I like to think of myself as a quick learner, detail-oriented, and a professional with excellent teamwork and communication skills.</p>
              <hr/>
            </div>
            <div>
              <h5><b>Phone</b></h5>
              <p>(530) 417-2205</p>
              <h5><b>Email</b></h5>
              <p>justgarcia5@gmail.com</p>
              <hr/>
            </div>
            <PdfDocs />
          </Cell>

          <Cell className="resume-right-col" col={8} shadow={20}>
            <h2><b>Education</b></h2>
            <Education
              startYear={'Nov 2018'}
              endYear={'Mar 2019'}
              schoolName="Learn Academy"
              schoolDescription={
                <ul>
                  <li>LEARN Academy offers the 4-month Rails & Javascript Bootcamp. The program trains students in various industry-leading frameworks and languages, with a concentration on Ruby on Rails and React</li>
                  <li>JAVASCRIPT, REACT, RUBY ON RAILS, GITHUB, TDD, SCRUM, POSTGRESQL</li>
                </ul>
              }
            />
            <Education
              startYear={'Aug 2010'}
              endYear={'May 2012'}
              schoolName="Sierra College"
              schoolDescription={
                <ul>
                  <li>Completion of 36 credits (Environmental Studies)</li>
                </ul>
              }
            />

            <hr/>

            <h2><b>Experience</b></h2>

            <Experience
              startYear={'Mar 2019'}
              endYear={'Jun 2019'}
              jobName="Zeal"
              jobTitle="Intern"
              jobDescription={
                <ul>
                  <li>Worked remotely with a team to build an initiative tracker application using Ruby on Rails that will be internally utilized by the Zeal team</li>
                  <li>Participated and interacted directly with the product owner during IPM’s</li>
                  <li>Analyzed functional requirements, developed code, and implemented RSpec and Capybara testing on features</li>
                </ul>
              }
            />

            <Experience
              startYear={'Nov 2018'}
              endYear={'Mar 2019'}
              jobName="Learn Academy"
              jobTitle='Student'
              jobDescription={
                <ul>
                  <li>400 hours of hands on training in web development and problem-solving skills.</li>
                  <li>Experience with Mob and Paired Programing. This exposure allowed a significant improvement with communication skills.</li>
                  <li>Specialized areas of knowledge in JavaScript, React, Ruby on Rails, GitHub, Postgresql, AJAX, Test Driven Development, and SCRUM</li>
                </ul>
              }
            />

            <Experience
              startYear={2012}
              endYear={2018}
              jobName="Aerial Lift Service Co"
              jobTitle='Service Manager/Mechanic'
              jobDescription={
                <ul>
                  <li>Managed and organized customer repairs by developing a structured system and utilizing this system to efficiently provide a high level of quality repairs in a timely manner</li>
                  <li>Generated a 25% increase in part sales and equipment sales from the start and end of my role in this position by establishing many strong customer relationships in the greater Sacramento area</li>
                </ul>
              }
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
