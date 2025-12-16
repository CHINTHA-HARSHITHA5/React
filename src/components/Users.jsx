import React, { useEffect, useState } from "react";

const users_api = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [data, setData] = useState([]);

  const users_data = async () => {
    const response = await fetch(users_api);
    const response_data = await response.json();
    setData(response_data);
  };

  useEffect(() => {
    users_data();
  }, []);

  return (
    <div>
      <h1>Users Data</h1>
      <h2>count:{data.length}</h2>
      {data.map((user) => (
        <div key={user.id}>
          <div>ID: {user.id}</div>
          <div>Name: {user.name}</div>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>

          <h4>Address:</h4>
          <div>Street: {user.address.street}</div>
          <div>Suite: {user.address.suite}</div>
          <div>City: {user.address.city}</div>
          <div>Zipcode: {user.address.zipcode}</div>

          <h4>Geo Location:</h4>
          <div>Lat: {user.address.geo.lat}</div>
          <div>Lng: {user.address.geo.lng}</div>
          <div>Phone: {user.phone}</div>
          <div>Website: {user.website}</div>
          <h4>Company:</h4>
          <div>Company Name: {user.company.name}</div>
          <div>Catch Phrase: {user.company.catchPhrase}</div>
          <div>BS: {user.company.bs}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Users;
