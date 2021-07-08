import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

function Grid({ size, activeItem }) {
  const rowsAndColumns = [...Array(size).keys()].map(item => item + 1);
  return <div className="grid" style={{gridTemplateRows: `repeat(${size}, 1fr)`, gridTemplateColumns: `repeat(${size}, 1fr)`}}>
    {
      rowsAndColumns.map((row) => 
        rowsAndColumns.map((column) => {
          const isActive = column === activeItem.column && row === activeItem.row;

          return <Cell key={`${row},${column}`} column={column} isActive={isActive} row={row} />
        })
      )
    }
  </div>
}

Grid.propTypes = {
  size: PropTypes.number,
  activeItem: PropTypes.shape({
    row: PropTypes.number,
    column: PropTypes.number,
  })
}

export default Grid;