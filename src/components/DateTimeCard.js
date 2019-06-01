import React from 'react';

const DateTimeCard = props => {
  let { timezone, date} = props;
  let newTimezone = timezone === 'America/Los_Angeles' ? 'Los Angeles' : 'New York';
  let monthFix = date[5] === 0 ? date[5] : null;

  return (
    <div className='date-card-div'>
      <div onClick={props.DateTimeToggle} className='date-card-container'>
        <h3>{newTimezone}</h3>
        <p>{monthFix}{date[6]}-{date[8]}{date[9]}-{date[0]}{date[1]}{date[2]}{date[3]}</p>
        <p>{date[11]}{date[12]}:{date[14]}{date[15]}</p>
      </div>
    </div>
  )
}

export default DateTimeCard;
