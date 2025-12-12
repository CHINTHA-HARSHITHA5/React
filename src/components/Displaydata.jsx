import React from 'react'
import { userData } from './data'

const Displaydata = () => {
    console.log(userData)
  return (
    <div>
      {userData.map((user) => (
        <div key={user.id}>
          <div>UserId : {user.userId}</div>
          <div>Id: {user.id}</div>
          <div>Title: {user.title}</div>
          <div>Body: {user.body}</div>
        </div>
      ))}
    </div>
  )
}

export default Displaydata