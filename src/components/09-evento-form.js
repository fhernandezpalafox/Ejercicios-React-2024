import React, { useState } from 'react';

function EventoFormulario() {
  // Estado para los artículos y para cada campo del formulario
  const [articulos, setArticulos] = useState([
    { codigo: 1, descripcion: 'papas', precio: 34 }
  ]);
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const agregarArticulo = (e) => {
    e.preventDefault(); // Previene la recarga de la página

    // Añade un nuevo artículo a la lista
    setArticulos([...articulos, { codigo, descripcion, precio: Number(precio) }]);

    // Limpia los campos del formulario
    setCodigo('');
    setDescripcion('');
    setPrecio('');
  };

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
      <form onSubmit={agregarArticulo}>
        <p>
          Ingrese código:<input type="number" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        </p>
        <p>
          Ingrese descripción:<input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </p>
        <p>
          Ingrese precio:<input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </p>
        <p><input type="submit" value="Agregar" /></p>
      </form>
    </div>
  );
}

export default EventoFormulario;
