import './ProfesorStyle.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import CalificacionesAlumnos from '../../components/CalificacionesAlumnos/CalificacionesAlumnos.jsx';
import CardAlumno from '../../components/CardAlumno/CardAlumno.jsx';
import ListaMateriasProfesor from '../../components/ListaMateriasProfesor/ListaMateriasProfesor.jsx';
import TopBar from '../../components/TopBar/TopBar';

const Profesor = () => {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [editarCalificaciones, setEditiarCalificaciones] = useState(false);
  const [ocultarBtn, setOcultarBtn] = useState(false);
  const [iconBar, setIconBar] = useState("");
  const [estadoCalificaciones, setEstadoCalificaciones] = useState("");
  const [datosMateria, setDatosMateria] = useState({nombreMateria:null, grupoMateria:null});
  
  const togglePerfil = () => setMostrarPerfil(!mostrarPerfil);

  const cambiarColorTabla = (estado) => setEstadoCalificaciones(estado == "pendiente" ? "calificaciones-pendientes":"")
  
  const mostrarComponente = () => setEditiarCalificaciones(true)

  const mostrarOcultarComponente = () => {
    setEditiarCalificaciones(!editarCalificaciones)
    setOcultarBtn(true)
    setIconBar(editarCalificaciones?"hide-bar":"")
  } 

  const preguntarPorDatosMateria = (datosRecibidosMateria) => {
    setDatosMateria(datosRecibidosMateria)
  }

  return (
    <main className='fondo-Profesor'>
      <br />
      <TopBar onPerfilToggle={togglePerfil} />
      {mostrarPerfil && (
          <div className="card-alumno-container">
            <CardAlumno estadoPerfil={togglePerfil} />
          </div>
        )}
      <ListaMateriasProfesor enviarDatosMateria={preguntarPorDatosMateria} mostrarComponente={mostrarComponente} datosMateria={datosMateria} cambiarColorTabla={cambiarColorTabla}/>
      {ocultarBtn||editarCalificaciones ? (
        <button data-aos="fade-up" className={'show-bar ' + iconBar} onClick={mostrarOcultarComponente}>
          <FontAwesomeIcon icon={editarCalificaciones ? faAngleUp : faAngleDown} />
        </button>
      ) :(<></>)}
      {editarCalificaciones ? (<CalificacionesAlumnos datosMateria={datosMateria} estadoCalificacionesTabla={estadoCalificaciones} />) : (<></>)}
    </main>
    
  );
};

export default Profesor;