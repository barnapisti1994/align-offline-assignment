import React from 'react';

function Form({ size, setSize, stepLimit, setStepLimit, restart, reset }) {
  return(
    <div className="form">
      <div className="input-container">
        <label>Grid size</label>
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Keypress limit</label>
        <input type="text" value={stepLimit} onChange={(e) => setStepLimit(e.target.value)} />
      </div>

      <button onClick={reset}>Reset parameters</button>
      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default Form;