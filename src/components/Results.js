import React from 'react';

function Results({ steps }) {
  const resultString = `[${steps.join(',')}]`;
  return (
    <div className="results">
      You went through the following cells:
      <div>
        {resultString}
      </div>
    </div>
  );
}

export default Results;