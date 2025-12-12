import React from 'react'

const Firstchild = (props) => {
  return (
    <div>
      <h1>This is First child component</h1>
      <h2>My name is : {props.name}</h2>
    </div>
  )
}

export default Firstchild