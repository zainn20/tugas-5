import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function User() {
  const { email,name } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const id = query.get('id');

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
   alert(`You searched for: ${searchTerm}`);
  };

  return (
    <div>
      <h2>NAME:{name}</h2>
      <p>User : <code>{email}</code></p>
      <p>ID : {id}</p>

      <div style={{ marginTop: '20px'}}>
        <input type="text" 
         placeholder="search"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         />
         <button onClick={ handleSearch}>search</button>
      </div>
    </div>
  );
}

export default User;