import React, { useState } from 'react';

function CheckBoxForm() {
  const [lenguajes, setLenguajes] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // Agrega el lenguaje al array si está seleccionado
      setLenguajes([...lenguajes, value]);
    } else {
      // Remueve el lenguaje del array si se deselecciona
      setLenguajes(lenguajes.filter(lenguaje => lenguaje !== value));
    }
  };

  return (
    <div>
      <p><input type="checkbox" value="C++" onChange={handleCheckboxChange} checked={lenguajes.includes("C++")} />C++</p>
      <p><input type="checkbox" value="C" onChange={handleCheckboxChange} checked={lenguajes.includes("C")} />C</p>
      <p><input type="checkbox" value="C#" onChange={handleCheckboxChange} checked={lenguajes.includes("C#")} />C#</p>
      <p><input type="checkbox" value="Java" onChange={handleCheckboxChange} checked={lenguajes.includes("Java")} />Java</p>
      <p><input type="checkbox" value="Kotlin" onChange={handleCheckboxChange} checked={lenguajes.includes("Kotlin")} />Kotlin</p>
      <p><input type="checkbox" value="Python" onChange={handleCheckboxChange} checked={lenguajes.includes("Python")} />Python</p>
      <p><input type="checkbox" value="Ruby" onChange={handleCheckboxChange} checked={lenguajes.includes("Ruby")} />Ruby</p>
      <h3>Lenguajes seleccionados</h3>
      <ul>
        {lenguajes.map((lenguaje, index) => <li key={index}>{lenguaje}</li>)}
      </ul>
      <p>Cantidad de lenguajes que conoce: {lenguajes.length}</p>
    </div>
  );
}

export default CheckBoxForm;
