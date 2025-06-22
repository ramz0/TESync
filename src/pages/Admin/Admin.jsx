import { useState, useEffect } from 'react';
import './admin.css';
import Dashboard from '../dashboard/Dashboard';
import TopBar from '../../components/TopBar/TopBar'; // Ajusta ruta si es necesario

export default function AdminPage() {
  const [materias, setMaterias] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [grupos, setGrupos] = useState([]);

  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState('');
  const [grupoSeleccionado, setGrupoSeleccionado] = useState('');
  const [asignacionesGrupo, setAsignacionesGrupo] = useState([]);

  const [mostrarAsignaciones, setMostrarAsignaciones] = useState(false);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState('');

  useEffect(() => {
    setMaterias([
      { id: 1, nombre: 'Matemáticas' },
      { id: 2, nombre: 'Programación' }
    ]);

    setAlumnos([
      { id: 1, nombre: 'Juan Pérez' },
      { id: 2, nombre: 'María Ramírez' }
    ]);

    setGrupos([
      { id: 1, nombre: 'Grupo A' },
      { id: 2, nombre: 'Grupo B' }
    ]);
  }, []);

  const manejarAsignacionGrupo = () => {
    const alumnoID = Number(alumnoSeleccionado);
    const grupoID = Number(grupoSeleccionado);

    if (!alumnoID || !grupoID) {
      alert('Por favor selecciona un alumno y un grupo');
      return;
    }

    const alumno = alumnos.find(a => a.id === alumnoID);
    const grupo = grupos.find(g => g.id === grupoID);

    if (!alumno || !grupo) return;

    const nuevaAsignacion = {
      id: Date.now(), // ID único para cada asignación
      alumnoId: alumno.id,
      alumnoNombre: alumno.nombre,
      grupoId: grupo.id,
      grupoNombre: grupo.nombre
    };

    setAsignacionesGrupo(prev => [...prev, nuevaAsignacion]);
    setAlumnoSeleccionado('');
    setGrupoSeleccionado('');

    setMensajeConfirmacion(`✅ ${alumno.nombre} fue asignado a ${grupo.nombre}.`);
    setTimeout(() => setMensajeConfirmacion(''), 2500);
  };

  const eliminarAsignacion = (id) => {
    setAsignacionesGrupo(prev => prev.filter(asig => asig.id !== id));
  };

  return (
    <div className="admin-container">
    <Dashboard></Dashboard>
      <h1>Panel de Administración</h1>

      {mensajeConfirmacion && (
        <div className="admin-confirmacion">{mensajeConfirmacion}</div>
      )}

      {/* Asignar Grupo a Alumno */}
      <section className="admin-section">
        <h2>Asignar Grupo a Alumno</h2>
        <div className="admin-select-group">
          <select
            className="admin-select"
            value={alumnoSeleccionado}
            onChange={e => setAlumnoSeleccionado(e.target.value)}
          >
            <option value="">Selecciona un alumno</option>
            {alumnos.map(a => (
              <option key={a.id} value={a.id}>{a.nombre}</option>
            ))}
          </select>

          <select
            className="admin-select"
            value={grupoSeleccionado}
            onChange={e => setGrupoSeleccionado(e.target.value)}
          >
            <option value="">Selecciona un grupo</option>
            {grupos.map(g => (
              <option key={g.id} value={g.id}>{g.nombre}</option>
            ))}
          </select>
        </div>

        <button className="admin-button" onClick={manejarAsignacionGrupo}>
          Asignar
        </button>

        <button
          className="admin-button"
          style={{ marginTop: '10px', backgroundColor: '#6c757d' }}
          onClick={() => setMostrarAsignaciones(!mostrarAsignaciones)}
        >
          {mostrarAsignaciones ? 'Ocultar asignaciones' : 'Ver asignaciones'}
        </button>

        {mostrarAsignaciones && (
          <div className="tabla-asignaciones">
            <h3>Asignaciones realizadas</h3>
            {asignacionesGrupo.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Alumno</th>
                    <th>Grupo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {asignacionesGrupo.map(asignacion => (
                    <tr key={asignacion.id}>
                      <td className="texto-negro">{asignacion.alumnoNombre}</td>
                      <td className="texto-negro">{asignacion.grupoNombre}</td>
                      <td>
                        <button 
                          className="boton-eliminar"
                          onClick={() => eliminarAsignacion(asignacion.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No hay asignaciones registradas</p>
            )}
          </div>
        )}
      </section>

      {/* Asignar Materia a Alumno (aún sin lógica) */}
      <section className="admin-section">
        <h2>Asignar Materia a Alumno</h2>
        <div className="admin-select-group">
          <select className="admin-select">
            <option value="">Selecciona un alumno</option>
            {alumnos.map(a => (
              <option key={a.id} value={a.id}>{a.nombre}</option>
            ))}
          </select>

          <select className="admin-select">
            <option value="">Selecciona una materia</option>
            {materias.map(m => (
              <option key={m.id} value={m.id}>{m.nombre}</option>
            ))}
          </select>
        </div>
        <button className="admin-button">Asignar</button>
      </section>
    </div>
  );
}