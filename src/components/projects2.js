import React from 'react'
import {
  Card,
  CardText,
  CardActions,
  Button,
  Tabs,
  Tab,
  Grid,
  Cell,
} from 'react-mdl'

import toolShare2 from '../images/toolShare2.png'
import tictactoe from '../images/tic-tac-toe2.png'
import weather from '../images/weather.png'

class Projects2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
      <div className="projects-grid">
        <Card className="card" shadow={5}>

            {/* <h3>Tic-Tac-Toe</h3> */}
            <img src={tictactoe} alt="tic-tac-toe" className="project-img"/>

          <CardText>
            During my time as a student at the Learn Academy web developement bootcamp, this was one of the first projects I did using React.
          </CardText>
          <CardActions border>
            <a href="https://github.com/justgarcia5/tic-tac-toe" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>
            <a rel="noopener noreferrer" target="_blank">
              <Button colored>Live Demo</Button>
            </a>
          </CardActions>
        </Card>

        <Card className="card" shadow={5}>

            {/* <h3>ToolShare</h3> */}
            <img src={toolShare2} alt="toolshare-img"/>

          <CardText>
            ToolShare was the final project that myself and three other students built at Learn Academy Web Dev bootcamp. It implemented all of the skills aquired over the course of program.
          </CardText>
          <CardActions border>
          <a href="https://github.com/team-pacific-drive/ToolShare" rel="noopener noreferrer" target="_blank">
            <Button colored>GitHub</Button>
          </a>
          <a href="https://hidden-tundra-14844.herokuapp.com/account/my_tools" rel="noopener noreferrer" target="_blank">
            <Button colored>Live Demo</Button>
          </a>
          </CardActions>
        </Card>

        <Card className="card" shadow={5}>

            {/* <h3>Weather App</h3> */}
            <img src={weather} alt="weather" />

          <CardText>
            This project was an intro to using external API calls and how they work. Enter the city and country and find out the weather.
          </CardText>
          <CardActions border>
          <a href="https://github.com/justgarcia5/weather_app" el="noopener noreferrer" target="_blank">
            <Button colored>GitHub</Button>
          </a>
            <Button colored>Live Demo</Button>
          </CardActions>
        </Card>
      </div>
    )
  } else if(this.state.activeTab === 1) {
    return (
      <div className="projects-grid">
        <Card className="card" shadow={5}>
          <div className="card-title">
            <h3>Simple App</h3>
          </div>
          <CardText>

          </CardText>
          <CardActions border>
          <a href="https://github.com/justgarcia5/weather_app" rel="noopener noreferrer" target="_blank">
            <Button colored>GitHub</Button>
          </a>
            <Button colored>Live Demo</Button>
          </CardActions>
        </Card>

        <Card className="card" shadow={5}>
          <div className="card-title">
            <h3>Ruby on Rails</h3>
          </div>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
        </Card>

        <Card className="card" shadow={5}>
          <div className="card-title">
            <h3>Ruby on Rails</h3>
          </div>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ruby on Rails</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects2;
