import React, { useState, useEffect } from 'react';

function AjaxEjemplo() {
  const [notas, setNotas] = useState([]);

  // Definimos un método para recuperar los posts
  const recuperarPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setNotas(data); // Actualizamos el estado con los datos recibidos
  };

  // Opcional: cargar los posts al cargar el componente
  useEffect(() => {
    //recuperarPost();
  }, []);

  return (
    <div>
      <button onClick={recuperarPost}>Recuperar Post</button>
      {notas.map(nota => (
        <div key={nota.id}>
          <h1>{nota.title}</h1>
          <p>{nota.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AjaxEjemplo;
