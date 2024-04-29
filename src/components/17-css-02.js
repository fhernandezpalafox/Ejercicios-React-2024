import React from 'react';

function Css02() {
  const articulos = [
    { codigo: 1, descripcion: 'papas', precio: 12.52, stock: 1 },
    { codigo: 2, descripcion: 'naranjas', precio: 21, stock: 0 },
    { codigo: 3, descripcion: 'peras', precio: 18.20, stock: 0 },
    { codigo: 4, descripcion: 'duraznos', precio: 35, stock: 20 },
    { codigo: 5, descripcion: 'manzanas', precio: 123, stock: 100 }
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.codigo} className={articulo.stock === 0 ? 'faltastock' : ''}>
              <td>{articulo.codigo}</td>
              <td>{articulo.descripcion}</td>
              <td>{articulo.precio.toFixed(2)}</td>
              <td>{articulo.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>
        {`.faltastock {
          background-color: yellow;
          color: blue;
          font-style: italic;
        }`}
      </style>
    </div>
  );
}

export default Css02;
