import './ProfesorStyle.css'

import CardAlumno from '../../components/infocard/CardAlumno.jsx';
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