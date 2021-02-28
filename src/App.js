import { useCallback, useState } from 'react';
import './App.css';
import flatDeepArray from './flatArray';

function App() {
  const [input, setInput] = useState([]);
  const [result, setResult] = useState([]);
  const [error, setError] = useState();

  const updateInput= ({ target: { value } }) => {
    try {
      let array = [];
      if (value && value.length > 0) {
        array = JSON.parse(value);
      }
      setInput(array);
    }
    catch(error) {
      setError(error.message);
    }
  }

  const calcFlatArray = useCallback((ev) => {
    try {

    }
    catch(error) {
      setError(error.message);
    }
    ev.preventDefault();
    setResult(flatDeepArray(input));
  }, [input]);

  return (
    <div className="App">
      <h1>Flatten array excercise</h1>
      <form onSubmit={calcFlatArray}>
        <label>Input array: (es: [1, 2, [["text"]], [true, false]])</label>
        <input defaultValue={input} onBlur={updateInput} />
        <button type="submit">Flat</button>
        <h2>Result:</h2>
        { 
          error ? 
          <p>{error}</p>
          :
          <p>[{result.join(',')}]</p>
        }
      </form>
    </div>
  );
}

export default App;
