import React, { useEffect, useState } from 'react';

const comments_api = "https://jsonplaceholder.typicode.com/comments";

const Comments = () => {
  const [data, setData] = useState([]);

  const comments_data = async () => {
    const response = await fetch(comments_api);
    const response_data = await response.json();
    setData(response_data);
  };

  useEffect(() => {
    comments_data();
  }, []);

  console.log(data)

  return (
    <div>
      <h1>This is Comments component</h1>
      {data.map((c) => (
        <div key={c.id}>
          <div>"postId":{c.postId}</div>
          <div>"id":{c.id}</div>
          <div>"name":{c.name}</div>
          <div>"email":{c.email}</div>
          <div>"body":{c.body}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Comments;