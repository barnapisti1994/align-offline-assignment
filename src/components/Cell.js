import React from 'react';
import PropTypes from 'prop-types';


function Cell({ column, isActive, row }) {
  return <div className={`grid-item ${isActive ? "active-item" : ""}`} style={{gridColumn: `${column} / span 1`, gridRow: `${row} / span 1`}} />
}

Cell.propTypes = {
  column: PropTypes.number,
  isActive: PropTypes.bool,
  row: PropTypes.number,
}

export default Cell;