import React from 'react'

class DateApi extends React.Component {
  state = {
    date: {
      currentDateTime: '',
      dayOfTheWeek: '',
    }
  }

  componentDidMount = () => {
    fetch('http://worldclockapi.com/api/json/utc/now')
      .then(response => response.json())
      .then(date => this.setState({ date: date }))
  }

  render() {
    return (
      <div>
        <h3 className='date-api'>{this.state.date.currentDateTime} {this.state.date.dayOfTheWeek} </h3>
      </div>
    )
  }
}

export default DateApi
