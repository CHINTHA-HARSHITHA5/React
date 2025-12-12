import React from 'react'

const Fifthchild = () => {

    const arr = ["React","Angular","Vue","Python","Java","Dotnet","Javascript"]
  return (
    <div>
      <h1>This is Fifth child</h1>
      {arr.map((course,index)=>(
        <p key={index}>{course}</p>
      ))}
    </div>
  )
}

export default Fifthchild