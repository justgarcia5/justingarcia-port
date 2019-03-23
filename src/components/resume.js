import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ProfilePic from '../images/profile_pic.jpg';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div>
              <img
                src={ProfilePic}
                alt="profile-pic"
                style={{height: '300px', width: '400px'}}
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
              schoolDescription="LEARN Academy offers the 4-month Rails & Javascript Bootcamp. The program trains students in various industry-leading frameworks and languages, with a concentration on Ruby on Rails. In addition to Ruby, students learn SQL, JavaScript and jQuery. The majority of the bootcamp is spent learning the Rails framework "
            />
            <Education
              startYear={2010}
              endYear={2012}
              schoolName="Sierra College"
              schoolDescription="Completion of 36 credits (Environmental Studies) "
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
              startYear={2018}
              endYear={2019}
              jobName="Learn Academy"
              jobDescription="400 hours of hands on training in web development and problem-solving skills. Experience with mob and paired programing. This exposure allowed a significant improvement with communication skills. "
            />

            <Experience
              startYear={2012}
              endYear={2018}
              jobName="Aerial Lift Service Co"
              jobDescription="Managed and organized customer repairs by developing a structured system and utilizing this system to efficiently provide a high level of quality repairs in a timely manner. Generated a 25% increase in part sales and equipment sales from the start and end of my role in this position by establishing many strong customer relationships in the greater Sacramento area. "
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
