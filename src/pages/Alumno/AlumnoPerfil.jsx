import React, { useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import CardAlumno from '../../components/CardAlumno/CardAlumno';
import TopBar from '../../components/TopBar/TopBar';
import './AlumnoPerfil.css';

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
  const toggleMateria = (index) => 
    setMateriaSeleccionada(materiaSeleccionada === index ? null : index);

  const getColorCalificacion = (calificacion) => {
    if (calificacion >= 9) return '#4CAF50'; // Verde
    if (calificacion >= 8) return '#8BC34A'; // Verde claro
    if (calificacion >= 7) return '#FFC107'; // Amarillo
    if (calificacion >= 6) return '#FF9800'; // Naranja
    return '#F44336'; // Rojo
  };

  return (
    <>
      <Dashboard />
      <TopBar onPerfilToggle={togglePerfil} />

      {mostrarPerfil && (
        <div className="perfil-container">
          <CardAlumno estadoPerfil={togglePerfil} />
        </div>
      )}

      <div className="main-container">
        <div className="header-section">
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
        </div>

        <div className="materias-container">
          <h2 className="materias-titulo">Materias y Calificaciones</h2>
          
          <div className="materias-grid">
            {alumno.materias.map((materia, i) => (
              <div 
                key={i} 
                className={`materia-card ${materiaSeleccionada === i ? 'expanded' : ''}`}
                onClick={() => toggleMateria(i)}
              >
                <div className="materia-header">
                  <h3>{materia.nombre}</h3>
                  <div 
                    className="calificacion-final" 
                    style={{ backgroundColor: getColorCalificacion(materia.calificacionFinal) }}
                  >
                    {materia.calificacionFinal}
                  </div>
                </div>
                
                <div className="materia-info">
                  <p><strong>Grupo:</strong> {materia.grupo}</p>
                  <p><strong>Profesor:</strong> {materia.profesor}</p>
                  <p><strong>Horario:</strong> {materia.horario}</p>
                </div>
                
                {materiaSeleccionada === i && (
                  <div className="unidades-container">
                    <h4>Calificaciones por Unidad</h4>
                    <div className="unidades-grid">
                      {materia.unidades.map((nota, idx) => (
                        <div key={idx} className="unidad-item">
                          <span>Unidad {idx + 1}</span>
                          <span 
                            className="unidad-nota"
                            style={{ color: getColorCalificacion(nota) }}
                          >
                            {nota}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
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