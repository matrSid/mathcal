import React, { useState } from 'react';
import { create, all } from 'mathjs';

const math = create(all);

const Calculus = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleIntegrate = () => {
    try {
      // Define the variable used in the integral
      const variable = 'x';

      // Compute the indefinite integral of the expression
      const integral = math.integrate(expression, variable);

      // Simplify and convert the result to a string
      const simplifiedResult = math.simplify(integral).toString();

      setResult(simplifiedResult);
    } catch (error) {
      setResult('Error computing integral');
    }
  };

  return (
    <div>
      <h2>Calculus Solver</h2>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="Enter expression (e.g., x^2 + 3*x + 2)"
      />
      <button onClick={handleIntegrate}>Integrate</button>
      <p>Integral: {result}</p>
    </div>
  );
};

export default Calculus;
