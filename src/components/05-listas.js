import React, { useState } from 'react';

function Lista() {
  const [lenguajes, setLenguajes] = useState(['C', 'C++', 'C#', 'Java', 'Ruby', 'Kotlin']);

  return (
    <ul>
      {lenguajes.map((lenguaje, index) => (
        <li key={index}>{lenguaje}</li>
      ))}
    </ul>
  );
}

export default Lista;
