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
import SimpleBlog from '../images/SimpleBlog.png'
import Zeal from '../images/zeal.png'

class Projects2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card className="card" shadow={5}>
            <img src={tictactoe} alt="tic-tac-toe" className="project-img" />
            <CardActions border>
              <a href="https://github.com/justgarcia5/tic-tac-toe" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          <Card className="card" shadow={5}>
            <img src={toolShare2} alt="toolshare-img" />
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
            <img src={weather} alt="weather" />
            <CardActions border>
              <a href="https://github.com/justgarcia5/weather_app" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://tranquil-eyrie-34239.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card className="card" shadow={5}>
            <img src={SimpleBlog} alt="blog-screenshot" />
            <CardText>

            </CardText>
            <CardActions border>
              <a href="https://github.com/justgarcia5/SimpleBlog" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          <Card className="card" shadow={5}>
            <img src={Zeal} alt="zeal-logo" className='project-picture'/>
            <CardText>
            </CardText>
            <CardActions border>
              <a href="https://github.com/CodingZeal/initiative-tracker" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          {/* <Card className="card" shadow={5}>

          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
        </Card> */}
        </div>
      )
    }
  }

  render() {
    return (
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
