import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return(
      <React.Fragment>
        <h4><b>{this.props.jobName} / {this.props.startYear} - {this.props.endYear}</b></h4>
        <ul>{this.props.jobDescription}</ul>
      </React.Fragment>
    )
  }
}

export default Experience;
