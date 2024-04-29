import React, { useState } from 'react';

function ListaDinamica() {
  const [actividad, setActividad] = useState('');
  const [actividades, setActividades] = useState([]);

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      setActividades([...actividades, actividad]);
      setActividad('');
    }
  };

  return (
    <div>
      Nueva actividad:
      <input
        type="text"
        value={actividad}
        onChange={(e) => setActividad(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <ol>
        {actividades.map((actividad, index) => (
          <li key={index}>{actividad}</li>
        ))}
      </ol>
    </div>
  );
}

export default ListaDinamica;
