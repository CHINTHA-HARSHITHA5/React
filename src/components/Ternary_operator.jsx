// condition = True / False

// condition? True:False

import React, { useState } from 'react'
import Firstcomponent from './Firstcomponent'
import Secondcomponent from './Secondcomponent'

const Ternary_operator = () => {
    // const [condition,setCondition] = useState(true)
    const [condition,setCondition] = useState(false)
    
  return (
    <div>
        <h1>Given Condition is : {condition?"This is true block":"This is false block"}</h1>
      <h1>{condition? <Firstcomponent/>:<Secondcomponent/>}</h1>
    </div>
  )
}

export default Ternary_operator