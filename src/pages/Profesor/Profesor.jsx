import './ProfesorStyle.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import CardAlumno from '../../components/infocard/CardAlumno.jsx';
import ListaMateriasProfesor from '../../components/ListaMateriasProfesor/ListaMateriasProfesor.jsx';
import Dashboard from '../dashboard/Dashboard';
import CalificacionesAlumnos from '../../components/CalificacionesAlumnos/CalificacionesAlumnos.jsx';

const Profesor = () => {
  const [editarCalificaciones, setEditiarCalificaciones] = useState(false);
  const [ocultarBtn, setOcultarBtn] = useState(false);
  const [iconBar, setIconBar] = useState("");

  const mostrarComponente = () => setEditiarCalificaciones(true)

  const mostrarOcultarComponente = () => {
    setEditiarCalificaciones(!editarCalificaciones)
    setOcultarBtn(true)
    setIconBar(editarCalificaciones?"hide-bar":"")
  } 

  return (
    <main className='fondo-Profesor'>
      <Dashboard />
      {/* <CardAlumno /> */}
      <ListaMateriasProfesor mostrarComponente={mostrarComponente}/>
      {ocultarBtn||editarCalificaciones ? (
        <button data-aos="fade-up" className={'show-bar ' + iconBar} onClick={mostrarOcultarComponente}>
          <FontAwesomeIcon icon={editarCalificaciones ? faAngleUp : faAngleDown} />
        </button>
      ) :(<></>)}
      {editarCalificaciones ? (<CalificacionesAlumnos />) : (<></>)}
    </main>
  );
}

export default Profesor;