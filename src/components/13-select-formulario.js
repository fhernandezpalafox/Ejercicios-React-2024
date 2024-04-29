import React, { useState } from 'react';

function SelectFormulario() {
  const [dia, setDia] = useState('');  // Estado inicial vacío, similar a Vue

  return (
    <div>
      <p>
        <select 
          value={dia} 
          onChange={(e) => setDia(e.target.value)}  // Actualiza el estado cuando cambia la selección
        >
          <option disabled value="">Seleccione un día</option>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
      </p>
      <p>Día seleccionado: {dia}</p>
    </div>
  );
}

export default SelectFormulario;
