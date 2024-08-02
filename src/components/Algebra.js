import React, { useState } from 'react';
import nerdamer from 'nerdamer/all.min';

const Algebra = () => {
  const [expression, setExpression] = useState('');
  const [variable, setVariable] = useState('');
  const [solution, setSolution] = useState('');

  const handleSolve = () => {
    try {
      // Use nerdamer to solve the equation
      const result = nerdamer.solve(expression, variable).toString();
      setSolution(result);
    } catch (error) {
      setSolution('Error solving equation');
    }
  };

  return (
    <div>
      <h2>Algebra Solver</h2>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="Enter equation (e.g., 2*x + 3 = 0)"
      />
      <input
        type="text"
        value={variable}
        onChange={(e) => setVariable(e.target.value)}
        placeholder="Variable to solve for (e.g., x)"
      />
      <button onClick={handleSolve}>Solve</button>
      <p>Solution: {solution}</p>
    </div>
  );
};

export default Algebra;
