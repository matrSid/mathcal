import React, { useState } from 'react';

const SquareRoot = () => {
  const [result, setResult] = useState('');

  const calculateSqrt = (type) => {
    const num = parseFloat(document.getElementById('sqrt-num')?.value);
    const start = parseInt(document.getElementById('sqrt-start')?.value);
    const end = parseInt(document.getElementById('sqrt-end')?.value);

    let res;
    if (type === 'single') {
      if (isNaN(num)) {
        res = "Invalid input. Please enter a number.";
      } else {
        res = Math.sqrt(num);
      }
    } else if (type === 'range') {
      if (isNaN(start) || isNaN(end)) {
        res = "Invalid input. Please enter numbers.";
      } else {
        res = [];
        for (let i = start; i <= end; i++) {
          res.push(`√${i} = ${Math.sqrt(i)}`);
        }
        res = res.join("\n");
      }
    } else {
      res = 'Invalid type';
    }
    setResult(`Result:\n${res}`);
  };

  return (
    <div>
      <h2>Square Root Calculations</h2>
      <div>
        <h3>Single Number</h3>
        <input id="sqrt-num" type="number" placeholder="Number" />
        <button onClick={() => calculateSqrt('single')}>Calculate</button>
      </div>
      <div>
        <h3>Range of Numbers</h3>
        <input id="sqrt-start" type="number" placeholder="Start" />
        <input id="sqrt-end" type="number" placeholder="End" />
        <button onClick={() => calculateSqrt('range')}>Calculate Range</button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default SquareRoot;
