import React, { useState } from 'react';
import Dashboard from '../dashboard/Dashboard.jsx';
import './AlumnoPerfil.css';

const alumno = {
  nombre: 'Juan Pérez',
  grupo: '4852',
  correo: 'juan.perez@example.com',
  materias: [
    {
      nombre: 'Programacion web',
      grupo: '4852',
      calificacionFinal: 8.5,
      unidades: [8.5, 9.0, 8.0],
    },
    {
      nombre: 'Base de datos',
      grupo: '4852',
      calificacionFinal: 9.0,
      unidades: [9.0, 9.5, 8.5],
    },
    {
      nombre: 'Diseño web',
      grupo: '4852',
      calificacionFinal: 7.8,
      unidades: [7.0, 8.0, 8.5],
    },
  ],
};

// Animación bounce para los logos
const bounceKeyframes = `
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
`;

export default function AlumnoPerfil() {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);

  const toggleMateria = (index) => {
    setMateriaSeleccionada(materiaSeleccionada === index ? null : index);
  };

  return (
    <>
      <style>{bounceKeyframes}</style>
      <Dashboard />
      <div
        className="fondo-animado"
        style={{
          maxWidth: '700px',
          margin: '40px auto',
          padding: '30px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: '#f9faff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          color: '#333',
          position: 'relative',
        }}
      >
        {/* Contenedor de logos y título */}
        <div className="contenedor-logo flex-row-center flex-btwn">
          <img
            src="/ruta/a/logo-izquierdo.png" // Cambia la ruta por la correcta
            alt="Logo Izquierdo"
            style={{ height: '50px', animation: 'bounce 3s infinite' }}
          />
          <h3
            style={{
              color: '#1a73e8',
              fontWeight: '600',
              fontSize: '1.5rem',
              userSelect: 'none',
              margin: '0 15px',
              flexGrow: 1,
              textAlign: 'center',
            }}
          >
            Perfil del Alumno
          </h3>
          <img
            src="/ruta/a/logo-derecho.png" // Cambia la ruta por la correcta
            alt="Logo Derecho"
            style={{ height: '50px', animation: 'bounce 3.5s infinite', animationDelay: '0.5s' }}
          />
        </div>

        {/* Información del alumno */}
        <div className="info-alumno" style={{ marginTop: '20px' }}>
          <p>
            <strong>Nombre:</strong> {alumno.nombre}
          </p>
          <p>
            <strong>Grupo:</strong> {alumno.grupo}
          </p>
          <p>
            <strong>Correo:</strong> {alumno.correo}
          </p>
        </div>

        {/* Tabla de materias y calificaciones */}
        <div className="contenedor-tabla" style={{ marginTop: '30px' }}>
          <h3 className="subtitulo-materias">Materias y Calificaciones</h3>
          <table className="tabla-materias" style={{ width: '100%' }}>
            <thead>
              <tr className="encabezado-tabla">
                <th>Materia</th>
                <th>Grupo</th>
                <th>Calificación Final</th>
              </tr>
            </thead>
            <tbody>
              {alumno.materias.map((materia, i) => (
                <React.Fragment key={i}>
                  <tr
                    onClick={() => toggleMateria(i)}
                    className={`fila-materia ${i % 2 === 0 ? 'par' : 'impar'}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>{materia.nombre}</td>
                    <td>{materia.grupo}</td>
                    <td>
                      <strong>{materia.calificacionFinal}</strong>
                    </td>
                  </tr>
                  {materiaSeleccionada === i && (
                    <tr className="fila-unidades">
                      <td colSpan="3">
                        <ul>
                          {materia.unidades.map((nota, idx) => (
                            <li key={idx}>
                              <strong>Unidad {idx + 1}:</strong> {nota}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <div className="contenedor-boton" style={{ marginTop: '20px', textAlign: 'center' }}>
            <button onClick={() => window.history.back()} className="boton-n1">
              ← Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
