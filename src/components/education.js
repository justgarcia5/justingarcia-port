import React, { Component } from 'react';

class Education extends Component {
  render() {
    return(
      <React.Fragment>
        <h4><b>{this.props.schoolName} / {this.props.startYear} - {this.props.endYear}</b></h4>
        {this.props.schoolDescription}
      </React.Fragment>
    )
  }
}

export default Education;
