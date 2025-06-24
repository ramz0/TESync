import { useState } from 'react';
import './AsignarMateria.css';

export default function AsignarMateria({ alumnos, materias, setMensajeConfirmacion }) {
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState('');
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
  const [asignacionesMateria, setAsignacionesMateria] = useState([]);
  const [mostrarAsignacionesMateria, setMostrarAsignacionesMateria] = useState(false);

  const manejarAsignacionMateria = () => {
    if (!alumnoSeleccionado || !materiaSeleccionada) {
      alert('Por favor selecciona un alumno y una materia');
      return;
    }

    const alumno = alumnos.find(a => a.id === Number(alumnoSeleccionado));
    const materia = materias.find(m => m.id === Number(materiaSeleccionada));

    const yaAsignado = asignacionesMateria.some(
      asig => asig.alumnoId === alumno.id && asig.materiaId === materia.id
    );

    if (yaAsignado) {
      alert('Este alumno ya está asignado a esta materia');
      return;
    }

    const nuevaAsignacion = {
      id: Date.now(),
      alumnoId: alumno.id,
      alumnoNombre: alumno.nombre,
      materiaId: materia.id,
      materiaNombre: materia.nombre
    };

    setAsignacionesMateria(prev => [...prev, nuevaAsignacion]);
    setAlumnoSeleccionado('');
    setMateriaSeleccionada('');
    setMensajeConfirmacion(`✅ ${alumno.nombre} asignado a ${materia.nombre}`);
    setTimeout(() => setMensajeConfirmacion(''), 3000);
  };

  const eliminarAsignacionMateria = (id) => {
    setAsignacionesMateria(prev => prev.filter(asig => asig.id !== id));
  };

  return (
    <section className="admin-section">
      <h2>Asignar Materia a Alumno</h2>
      
      <div className="asignacion-container">
        <div className="lista-alumnos">
          <h3>Selecciona un Alumno</h3>
          <div className="alumnos-grid">
            {alumnos.map(alumno => (
              <div 
                key={alumno.id}
                className={`alumno-card ${alumnoSeleccionado === alumno.id ? 'selected' : ''}`}
                onClick={() => setAlumnoSeleccionado(alumno.id)}
              >
                {alumno.nombre}
              </div>
            ))}
          </div>
        </div>

        <div className="lista-materias">
          <h3>Selecciona una Materia</h3>
          <div className="materias-grid">
            {materias.map(materia => (
              <div
                key={materia.id}
                className={`materia-card ${materiaSeleccionada === materia.id ? 'selected' : ''}`}
                onClick={() => setMateriaSeleccionada(materia.id)}
              >
                {materia.nombre}
              </div>
            ))}
          </div>
        </div>
      </div>

      {alumnoSeleccionado && materiaSeleccionada && (
        <div className="resumen-asignacion">
          <h3>Resumen de Asignación</h3>
          <p><strong>Alumno:</strong> {alumnos.find(a => a.id === Number(alumnoSeleccionado))?.nombre}</p>
          <p><strong>Materia:</strong> {materias.find(m => m.id === Number(materiaSeleccionada))?.nombre}</p>
        </div>
      )}

      <div className="asignacion-actions">
        <button 
          className="admin-button" 
          onClick={manejarAsignacionMateria}
          disabled={!alumnoSeleccionado || !materiaSeleccionada}
        >
          Confirmar Asignación
        </button>

        <button
          className="admin-button"
          style={{ backgroundColor: '#6c757d' }}
          onClick={() => setMostrarAsignacionesMateria(!mostrarAsignacionesMateria)}
        >
          {mostrarAsignacionesMateria ? 'Ocultar Asignaciones' : 'Ver Asignaciones'}
        </button>
      </div>

      {mostrarAsignacionesMateria && (
        <div className="tabla-asignaciones">
          <h3>Asignaciones de Materias Realizadas</h3>
          {asignacionesMateria.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Alumno</th>
                  <th>Materia</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {asignacionesMateria.map(asignacion => (
                  <tr key={asignacion.id}>
                    <td>{asignacion.alumnoNombre}</td>
                    <td>{asignacion.materiaNombre}</td>
                    <td>
                      <button 
                        className="boton-eliminar"
                        onClick={() => eliminarAsignacionMateria(asignacion.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay asignaciones de materias registradas</p>
          )}
        </div>
      )}
    </section>
  );
}
