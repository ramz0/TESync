import './ProfesorStyle.css'
<<<<<<< HEAD
import { useState } from 'react';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../../components/infocard/Infocard.jsx';
=======

import CardAlumno from '../../components/infocard/CardAlumno.jsx';
>>>>>>> temp-fixes
import ListaMateriasProfesor from '../../components/ListaMateriasProfesor/ListaMateriasProfesor.jsx';
import Dashboard from '../dashboard/Dashboard';
import CalificacionesAlumnos from '../../components/CalificacionesAlumnos/CalificacionesAlumnos.jsx';

const Profesor = () => {

  return (
    <main className='fondo-Profesor'>
      <Dashboard />
      {/* <CardAlumno /> */}
      <ListaMateriasProfesor />
      <CalificacionesAlumnos />
    </main>
  );
}

export default Profesor;