import React, { Component } from 'react';

class Education extends Component {
  render() {
    return(
      <React.Fragment>
        <h4><b>{this.props.schoolName} / {this.props.startYear} - {this.props.endYear}</b></h4>
        <ul>{this.props.schoolDescription}</ul>
      </React.Fragment>
    )
  }
}

export default Education;
