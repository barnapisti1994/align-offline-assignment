import React from 'react';

function Cell({ column, isActive, row }) {
  return <div className={`grid-item ${isActive ? "active-item" : ""}`} style={{gridColumn: `${column} / span 1`, gridRow: `${row} / span 1`}} />
}

export default Cell;