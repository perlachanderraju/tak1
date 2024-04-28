import React, { useState } from 'react';
import { search } from '../Api';

function SearchBar({ onResults }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await search(query);
    onResults(results);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;