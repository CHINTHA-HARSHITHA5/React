import React from 'react'

const Thirdchild = (props) => {
  return (
    <div>
      <h1>This is Third child component</h1>
      <h2>Employee Name:{props.employee.name}</h2>
      <h2>Emloyee place:{props.employee.place}</h2>
      <h3>Employee Role:{props.employee.role}</h3>
    </div>
  )
}

export default Thirdchild