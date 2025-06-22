import React, { useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import CardAlumno from '../../components/CardAlumno/CardAlumno';
import TopBar from '../../components/TopBar/TopBar'; // Ajusta ruta si es necesario

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

export default function AlumnoPerfil() {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);

  const togglePerfil = () => setMostrarPerfil(!mostrarPerfil);
  const toggleMateria = (index) =>
    setMateriaSeleccionada(materiaSeleccionada === index ? null : index);

  return (
    <>
      <Dashboard />
      <TopBar onPerfilToggle={togglePerfil} />

      {mostrarPerfil && (
        <div style={{ maxWidth: 700, margin: '20px auto' }}>
          <CardAlumno estadoPerfil={togglePerfil} />
        </div>
      )}

      <div
        className="fondo-animado"
        style={{
          maxWidth: '700px',
          margin: '40px auto',
          padding: '30px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: '#f9faff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(82, 153, 204, 0.32)',
          color: '#333',
          position: 'relative',
        }}
      >
        {/* Tabla de materias */}
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
