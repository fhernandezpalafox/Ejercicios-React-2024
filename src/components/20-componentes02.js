import React from 'react';

// Definimos el componente HolaMundo con props para color y tamaño
function HolaMundo({ color, size }) {
  return (
    <div>
      <p style={{ color: color, fontSize: size }}>Hola mundo</p>
    </div>
  );
}

function Componente02() {
  return (
    <div>
      <HolaMundo color="blue" size="35px" />
      <HolaMundo color="red" size="55px" />
    </div>
  );
}

export default Componente02;
