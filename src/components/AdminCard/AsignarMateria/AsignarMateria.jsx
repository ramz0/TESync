import { useState, useEffect } from 'react';
import './AsignarMateria.css';

export default function AsignarMateria({ setMensajeConfirmacion }) {
  const [alumnos, setAlumnos] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState('');
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
  const [materiasAsignadas, setMateriasAsignadas] = useState([]);
  const [mostrarAsignaciones, setMostrarAsignaciones] = useState(false);

  // 🔄 Obtener datos del backend
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resAlumnos = await fetch('http://localhost:3000/api/alumnos/obtener-alumnos');
        const resMaterias = await fetch('http://localhost:3000/api/materias/obtener-materias');

        const dataAlumnos = await resAlumnos.json();
        const dataMaterias = await resMaterias.json();

        setAlumnos(dataAlumnos);
        setMaterias(dataMaterias);
      } catch (error) {
        alert('Error al cargar alumnos o materias');
        console.error(error);
      }
    };

    obtenerDatos();
  }, []);

  // ✅ Obtener materias asignadas
  const obtenerAsignaciones = async (matricula) => {
    try {
      const res = await fetch(`http://localhost:3000/api/alumnos/${matricula}/materias`);
      const data = await res.json();
      if (res.ok) {
        setMateriasAsignadas(data.materias);
      } else {
        alert(data.error || 'Error al obtener asignaciones');
      }
    } catch (error) {
      alert('Error al conectar con el servidor');
      console.error(error);
    }
  };

  const manejarAsignacionMateria = async () => {
    if (!alumnoSeleccionado || !materiaSeleccionada) {
      alert('Por favor selecciona un alumno y una materia');
      return;
    }

    // ⚠️ Verificar si ya está asignada
    const yaAsignada = materiasAsignadas.some(m => m.clave === materiaSeleccionada);
    if (yaAsignada) {
      alert('⚠️ La materia ya está asignada al alumno.');
      return;
    }

    const alumno = alumnos.find(a => a.matricula === alumnoSeleccionado);
    const materia = materias.find(m => m.clave === materiaSeleccionada);

    try {
      const res = await fetch(`http://localhost:3000/api/alumnos/${alumno.matricula}/materia/${materia.clave}`, {
        method: 'POST'
      });

      const data = await res.json();

      if (res.ok) {
        setMensajeConfirmacion(`✅ ${alumno.nombre} asignado a ${materia.nombre}`);
        setTimeout(() => setMensajeConfirmacion(''), 3000);
        setAlumnoSeleccionado('');
        setMateriaSeleccionada('');

        // 🔁 Refrescar materias asignadas automáticamente
        if (mostrarAsignaciones) {
          await obtenerAsignaciones(alumno.matricula);
        }
      } else {
        alert(data.error || 'Error en la asignación');
      }
    } catch (error) {
      alert('Error al conectar con el servidor');
      console.error(error);
    }
  };

  const verAsignaciones = async () => {
    if (!alumnoSeleccionado) {
      alert('Selecciona un alumno primero');
      return;
    }

    if (mostrarAsignaciones) {
      setMostrarAsignaciones(false);
    } else {
      await obtenerAsignaciones(alumnoSeleccionado); // ✅ usar función centralizada
      setMostrarAsignaciones(true);
    }
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
                key={alumno.matricula}
                className={`alumno-card ${alumnoSeleccionado === alumno.matricula ? 'selected' : ''}`}
                onClick={() => {
                  setAlumnoSeleccionado(alumno.matricula);
                  if (mostrarAsignaciones) {
                    obtenerAsignaciones(alumno.matricula); // 🔁 actualizar si ya están visibles
                  }
                }}
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
                key={materia.clave}
                className={`materia-card ${materiaSeleccionada === materia.clave ? 'selected' : ''}`}
                onClick={() => setMateriaSeleccionada(materia.clave)}
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
          <p><strong>Alumno:</strong> {alumnos.find(a => a.matricula === alumnoSeleccionado)?.nombre}</p>
          <p><strong>Materia:</strong> {materias.find(m => m.clave === materiaSeleccionada)?.nombre}</p>
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
          onClick={verAsignaciones}
        >
          {mostrarAsignaciones ? 'Ocultar Asignaciones' : 'Ver Asignaciones'}
        </button>
      </div>

      {mostrarAsignaciones && (
        <div className="tabla-asignaciones">
          <h3>Materias Asignadas</h3>
          {materiasAsignadas.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Materia</th>
                  <th>Profesor</th>
                  <th>Calificación Final</th>
                </tr>
              </thead>
              <tbody>
                {materiasAsignadas.map((m, i) => (
                  <tr key={i}>
                    <td>{m.nombre}</td>
                    <td>{m.profesor}</td>
                    <td>{m.calificacionFinal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Este alumno no tiene materias asignadas.</p>
          )}
        </div>
      )}
    </section>
  );
}
