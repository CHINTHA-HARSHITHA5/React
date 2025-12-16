import React, { useEffect, useState } from 'react'

const data_list = "https://jsonplaceholder.typicode.com/posts"

const UserData = () => {
  const [data, setData] = useState([])

  const userdata = async () => {
    const response = await fetch(data_list)
    const newdata = await response.json()   // FIXED
    setData(newdata)
  }

  useEffect(() => {
    userdata()  // FIXED: call the function
  }, [])

  return (
    <div>
      <h2>Total userdata:{data.length}</h2>
      {
        data.map(item => (
          <div key={item.id}>
            <div>"userId":{item.userId}</div>
            <div>"id":{item.id}</div>
            <div>"title":{item.title}</div>
            <div> "body":{item.body}</div>
          </div>
        ))
      }
    </div>
  )
}

export default UserData