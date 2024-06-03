import React from 'react'
import moment from 'moment'

export const dateFormat = (date) =>{
    return moment(date).format('DD/MM/YYYY HH:mm:ss')
}
export const dateFormater = (date) =>{
    return moment(date).format('DD/MM/YYYY')
}

// A React component that displays the current date and time
const DateTimeDisplay = () => {
    const now = new Date();
    return (
      <div>
        <p>{dateFormat(now)}</p>
      </div>
    );
  };
  
  export default DateTimeDisplay;