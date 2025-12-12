import React from 'react'
import { useState } from 'react'

const Increment_decrement = () => {
    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = () =>{
        setCount(count-1)
    }

    const reset = ()=>{
        setCount(0)
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button><br/>
      <button onClick={decrement} >Decrement</button><br/>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Increment_decrement