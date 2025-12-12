import React from 'react'
import { useState } from 'react'

const Usestate_hook = () => {
const start = new Date(Date.now());
const date = start.toString();
  return (
    <div>
      <h1>{date}</h1>
    </div>
  )
}

export default Usestate_hook