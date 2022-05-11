import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';

function App() {

  let [input, setInput] = useState();

  const addInput = (val) => {
    setInput(input + val);
  }

  const resetInput = () => {
    setInput(input = "");
  }

  const resolveOperation = () => {
    if (input) {
      const result = eval(input);
      setInput(input = result);
    } else {
      alert("You need to provide a math expression first")
    }
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img alt="freeCodeCamp Logo" src="/images/freecodecamp-logo.png" className="freecodecamp-logo"/>
      </div>
      <div className="calculator-container">
        <Screen input={input}/>
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={resolveOperation}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton handleClick={resetInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;