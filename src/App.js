import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import Main from './components/main'


class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Layout>
          <Header className="header" title={<Link className="portfolio"  to="/">My Portfolio</Link>} scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme" to="/aboutme">About Me</Link>
              <Link to="/projects2" to="/projects2">Projects</Link>
              <Link to="/contact" to="/contact">Contact</Link>
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
