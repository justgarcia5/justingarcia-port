import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://render.bitstrips.com/v2/cpanel/76c3b171-f0cf-4dd6-b91f-91bd86693f61-1fa32da0-5aca-4ce8-a6b7-9e5d9dce98da-v1.png?transparent=1&palette=1"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2>Justin Garcia</h2>
            <h4>Programmer</h4>
            <hr/>
            <p shadow={5}>Highly motivated individual seeking opportunities as a full stack web developer. I like to think of myself as a quick learner, detail-oriented, and a professional with excellent teamwork and communication skills.</p>
            <hr/>
            <div>
             <h5>Phone</h5>
             <p>(530) 417-2205</p>
             <h5>Email</h5>
             <p>justgarcia5@gmail.com</p>
             <hr/>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8} shadow={20}>

            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Learn Academy"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Education
              startYear={2010}
              endYear={2012}
              schoolName="Sierra College"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <hr/>

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={'Current'}
              jobName="Zeal"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2018}
              jobName="Aerial Lift Service Co"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <hr/>

            <h2>Skills</h2>

            <Skills
              skill="javascript"
              progress={80}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={80}
            />
            <Skills
              skill="React"
              progress={60}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
