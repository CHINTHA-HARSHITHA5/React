import React from 'react'

const Rest_operator = () => {

  const numbers = (a, b, ...rest) => {
    console.log(a)
    console.log(b)
    console.log(rest)

    return rest
  }

  const result = numbers(10, 20, 30, 40, 50)

  return (
    <div>
      <h1>Rest Operator Output</h1>

      {result.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  )
}

export default Rest_operator

