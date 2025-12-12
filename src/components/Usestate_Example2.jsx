import React, { useEffect, useState } from 'react'

const Usestate_Example2 = () => {
    const [name,setName] = useState("")

    useEffect(()=>{
        console.log("Name change:",name);
    },[])

    // Run only once when 'name' changes
  return (
    <div>
      <input type="text" placeholder='Type yourname' onChange={(e)=>(e.target.value)}  />
    </div>
  )
}

export default Usestate_Example2