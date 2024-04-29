import React, { useState, useEffect } from 'react';

function Concatenacion() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');

  // Usamos useEffect para actualizar el nombre completo cada vez que 'nombre' o 'apellido' cambian
  useEffect(() => {
    setNombreCompleto(`${nombre} ${apellido}`.trim());
  }, [nombre, apellido]);  // Dependencias en las que este efecto se re-ejecutará

  return (
    <div>
      <p>
        Ingrese su nombre:
        <input
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </p>
      <p>
        Ingrese su apellido:
        <input
          type="text"
          value={apellido}
          onChange={e => setApellido(e.target.value)}
        />
      </p>
      <p>Nombre completo: {nombreCompleto}</p>
    </div>
  );
}

export default Concatenacion;
