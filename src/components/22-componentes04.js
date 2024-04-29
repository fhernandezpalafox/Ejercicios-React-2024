import React, { useState, useEffect } from 'react';

function SelectorNumerico({ valor, minimo, maximo }) {
  const [cant, setCant] = useState(valor);

  // Establece el valor inicial del contador basado en la prop 'valor'
  useEffect(() => {
    setCant(valor);
  }, [valor]);

  const incrementar = () => {
    if (cant < maximo) {
      setCant(cant + 1);
    }
  };

  const decrementar = () => {
    if (cant > minimo) {
      setCant(cant - 1);
    }
  };

  return (
    <div>
      <span style={{ width: '1rem', display: 'inline-block', background: '#ff0' }}>
        {cant}
      </span>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
}

function ContenedorSelectorNum() {
  return (
    <div>
      <SelectorNumerico valor={1} minimo={0} maximo={20} />
    </div>
  );
}

export default ContenedorSelectorNum;
