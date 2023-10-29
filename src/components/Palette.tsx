import React, { useState } from 'react';

function Tuning() {
  const [division, setDivision] = useState(12);
  const [tuningData, setTuningData] = useState([]);

  const calculateTuningData = () => {
    const centStep = 1200 / division;
    const hues = Array.from({ length: division }, (_, i) => Math.round((i * 360) / division));

    const data = Array.from({ length: division }, (_, i) => ({
      index: i + 1,
      centValue: i * centStep,
      hue: hues[i],
    }));

    setTuningData(data);
  };

  return (
    <div>
      <label>Enter the number of divisions of an octet (EDO):</label>
      <input
        type="number"
        value={division}
        onChange={(e:any) => setDivision(e.target.value)}
      />
      <button onClick={calculateTuningData}>Generate Tuning</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Cent Value</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {tuningData.map((item) => (
              <tr key={item.index}>
                <td>{item.index}</td>
                <td>{item.centValue}</td>
                <td>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      backgroundColor: `hsl(${item.hue}, 100%, 50%)`,
                    }}
                  ></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tuning;
