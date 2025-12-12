import React from 'react'
import { useState } from 'react'

const Day = () => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    const today = new Date().getDay()

    const [day,setDay] = useState(days[today])
  return (
    <div>
      <h1>Today is: {day}</h1>
    </div>
  )
}

export default Day