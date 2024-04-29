import React from 'react';

// Definimos un componente funcional que recibe props
function Articulos({ datos }) {
  return (
    <div>
      <table border="0">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((articulo) => (
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

function Componentes03() {
  // Los datos se definen como una constante dentro del componente principal
  const datos = [
    { codigo: 1, descripcion: 'papas', precio: 12.52 },
    { codigo: 2, descripcion: 'naranjas', precio: 21 },
    { codigo: 3, descripcion: 'peras', precio: 18.20 }
  ];

  return (
    <div>
      <Articulos datos={datos} />
    </div>
  );
}

export default Componentes03;
