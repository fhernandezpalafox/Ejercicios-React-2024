import React, { useState } from 'react';

function IfDigitos() {
  const [numero, setNumero] = useState(1);

  const getDigitText = () => {
    if (numero <= 9) return 'Tiene un dígito';
    if (numero <= 99) return 'Tiene dos dígitos';
    return 'Tiene tres dígitos';
  };

  return (
    <div>
      <p>Ingrese un valor entre 1 y 100:
        <input 
          type="number" 
          value={numero} 
          onChange={e => setNumero(e.target.value)} 
          min="1" 
          max="100"
        />
      </p>
      <p>{getDigitText()}</p>
    </div>
  );
}

export default IfDigitos;
