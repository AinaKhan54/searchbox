// src/App.js

import React, { useEffect, useState } from 'react';
import UserData from './UserData';
import { containerStyle, headerStyle, tableStyle, thStyle, tdStyle, rowStyle } from './styles';  // Corrected import statement

const API = 'https://api.restful-api.dev/objects';
const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>React Table</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Id</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Color</th>
            <th style={thStyle}>Capacity (GB)</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Generation</th>
            <th style={thStyle}>CPU Model</th>
            <th style={thStyle}>Hard Disk Size</th>
            <th style={thStyle}>Strap Colour</th>
            <th style={thStyle}>Case Size</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Screen Size</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} rowStyle={rowStyle} tdStyle={tdStyle} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
