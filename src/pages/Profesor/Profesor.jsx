import './ProfesorStyle.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import CardAlumno from '../../components/CardAlumno/CardAlumno.jsx';
import ListaMateriasProfesor from '../../components/ListaMateriasProfesor/ListaMateriasProfesor.jsx';
import TopBar from '../../components/TopBar/TopBar';

const Profesor = () => {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [editarCalificaciones, setEditiarCalificaciones] = useState(false);
  const [ocultarBtn, setOcultarBtn] = useState(false);
  const [iconBar, setIconBar] = useState("");
  
  const togglePerfil = () => {
    setMostrarPerfil(!mostrarPerfil);
  };

  const mostrarComponente = () => setEditiarCalificaciones(true)

  const mostrarOcultarComponente = () => {
    setEditiarCalificaciones(!editarCalificaciones)
    setOcultarBtn(true)
    setIconBar(editarCalificaciones?"hide-bar":"")
  } 

  return (
    <main className='fondo-Profesor'>
      <TopBar onPerfilToggle={togglePerfil} />
      {mostrarPerfil && (
          <div className="card-alumno-container">
            <CardAlumno estadoPerfil={togglePerfil} />
          </div>
        )}
      <ListaMateriasProfesor mostrarComponente={mostrarComponente}/>
      {ocultarBtn||editarCalificaciones ? (
        <button data-aos="fade-up" className={'show-bar ' + iconBar} onClick={mostrarOcultarComponente}>
          <FontAwesomeIcon icon={editarCalificaciones ? faAngleUp : faAngleDown} />
        </button>
      ) :(<></>)}
      {editarCalificaciones ? (<CalificacionesAlumnos />) : (<></>)}
    </main>
    
  );
};

export default Profesor;