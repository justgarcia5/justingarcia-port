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
          <div className="card-title">
            <h3>Tic-Tac-Toe</h3>
          </div>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
          <a href="https://github.com/justgarcia5/tic-tac-toe" >
            <Button colored>GitHub</Button>
          </a>
            <Button colored>Live Demo</Button>
          </CardActions>
        </Card>

        <Card className="card" shadow={5}>

            <h3>ToolShare</h3>
            <img src={toolShare2} />

          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
          <a href="https://github.com/team-pacific-drive/ToolShare" >
            <Button colored>GitHub</Button>
          </a>
          <a href="https://hidden-tundra-14844.herokuapp.com/account/my_tools" >
            <Button colored>Live Domo</Button>
          </a>
          </CardActions>
        </Card>

        <Card className="card" shadow={5}>
          <div className="card-title">
            <h3>Tic-Tac-Toe</h3>
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
  } else if(this.state.activeTab === 1) {
    return (
      <div className="projects-grid">
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

