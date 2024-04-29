import React, { useState } from 'react';

function IfApp() {
  const [edad, setEdad] = useState(0);

  return (
    <div>
      Ingrese una edad:
      <input
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      {edad >= 18 && <p>Es mayor de edad.</p>}
    </div>
  );
}

export default IfApp;
