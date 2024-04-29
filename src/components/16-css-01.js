import React, { useState } from 'react';

function Css01() {
  const [tamañoFuente, setTamañoFuente] = useState(20); // Estado para el tamaño de la fuente
  const [colorParrafo, setColorParrafo] = useState('#000'); // Estado para el color del párrafo

  return (
    <div>
      <p>
        Tamaño de la fuente:
        <input 
          type="range" 
          value={tamañoFuente}
          onChange={e => setTamañoFuente(e.target.value)}
          min="10" 
          max="100"
        />
        {tamañoFuente}
      </p>
      <p>
        Color:
        <input 
          type="color" 
          value={colorParrafo}
          onChange={e => setColorParrafo(e.target.value)}
        />
      </p>
      <p style={{ fontSize: `${tamañoFuente}px`, color: colorParrafo }}>
        Párrafo de prueba
      </p>
    </div>
  );
}

export default Css01;
