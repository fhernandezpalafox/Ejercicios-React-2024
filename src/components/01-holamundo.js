import React, { useState } from 'react';

function HolaMundo() {
  const [mensaje, setMensaje] = useState('hola mundo React');

  return (
    <div>{mensaje}</div>
  );
}

export default HolaMundo;
