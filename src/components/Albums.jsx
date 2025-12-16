import React, { useEffect, useState } from 'react'

const albums_api="https://jsonplaceholder.typicode.com/albums"

const Albums = () => {
    const [data, setData] = useState([]);

    const albums_data = async () =>{
        const response = await fetch(albums_api);
        const response_data = await response.json();
        setData(response_data);
    };

    useEffect(() => {
        albums_data();
    }, []);
    console.log(data);
    
  return (
    <div>
        <h1>This is Albums component</h1>
        <h2>Total albums:{data.length}</h2>
        {data.map((c) => (
            <div key={c.id}>
                <div>"userId:"{c.userId}</div>
                <div>"id:"{c.id}</div>
                <div>"title:"{c.title}</div>
                <hr/>
            </div>
        ))}
    </div>
  );
};

export default Albums
