import React, { useState } from 'react';

function UsoMap() {
  // Inicializa el estado con los artículos
  const [articulos, setArticulos] = useState([
    { codigo: 1, descripcion: 'papas', precio: 12.52 },
    { codigo: 2, descripcion: 'naranjas', precio: 21 },
    { codigo: 3, descripcion: 'peras', precio: 18.20 }
  ]);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.codigo}>
              <td>{articulo.codigo}</td>
              <td>{articulo.descripcion}</td>
              <td>{articulo.precio.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsoMap;
