import './AlumnoPerfil.css';
import { useState } from 'react';
import CardAlumno from '../../components/CardAlumno/CardAlumno';
import TopBar from '../../components/TopBar/TopBar';
import CardAlumnoCalificaciones from '../../components/CardAlumnoCalificaciones/CardAlumnoCalificaciones';

const alumno = {
  nombre: 'Juan Pérez',
  grupo: '4852',
  correo: 'juan.perez@example.com',
  materias: [
    {
      nombre: 'Programación Web',
      grupo: '4852',
      calificacionFinal: 8.5,
      unidades: [8.5, 9.0, 8.0],
      profesor: 'Dra. Ana López',
      horario: 'Lunes y Miércoles 10:00-12:00'
    },
    {
      nombre: 'Base de Datos',
      grupo: '4852',
      calificacionFinal: 9.0,
      unidades: [9.0, 9.5, 8.5],
      profesor: 'Dr. Carlos Méndez',
      horario: 'Martes y Jueves 14:00-16:00'
    },
    {
      nombre: 'Diseño Web',
      grupo: '4852',
      calificacionFinal: 7.8,
      unidades: [7.0, 8.0, 8.5],
      profesor: 'Mtro. Javier Ruiz',
      horario: 'Viernes 9:00-13:00'
    },
  ],
};

export default function AlumnoPerfil() {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);

  const togglePerfil = () => setMostrarPerfil(!mostrarPerfil);
  const toggleMateria = (index) => setMateriaSeleccionada(materiaSeleccionada === index ? null : index);

  return (
    <>
      <TopBar onPerfilToggle={togglePerfil} />

      {mostrarPerfil && (
        <span className="perfil-container">
          <CardAlumno estadoPerfil={togglePerfil} />
        </span>
      )}

      <header className="header-section">
        <div className="alumno-info">
          <div>
            <h1 className="alumno-nombre">{alumno.nombre}</h1>
            <p className="alumno-datos">
              <span>Grupo: {alumno.grupo}</span>
              <span>Correo: {alumno.correo}</span>
            </p>
          </div>
        </div>
        <div className="promedio-container">
          <div className="promedio-circulo">
            <span>Promedio</span>
            <strong>8.4</strong>
          </div>
        </div>
      </header>

      <div className="main-container">

        <div className="flex-column materias-container">
          <h2 className="materias-titulo">Materias y Calificaciones</h2>
          
          <span className="materias-grid">
            {alumno.materias.map((materia, i) => (
              <CardAlumnoCalificaciones 
              key={i} 
              materia={materia} 
              estaExpandida={materiaSeleccionada === i}
              verMaterias={() => toggleMateria(i)}
            />
            ))}
          </span>
          
          <div className="boton-container">
            <button onClick={() => window.history.back()} className="boton-regresar">
              ← Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}