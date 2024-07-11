import React from 'react';

const Table = ({ data, searchTerm, onSearchChange }) => {
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="text-center border-t">
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.age}</td>
              <td className="py-2 px-4">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
