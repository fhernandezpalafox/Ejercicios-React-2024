import React from 'react';

// Definimos el componente HolaMundo con props
function HolaMundo({ idioma }) {
  return (
    <div>
      {idioma === 'castellano' && <p>Hola mundo</p>}
      {idioma === 'ingles' && <p>Hello world</p>}
    </div>
  );
}

function Componente01() {
  return (
    <div>
      <HolaMundo idioma="ingles" />
      <HolaMundo idioma="castellano" />
    </div>
  );
}

export default Componente01;
