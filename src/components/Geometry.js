import React, { useState } from 'react';

const Geometry = () => {
  const [result, setResult] = useState('');

  const handleShapeCalculation = (shape) => {
    const side = parseFloat(document.getElementById('geometry-side')?.value) || 0;
    const length = parseFloat(document.getElementById('geometry-length')?.value) || 0;
    const width = parseFloat(document.getElementById('geometry-width')?.value) || 0;
    const base = parseFloat(document.getElementById('geometry-base')?.value) || 0;
    const height = parseFloat(document.getElementById('geometry-height')?.value) || 0;
    const radius = parseFloat(document.getElementById('geometry-radius')?.value) || 0;

    let res = '';

    switch (shape) {
      case 'square-area':
        if (isNaN(side) || side <= 0) {
          res = "Invalid input. Please enter a positive number.";
        } else {
          res = side * side;
        }
        break;
      case 'square-perimeter':
        if (isNaN(side) || side <= 0) {
          res = "Invalid input. Please enter a positive number.";
        } else {
          res = 4 * side;
        }
        break;
      case 'rectangle-area':
        if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
          res = "Invalid input. Please enter positive numbers for both length and width.";
        } else {
          res = length * width;
        }
        break;
      case 'rectangle-perimeter':
        if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
          res = "Invalid input. Please enter positive numbers for both length and width.";
        } else {
          res = 2 * (length + width);
        }
        break;
      case 'triangle-area':
        if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
          res = "Invalid input. Please enter positive numbers for both base and height.";
        } else {
          res = 0.5 * base * height;
        }
        break;
      case 'circle-area':
        if (isNaN(radius) || radius <= 0) {
          res = "Invalid input. Please enter a positive number.";
        } else {
          res = Math.PI * radius * radius;
        }
        break;
      case 'circle-circumference':
        if (isNaN(radius) || radius <= 0) {
          res = "Invalid input. Please enter a positive number.";
        } else {
          res = 2 * Math.PI * radius;
        }
        break;
      default:
        res = 'Invalid shape';
    }

    setResult(`Result: ${res}`);
  };

  return (
    <div>
      <h2>Geometry Calculations</h2>
      <div>
        <h3>Square</h3>
        <input id="geometry-side" type="number" placeholder="Side" />
        <button onClick={() => handleShapeCalculation('square-area')}>Area</button>
        <button onClick={() => handleShapeCalculation('square-perimeter')}>Perimeter</button>
      </div>
      <div>
        <h3>Rectangle</h3>
        <input id="geometry-length" type="number" placeholder="Length" />
        <input id="geometry-width" type="number" placeholder="Width" />
        <button onClick={() => handleShapeCalculation('rectangle-area')}>Area</button>
        <button onClick={() => handleShapeCalculation('rectangle-perimeter')}>Perimeter</button>
      </div>
      <div>
        <h3>Triangle</h3>
        <input id="geometry-base" type="number" placeholder="Base" />
        <input id="geometry-height" type="number" placeholder="Height" />
        <button onClick={() => handleShapeCalculation('triangle-area')}>Area</button>
      </div>
      <div>
        <h3>Circle</h3>
        <input id="geometry-radius" type="number" placeholder="Radius" />
        <button onClick={() => handleShapeCalculation('circle-area')}>Area</button>
        <button onClick={() => handleShapeCalculation('circle-circumference')}>Circumference</button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default Geometry;
