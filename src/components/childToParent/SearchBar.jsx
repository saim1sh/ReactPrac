import React from 'react'

export default function SearchBar({ onSearch }) {
   
  function handleChange(e) {
    onSearch(e.target.value);
  }

  return <input type="text" onChange={handleChange} />;
}
