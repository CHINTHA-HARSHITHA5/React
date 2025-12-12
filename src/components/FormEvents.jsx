import React from 'react'
import { useState } from 'react'

const FormEvents = () => {
    const [name,setName] = useState("")
    const [details,setDetails] = useState()

    const getname = (event)=>{
        setName(event.target.value)
    }

    const mydetails = (e)=>{
        setDetails(name)
    }
  return (
    <div>
        <h1>Hello,{details}</h1>
      <div>
        <input type="text" placeholder='Enter your Name' onChange={getname} />
      </div>
      <div>
        <button onClick={mydetails}>Submit</button>
      </div>
    </div>
  )
}

export default FormEvents