import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return(
      <React.Fragment>
        <h4><b>{this.props.jobName}, {this.props.jobTitle} / {this.props.startYear} - {this.props.endYear}</b></h4>
        {this.props.jobDescription}
      </React.Fragment>
    )
  }
}

export default Experience;
