
import React from 'react'






function ResultsList({ results }) {
    return (
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title} - {result.description}</li>
        ))}
      </ul>
    );
  }
  export default ResultsList