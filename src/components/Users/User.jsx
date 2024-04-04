import React, { useState, useEffect } from 'react';
import './user.css';
const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    function fetchData(){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
    }
    fetchData()
  }, []);
  return (
    <div className="main">
      
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="user-cards">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Website:</strong> {user.website}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
              <a href={`https://${user.website}`}>Visit Website</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default User;