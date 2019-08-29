import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl';

import Routes from './components/routes'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" rel="stylesheet"/>
          <Layout >
            <Header className="header-links" title={<Link className="justin-header-link" to="/">Justin Garcia</Link>} scroll>
              <Navigation>
                <Link style={{fontSize: '16px'}} to="/resume">Resume</Link>
                <a href="https://github.com/justgarcia5" rel="noopener noreferrer" target="_blank" style={{fontSize: '16px'}}>GitHub</a>
                <Link to="/about" style={{fontSize: '16px'}} >About</Link>
                <Link to="/projects" style={{fontSize: '16px'}} >Projects</Link>
                <Link to="/contact" style={{fontSize: '16px'}} >Contact</Link>
              </Navigation>
            </Header>
            <Drawer className="header-links" title={<Link className="header-links" to="/">Justin Garcia</Link>}>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <a href="https://github.com/justgarcia5" rel="noopener noreferrer" target="_blank">GitHub</a>
                <Link to="/about">About</Link>
                <Link to="/projects2">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <Routes />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
