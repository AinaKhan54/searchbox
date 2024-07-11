// src/TableComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.restful-api.dev/objects');
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };
  return (
    <div>
      {(
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th colSpan={3}>  Data</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>color</th>
                <th></th>
                <th colspan={2}>capacity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.descripti0on}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default TableComponent;