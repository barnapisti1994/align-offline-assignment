import React from 'react';
import PropTypes from 'prop-types';

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

Results.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
}

export default Results;