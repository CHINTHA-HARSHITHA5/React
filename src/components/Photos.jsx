import React, { useEffect,useState } from 'react';

const photos_api = "https://jsonplaceholder.typicode.com/photos";

const Photos = () => {
    const [data , setData] = useState([]);

    const photos_data = async () => {
        const response = await fetch(photos_api);
        const response_data = await response.json();
        setData(response_data);
    };

    useEffect(() => {
            photos_data();
        }, []);

        console.log(data);

  return (
    <div>
        <h1>This is photos component</h1>
        {data.map((c) => (
          <div key={c.id}>
            <div>"albumId":{c.albumId}</div>
            <div>"id:"{c.id}</div>
            <div>"title:"{c.title}</div>
            <div>"url:"{c.url}</div>
            <div>"thumbnailUrl:"{c.thumbnailUrl}</div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Photos;
