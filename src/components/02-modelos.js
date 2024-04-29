import React, { useState } from 'react';

function Modelo() {
  const [nombre, setNombre] = useState('');

  return (
    <div>
      Ingrese su nombre:
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>{nombre}</p>
    </div>
  );
}

export default Modelo;
