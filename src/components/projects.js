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
import Blog from '../images/blog.png'
import Zeal from '../images/zeal.png'
import recipeApp from '../images/recipe.png'
import friendbook from '../images/friend-book.png'

class Projects extends React.Component {
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
            <img src={tictactoe} alt="tic-tac-toe" className='project-picture' />
            <CardActions border>
              <a href="https://github.com/justgarcia5/tic-tac-toe" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          <Card className="card" shadow={5}>
            <img src={toolShare2} alt="toolshare-img" className='project-picture' />
            <CardActions border>
              <a href="https://github.com/team-pacific-drive/ToolShare" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          <Card className="card" shadow={5}>
            <img src={recipeApp} alt="toolshare-img" className='project-picture' />
            <CardActions border>
              <a href="https://github.com/justgarcia5/recipe-app" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://blooming-brushlands-16807.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          <Card className="card" shadow={5}>

            <img src={weather} alt="weather" className='project-picture' />
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
            <img src={Blog} alt="blog-screenshot" className='project-picture' />
            <CardText>

            </CardText>
            <CardActions border>
              <a href="https://github.com/justgarcia5/blog-app" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://just-blog-app.herokuapp.com" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          <Card className="card" shadow={5}>
            <img src={Zeal} alt="zeal-logo" className='project-picture' />
            <CardText>
            </CardText>
            <CardActions border>
              <a href="https://github.com/CodingZeal/initiative-tracker" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          <Card className="card" shadow={5}>
            <img src={friendbook} alt="zeal-logo" className='project-picture' />
            <CardText>
            </CardText>
            <CardActions border>
              <a href="https://github.com/justgarcia5/contact-list" rel="noopener noreferrer"    target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://polar-taiga-39732.herokuapp.com" rel="noopener noreferrer"    target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>
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

export default Projects;
