import './ProfesorStyle.css';
import { useState } from 'react';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import CardAlumno from '../../components/CardAlumno/CardAlumno.jsx';
import ListaMateriasProfesor from '../../components/ListaMateriasProfesor/ListaMateriasProfesor.jsx';
import Dashboard from '../dashboard/Dashboard';
import BotonExportarExcel from '../../components/BotonExportarExcel/BotonExportarExcel';
import TablaProfesores from '../../components/TablaProfesores/TablaProfesores';
import TopBar from '../../components/TopBar/TopBar';

const initialData = [
  {
    grupo: '4851',
    alumnos: [
      {
        nombre: 'Ana Pérez',
        materias: [
          { nombre: 'Programacion web', calificaciones: [8, 9, 7] },
          { nombre: 'Base de datos', calificaciones: [7, 8, 9] },
          { nombre: 'Diseño web', calificaciones: [6, 7, 8] },
        ],
      },
      {
        nombre: 'Luis Gómez',
        materias: [
          { nombre: 'Programacion web', calificaciones: [10, 9, 10] },
          { nombre: 'Base de datos', calificaciones: [9, 9, 9] },
          { nombre: 'Diseño web', calificaciones: [7, 8, 9] },
        ],
      },
      {
        nombre: 'María López',
        materias: [
          { nombre: 'Programacion web', calificaciones: [7, 8, 9] },
          { nombre: 'Base de datos', calificaciones: [6, 5, 7] },
          { nombre: 'Diseño web', calificaciones: [8, 9, 8] },
        ],
      },
      {
        nombre: 'Pedro Martínez',
        materias: [
          { nombre: 'Programacion web', calificaciones: [5, 6, 4] }, 
          { nombre: 'Bases de datos', calificaciones: [7, 7, 6] }, 
          { nombre: 'Diseño web', calificaciones: [6, 6, 7] },  
        ],
      },
    ],
  },
  {
    grupo: '4852',
    alumnos: [
      {
        nombre: 'Carlos Ruiz',
        materias: [
          { nombre: 'Programacion web', calificaciones: [6, 7, 8] },
          { nombre: 'Base de datos', calificaciones: [9, 9, 10] },
          { nombre: 'Diseño web', calificaciones: [7, 8, 9] },
        ],
      },
      {
        nombre: 'Marta Díaz',
        materias: [
          { nombre: 'Programacion web', calificaciones: [7, null, 8] },
          { nombre: 'Base de datos', calificaciones: [10, 10, 10] },          
          { nombre: 'Diseño web', calificaciones: [6, 7, 7] },
        ],
      },
      {
        nombre: 'Jorge Torres',
        materias: [
          { nombre: 'Programacion web', calificaciones: [5, 6, 5] },
          { nombre: 'Base de datos', calificaciones: [8, 7, 9] },
          { nombre: 'Diseño web', calificaciones: [7, 8, 6] },
        ],
      },
      {
        nombre: 'Lucía Fernández',
        materias: [
          { nombre: 'Programacion web', calificaciones: [9, 9, 10] },
          { nombre: 'Base de datos', calificaciones: [10, 9, 10] },
          { nombre: 'Diseño web', calificaciones: [8, 9, 10] }, 
        ],
      },
    ],
  },
];

const Profesor = () => {
  const [datos] = useState(initialData);
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  const togglePerfil = () => {
    setMostrarPerfil(!mostrarPerfil);
  };

  return (
    <div className="profesor-container">
      <TopBar onPerfilToggle={togglePerfil} />
      
      <main className='fondo-Profesor'>
        
        {/* Mostrar CardAlumno solo cuando mostrarPerfil sea true */}
        {mostrarPerfil && (
          <div className="card-alumno-container">
            <CardAlumno estadoPerfil={togglePerfil} />
          </div>
        )}
        
        <ListaMateriasProfesor />
        <BotonExportarExcel 
          datosParaExcel={datos} 
          icono={faFileExcel} 
          texto={"Exportar Calificaciones"} 
        />
        <TablaProfesores />
      </main>
    </div>
  );
};

export default Profesor;