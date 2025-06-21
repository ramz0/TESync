import './ProfesorStyle.css'
import { useState } from 'react';

import CardAlumno from '../../components/infocard/CardAlumno.jsx';
import ListaMateriasProfesor from '../../components/ListaMateriasProfesor/ListaMateriasProfesor.jsx';
import Dashboard from '../dashboard/Dashboard';
import CalificacionesAlumnos from '../../components/CalificacionesAlumnos/CalificacionesAlumnos.jsx';

const Profesor = () => {
  const [editarCalificaciones, setEditiarCalificaciones] = useState(false);

  const mostrarComponente = () => {
    setEditiarCalificaciones(!editarCalificaciones)
    console.log(`Se cambio el valor de editarCalificaicones: ${editarCalificaciones}`)
  }

  return (
    <main className='fondo-Profesor'>
      <Dashboard />
      {/* <CardAlumno /> */}
      <ListaMateriasProfesor mostrarComponente={mostrarComponente}/>
      <button onClick={mostrarComponente}>Show</button>
      {editarCalificaciones ? (<CalificacionesAlumnos />) : (<></>)}
    </main>
  );
}

export default Profesor;