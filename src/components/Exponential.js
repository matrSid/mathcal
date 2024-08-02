import React, { useState } from 'react';

const Exponential = () => {
  const [result, setResult] = useState('');

  const calculateExponential = (type) => {
    const base = parseFloat(document.getElementById('exponential-base')?.value);
    const exp = parseInt(document.getElementById('exponential-exp')?.value);
    const num = parseFloat(document.getElementById('exponential-num')?.value);
    const start = parseInt(document.getElementById('exponential-start')?.value);
    const end = parseInt(document.getElementById('exponential-end')?.value);

    let res;
    if (type === 'single') {
      if (isNaN(base) || isNaN(exp)) {
        res = "Invalid input. Please enter numbers.";
      } else {
        res = Math.pow(base, exp);
      }
    } else if (type === 'square-single') {
      if (isNaN(num)) {
        res = "Invalid input. Please enter a number.";
      } else {
        res = num * num;
      }
    } else if (type === 'square-range') {
      if (isNaN(start) || isNaN(end)) {
        res = "Invalid input. Please enter numbers.";
      } else {
        res = [];
        for (let i = start; i <= end; i++) {
          res.push(`${i}^2 = ${i * i}`);
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
      <h2>Exponential Calculations</h2>
      <div>
        <h3>Single Exponential</h3>
        <input id="exponential-base" type="number" placeholder="Base" />
        <input id="exponential-exp" type="number" placeholder="Exponent" />
        <button onClick={() => calculateExponential('single')}>Calculate</button>
      </div>
      <div>
        <h3>Square of a Number</h3>
        <input id="exponential-num" type="number" placeholder="Number" />
        <button onClick={() => calculateExponential('square-single')}>Calculate</button>
      </div>
      <div>
        <h3>Square of a Range</h3>
        <input id="exponential-start" type="number" placeholder="Start" />
        <input id="exponential-end" type="number" placeholder="End" />
        <button onClick={() => calculateExponential('square-range')}>Calculate Range</button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default Exponential;
