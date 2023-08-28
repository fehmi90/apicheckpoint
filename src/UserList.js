import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [listusers, setListusers] = useState([]);

  useEffect(() => {
   
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
       
        setListusers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <h1> List of Users</h1>
      <ul>
        {listusers.map(user => (
          <li key={user.id}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
