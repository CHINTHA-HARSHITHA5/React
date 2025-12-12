import React from 'react'

const Fourthchild = ({employee}) => {
    // Props destructuring
    const {name,place,role} = employee
  return (
    <div>
      <h1>This is fourthchild</h1>
      <h2>{name}</h2>
      <h2>{place}</h2>
      <h3>{role}</h3>
    </div>
  )
}

export default Fourthchild