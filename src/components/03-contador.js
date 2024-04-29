import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <button onClick={incrementar}>El contador vale: {contador}</button>
  );
}

export default Contador;
