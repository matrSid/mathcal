import React, { useState } from 'react';

const Arithmetic = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    if (isNaN(number1) || isNaN(number2)) {
      res = 'Invalid input. Please enter numbers.';
    } else {
      switch (operation) {
        case 'add':
          res = number1 + number2;
          break;
        case 'sub':
          res = number1 - number2;
          break;
        case 'mul':
          res = number1 * number2;
          break;
        case 'div':
          res = number2 === 0 ? 'Cannot divide by zero.' : number1 / number2;
          break;
        default:
          res = 'Invalid operation';
      }
    }
    setResult(`Result: ${res}`);
  };

  return (
    <div>
      <h2>Arithmetic Operations</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
      <button onClick={() => handleOperation('add')}>Add</button>
      <button onClick={() => handleOperation('sub')}>Subtract</button>
      <button onClick={() => handleOperation('mul')}>Multiply</button>
      <button onClick={() => handleOperation('div')}>Divide</button>
      <p>{result}</p>
    </div>
  );
};

export default Arithmetic;
