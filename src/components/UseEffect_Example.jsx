import React from 'react'
import { useState,useEffect } from 'react'

 const UseEffect_Example = () => {
     const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("component rerendered")
    })

     const increment = () =>{
         setCount(count+1)
     }
   return (
     <div>
         <h1>Count:{count}</h1>
       <button onClick={increment}>Increment</button>
     </div>
   )
 }

export default UseEffect_Example