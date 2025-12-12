import React from 'react'

const Secondchild = (props) => {
  return (
    <div>
      <h1>This is Second child component</h1>
      <h2>My place is : {props.city}</h2>
    </div>
  )
}

export default Secondchild
