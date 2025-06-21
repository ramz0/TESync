import React, { useState } from 'react';
import './AlumnoPerfil.css';
import Dashboard from '../dashboard/Dashboard';

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
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);

  const toggleMateria = (index) => {
    setMateriaSeleccionada(materiaSeleccionada === index ? null : index);
  };

  return (
    <div className="fondo-animado">
      <div className="contenedor-logo-izquierdo flex-row-center felx-btwn">
        <img src="" alt="Logo Izquierdo" className="logo-img logo-bounce" />

        {/* Enlace corregido que abre en una nueva pestaña */}
        <a
          href="/alumno"
          target="_blank"
          rel="noopener noreferrer"
          className="Perfil-del-Alumno"
          style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
        >
          Perfil del Alumno
        </a>

        <img src="" alt="Logo Derecho" className="logo-img logo-bounce" />
      </div>

      <Dashboard />

      <div className="contenedor-info-principal">
        <div className="info-alumno">
          <p><strong>Nombre:</strong> {alumno.nombre}</p>
          <p><strong>Grupo:</strong> {alumno.grupo}</p>
          <p><strong>Correo:</strong> {alumno.correo}</p>
        </div>

        <div className="contenedor-tabla">
          <h3 className="subtitulo-materias">Materias y Calificaciones</h3>

          <table className="tabla-materias">
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
                    <td><strong>{materia.calificacionFinal}</strong></td>
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

          <div className="contenedor-boton">
            <button onClick={() => window.history.back()} className="boton-n1">
              ← Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
