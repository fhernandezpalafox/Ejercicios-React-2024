import React from 'react';

function DiasSemana({ seleccionado }) {
  const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: '#ff0', fontSize: '1.5rem' }}>
      {dias.map((dia) => (
        <div key={dia}>
          <span style={seleccionado === dia ? { background: '#000', color: '#fff' } : {}}>
            {dia}
          </span>
        </div>
      ))}
    </div>
  );
}

function ContenedorDiasSemana() {
  return (
    <div>
      <DiasSemana seleccionado="martes" />
    </div>
  );
}

export default ContenedorDiasSemana;
