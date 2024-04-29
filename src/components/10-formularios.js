import React, { useState } from 'react';

function Formularios10() {
  const [estudios, setEstudios] = useState('Sin estudios');

  return (
    <div>
      <p>
        <input
          type="radio"
          value="Sin estudios"
          checked={estudios === 'Sin estudios'}
          onChange={(e) => setEstudios(e.target.value)}
          id="sinestudios"
        />
        <label htmlFor="sinestudios">Sin estudios</label>
      </p>
      <p>
        <input
          type="radio"
          value="Primarios"
          checked={estudios === 'Primarios'}
          onChange={(e) => setEstudios(e.target.value)}
          id="primarios"
        />
        <label htmlFor="primarios">Primarios</label>
      </p>
      <p>
        <input
          type="radio"
          value="Secundarios"
          checked={estudios === 'Secundarios'}
          onChange={(e) => setEstudios(e.target.value)}
          id="secundarios"
        />
        <label htmlFor="secundarios">Secundarios</label>
      </p>
      <p>
        <input
          type="radio"
          value="universitarios"
          checked={estudios === 'universitarios'}
          onChange={(e) => setEstudios(e.target.value)}
          id="universitarios"
        />
        <label htmlFor="universitarios">Universitarios</label>
      </p>
      <p>Sus estudios son: {estudios}</p>
    </div>
  );
}

export default Formularios10;
