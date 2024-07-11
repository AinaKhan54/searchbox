import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <FaSearch className="absolute top-3 left-3 text-gray-400" />
    </div>
  );
};

export default SearchBox;
