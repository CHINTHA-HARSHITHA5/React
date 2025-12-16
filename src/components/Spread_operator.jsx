import React from 'react'

const Spread_operator = () => {

    const num1 = [1,2,3,4,5]
    const num2 = [6,7,8,9,10]
    const num3 = [11,12,13,14,15]
    const num4 = [16,17,18,19,20]

    const number = [...num1,...num2,...num3,...num4]

    console.log(number)
  return (
    <div>
        <h1>Number List</h1>
      {number.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  )
}

export default Spread_operator