import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HolaMundo from './components/01-holamundo';
import Modelo from './components/02-modelos';
import Contador from './components/03-contador';
import IfApp from './components/04-if';
import Lista from './components/05-listas';
import ListaDinamica from './components/06-lista-dinamica';
import IfDigitos from './components/07-if-digitos';
import UsoMap from './components/08-map';
import EventoFormulario from './components/09-evento-form';
import Formularios10 from './components/10-formularios';
import Formularios11 from './components/11-formularios';
import CheckBoxForm from './components/12-formularios';
import SelectFormulario from './components/13-select-formulario';
import SelectMultiple from './components/14-select-multiple';
import Concatenacion from './components/15-concatenacion-compadas';
import Css01 from './components/16-css-01';
import Css02 from './components/17-css-02';
import AjaxEjemplo from './components/18-ajax';
import Componente01 from './components/19-componentes01';
import Componente02 from './components/20-componentes02';
import Componente03 from './components/21-componentes03';
import ContenedorSelectorNum from './components/22-componentes04';
import ContenedorDiasSemana from './components/23-componentes05';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/HolaMundo">01 - Hola Mundo</Link>
            </li>
            <li>
              <Link to="/Modelo">02 - Modelo</Link>
            </li>
            <li>
              <Link to="/Contador">03 - Contador</Link>
            </li>
            <li>
              <Link to="/IfApp">04 - if</Link>
            </li>
            <li>
              <Link to="/Lista">05 - Lista</Link>
            </li>
            <li>
              <Link to="/ListaDinamica">06 - Lista Dinamica</Link>
            </li>
            <li>
              <Link to="/IfDigitos">07 - if Digitos</Link>
            </li>
            <li>
              <Link to="/UsoMap">08 - Uso Map</Link>
            </li>
            <li>
              <Link to="/EventoFormulario">09 - Evento Formulario</Link>
            </li>
            <li>
              <Link to="/Formularios10">10 - Formulario</Link>
            </li>
            <li>
              <Link to="/Formularios11">11 - Formulario</Link>
            </li>
            <li>
              <Link to="/CheckBoxForm">12 - CheckBox Form</Link>
            </li>
            <li>
              <Link to="/SelectFormulario">13 - Select Formulario</Link>
            </li>
            <li>
              <Link to="/SelectMultiple">14 - Select Multiple</Link>
            </li>
            <li>
              <Link to="/Concatenacion">15 - Concatenacion</Link>
            </li>
            <li>
              <Link to="/Css01">16 - Css 01</Link>
            </li>
            <li>
              <Link to="/Css02">17 - Css 02</Link>
            </li>
            <li>
              <Link to="/AjaxEjemplo">18 - Ajax Ejemplo</Link>
            </li>
            <li>
              <Link to="/Componente01">19 - Componente 01</Link>
            </li>
            <li>
              <Link to="/Componente02">20 - Componente 02</Link>
            </li>
            <li>
              <Link to="/Componente03">21 - Componente 03</Link>
            </li>
            <li>
              <Link to="/ContenedorSelectorNum">22 - Contenedor Selector Num</Link>
            </li>
            <li>
              <Link to="/ContenedorDiasSemana">23 - Contenedor Dias Semana</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/HolaMundo" element={<HolaMundo />} />
          <Route path="/Modelo" element={<Modelo />} />
          <Route path="/Contador" element={<Contador />} />
          <Route path="/IfApp" element={<IfApp />} />
          <Route path="/Lista" element={<Lista />} />
          <Route path="/ListaDinamica" element={<ListaDinamica />} />
          <Route path="/IfDigitos" element={<IfDigitos />} />
          <Route path="/UsoMap" element={<UsoMap />} />
          <Route path="/EventoFormulario" element={<EventoFormulario />} />
          <Route path="/Formularios10" element={<Formularios10 />} />
          <Route path="/Formularios11" element={<Formularios11 />} />
          <Route path="/CheckBoxForm" element={<CheckBoxForm />} />
          <Route path="/SelectFormulario" element={<SelectFormulario />} />
          <Route path="/SelectMultiple" element={<SelectMultiple />} />
          <Route path="/Concatenacion" element={<Concatenacion />} />
          <Route path="/Css01" element={<Css01 />} />
          <Route path="/Css02" element={<Css02 />} />
          <Route path="/AjaxEjemplo" element={<AjaxEjemplo />} />
          <Route path="/Componente01" element={<Componente01 />} />
          <Route path="/Componente02" element={<Componente02 />} />
          <Route path="/Componente03" element={<Componente03 />} />
          <Route path="/ContenedorSelectorNum" element={<ContenedorSelectorNum />} />
          <Route path="/ContenedorDiasSemana" element={<ContenedorDiasSemana />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
