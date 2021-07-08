import React, { useCallback, useEffect, useState } from 'react';

import Grid from './components/Grid';
import Form from './components/Form';
import Results from './components/Results';

import './App.css';

const DEFAULT_ACTIVE_ITEM = { row: 1, column: 1 };
const DEFAULT_SIZE = 10;
const DEFAULT_STEP_LIMIT = 10;
const DEFAULT_STEPS = [`{${DEFAULT_ACTIVE_ITEM.row},${DEFAULT_ACTIVE_ITEM.column}}`]

function App() {
  const [activeItem, setActiveItem] = useState(DEFAULT_ACTIVE_ITEM);
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [stepLimit, setStepLimit] = useState(DEFAULT_STEP_LIMIT);
  const [steps, setSteps] = useState(DEFAULT_STEPS);

  const restart = () => {
    setActiveItem(DEFAULT_ACTIVE_ITEM);
    setSteps(DEFAULT_STEPS);
  }

  const reset = () => {
    restart();
    setStepLimit(DEFAULT_STEP_LIMIT);
    setSize(DEFAULT_SIZE);
  }

  const handleSizeChange = (newSize) => {
    setSize(Number(newSize));
    restart();
  }

  const handleStepLimitChange = (newStepLimit) => {
    setStepLimit(Number(newStepLimit));
    restart();
  }

  const handleKeyUp = useCallback((e) => {
    const newActiveItem = { ...activeItem };

    switch (e.key) {
      case 'ArrowLeft':
        newActiveItem.column = Math.max(1, activeItem.column - 1);
        break;
      case 'ArrowRight':
        newActiveItem.column = Math.min(size, activeItem.column + 1);
        break;
      case 'ArrowUp':
        newActiveItem.row = Math.max(1, activeItem.row - 1);
        break;
      case 'ArrowDown':
        newActiveItem.row = Math.min(size, activeItem.row + 1);
        break;
      default:
        return;
    }

    setSteps([...steps, `{${newActiveItem.row},${newActiveItem.column}}`]);
    setActiveItem(newActiveItem);
  }, [activeItem, size, steps]);

  useEffect(() => {
    if(!stepLimit || steps.length < stepLimit + 1) {
      document.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [handleKeyUp, steps, stepLimit]);

  return (
    <div className="App">
      <Form 
        size={size}
        setSize={handleSizeChange} 
        stepLimit={stepLimit} 
        setStepLimit={handleStepLimitChange} 
        restart={restart}
        reset={reset}
      />
      <div className="grid-container">
        {
          stepLimit && steps.length === stepLimit + 1 ? <Results steps={steps} /> : <Grid size = {size} activeItem={activeItem} />
        }
      </div>
    </div>
  );
}

export default App;
