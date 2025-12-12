import React, { useEffect, useState } from 'react';

const todos_api="https://jsonplaceholder.typicode.com/todos";

const Todos = () => {
    const [data, setData] = useState([]);

    const todos_data = async () =>{
        const response = await fetch(todos_api);
        const response_data = await response.json();
        setData(response_data);
    };

    useEffect(() => {
        todos_data();
    }, []);
    console.log(data);
    
  return (
    <div>
        <h1>This is Todos component</h1>
        {data.map((c) => (
            <div key={c.id}>
                <div>"userId:"{c.userId}</div>
                <div>"id:"{c.id}</div>
                <div>"title:"{c.title}</div>
                <div>Completed: {c.completed ? "True" : "False"}</div>
                <hr/>
            </div>
        ))}
    </div>
  );
};

export default Todos;
