import React, { useState } from 'react';

const Pythagorean = () => {
  const [result, setResult] = useState('');

  const calculatePythagorean = (type) => {
    const leg1 = parseFloat(document.getElementById('pythagorean-leg1')?.value);
    const leg2 = parseFloat(document.getElementById('pythagorean-leg2')?.value);
    const hypotenuse = parseFloat(document.getElementById('pythagorean-hypotenuse')?.value);
    const leg = parseFloat(document.getElementById('pythagorean-leg')?.value);

    let res;
    if (type === 'hypotenuse') {
      if (isNaN(leg1) || isNaN(leg2)) {
        res = "Invalid input. Please enter numbers.";
      } else {
        res = Math.sqrt(leg1 * leg1 + leg2 * leg2);
      }
    } else if (type === 'leg') {
      if (isNaN(hypotenuse) || isNaN(leg)) {
        res = "Invalid input. Please enter numbers.";
      } else {
        res = Math.sqrt(hypotenuse * hypotenuse - leg * leg);
      }
    } else {
      res = 'Invalid type';
    }
    setResult(`Result: ${res}`);
  };

  return (
    <div>
      <h2>Pythagorean Theorem</h2>
      <div>
        <h3>Calculate Hypotenuse</h3>
        <input id="pythagorean-leg1" type="number" placeholder="Leg 1" />
        <input id="pythagorean-leg2" type="number" placeholder="Leg 2" />
        <button onClick={() => calculatePythagorean('hypotenuse')}>Calculate Hypotenuse</button>
      </div>
      <div>
        <h3>Calculate Leg</h3>
        <input id="pythagorean-hypotenuse" type="number" placeholder="Hypotenuse" />
        <input id="pythagorean-leg" type="number" placeholder="Leg" />
        <button onClick={() => calculatePythagorean('leg')}>Calculate Leg</button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default Pythagorean;
