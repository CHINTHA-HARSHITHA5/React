import React from 'react'
import { useState } from 'react'

const Usestate_example = () => {
    const [name,setName] = useState("")
    console.log(name)
  return (
    <div>
        <p>Your Name is: {name}</p>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default Usestate_example