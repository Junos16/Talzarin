import React, { useState } from 'react';

function Tuning() {
  const [division, setDivision] = useState(12); // Default to 12 divisions
  const [centValues, setCentValues] = useState([]);

  const calculateCentValues = () => {
    const centStep = 1200 / division;
    const centArray = [];

    for (let i = 0; i < division; i++) {
      const centValue = i * centStep;
      centArray.push(centValue);
    }

    setCentValues(centArray);
  };

  return (
    <div>
      <label>Enter the number of divisions of an octet (EDO):</label>
      <input
        type="number"
        value={division}
        onChange={(e) => setDivision(e.target.value)}
      />
      <button onClick={calculateCentValues}>Calculate Cent Values</button>
      <div>
        <h2>Cent Values:</h2>
        <ul>
          {centValues.map(cent => (
            <tr>
              <td>{cent}</td>
              <td>{cent*(256/1200)}</td>
            </tr> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tuning;
