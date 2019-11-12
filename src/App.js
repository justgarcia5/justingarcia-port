import React, { Component } from 'react';
import './App.css';
import Routes from './components/routes';
// import scrollToComponent from 'react-scroll-to-component';

import Nav from './components/navbar'
// import Projects from './components/projects'
// import LandingPage from './components/landingpage'


class App extends Component {
  render() {
    return (
      <div className="app">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" rel="stylesheet"/>
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
