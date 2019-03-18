import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header" title={<Link className="portfolio"  to="/">My Portfolio</Link>} scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/resume" to="/aboutme">About Me</Link>
              <Link to="/resume" to="/projects2">Projects</Link>
              <Link to="/resume" to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects2">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;
