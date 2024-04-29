import React, { useState } from 'react';

function Formularios11() {
  const [terminos, setTerminos] = useState(false);

  return (
    <div>
      <p>
        <input
          type="checkbox"
          checked={terminos}
          onChange={(e) => setTerminos(e.target.checked)}
        />
        Acepto los términos y condiciones
      </p>
      {terminos && <button>Confirmar</button>}
    </div>
  );
}

export default Formularios11;
