import React, { useState } from 'react';

function SelectMultiple() {
  const [dias, setDias] = useState([]);  // Estado inicial como un array vacío

  const handleChange = (event) => {
    // Convertir HTMLCollection a un array y luego filtrar los seleccionados
    const selectedOptions = Array.from(event.target.options).filter(option => option.selected);
    const selectedDays = selectedOptions.map(option => option.value);
    setDias(selectedDays);
  };

  return (
    <div>
      <p>
        <select 
          multiple={true} 
          value={dias}
          onChange={handleChange}
          size="7"  // Aumenta el tamaño para mostrar todas las opciones sin necesidad de desplazamiento
        >
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
      </p>
      <p>Día seleccionado: {dias.join(', ')}</p>  // Muestra los días seleccionados separados por comas
    </div>
  );
}

export default SelectMultiple;
