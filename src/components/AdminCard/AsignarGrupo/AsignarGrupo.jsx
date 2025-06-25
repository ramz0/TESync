import { useEffect, useState } from 'react';
import { apiTesync } from '../../../servicios/axios';
import './AsignarGrupo.css';


export default function AsignarGrupo({ grupos, setMensajeConfirmacion }) {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState('');
  const [semestreSeleccionado, setSemestreSeleccionado] = useState('');
  const [grupoSeleccionado, setGrupoSeleccionado] = useState('');
  const [asignacionesGrupo, setAsignacionesGrupo] = useState([]);
  const [mostrarAsignaciones, setMostrarAsignaciones] = useState(false);

  // Obtener alumnos desde backend
  useEffect(() => {
    const obtenerAlumnos = async () => {
      try {
        const res = await apiTesync.get('/usuarios/obtener-alumnos');
        setAlumnos(res.data);
      } catch (error) {
        console.error('Error al obtener alumnos:', error);
      }
    };
    obtenerAlumnos();
  }, []);

  const gruposFiltrados = semestreSeleccionado
    ? grupos.filter(grupo => grupo.semestre === Number(semestreSeleccionado))
    : [];

  const manejarAsignacionGrupo = async () => {
    if (!alumnoSeleccionado || !grupoSeleccionado) {
      alert('Por favor selecciona un alumno y un grupo');
      return;
    }

    const alumno = alumnos.find(a => a._id === alumnoSeleccionado);
    const grupo = grupos.find(g => g.id === grupoSeleccionado);

    const yaAsignado = asignacionesGrupo.some(
      asig => asig.alumnoId === alumno._id && asig.grupoId === grupo.id
    );

    if (yaAsignado) {
      alert('Este alumno ya está asignado a este grupo');
      return;
    }

    try {
      await apiTesync.patch(`/usuarios/actualizar-grupo-alumno/${alumno.matricula}`, {
  grupo: grupo.nombre
});



      const nuevaAsignacion = {
        id: Date.now(),
        alumnoId: alumno._id,
        alumnoNombre: alumno.nombre,
        grupoId: grupo.id,
        grupoNombre: grupo.nombre,
        semestre: grupo.semestre
      };

      setAsignacionesGrupo(prev => [...prev, nuevaAsignacion]);
      setAlumnoSeleccionado('');
      setGrupoSeleccionado('');
      setSemestreSeleccionado('');

      setMensajeConfirmacion(`✅ ${alumno.nombre} asignado a ${grupo.nombre} (Semestre ${grupo.semestre})`);
      setTimeout(() => setMensajeConfirmacion(''), 3000);
    } catch (err) {
      console.error('Error al actualizar grupo:', err);
      alert('❌ Error al asignar grupo. Intenta nuevamente.');
    }
  };

  const eliminarAsignacion = (id) => {
    setAsignacionesGrupo(prev => prev.filter(asig => asig.id !== id));
  };

  const asignacionesPorSemestre = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(semestre => ({
    semestre,
    asignaciones: asignacionesGrupo.filter(asig => asig.semestre === semestre)
  })).filter(group => group.asignaciones.length > 0);

  return (
    <section className="admin-section">
      <h2>Asignar Grupo a Alumno</h2>

      <div className="asignacion-container">
        <div className="lista-alumnos">
          <h3>Selecciona un Alumno</h3>
          <div className="alumnos-grid">
            {alumnos.map(alumno => (
              <div
                key={alumno._id}
                className={`alumno-card ${alumnoSeleccionado === alumno._id ? 'selected' : ''}`}
                onClick={() => setAlumnoSeleccionado(alumno._id)}
              >
                {alumno.nombre}
              </div>
            ))}
          </div>
        </div>

        <div className="selector-grupo">
          <div className="semestre-selector">
            <h3>Selecciona un Semestre</h3>
            <select
              className="admin-select"
              value={semestreSeleccionado}
              onChange={e => setSemestreSeleccionado(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(semestre => (
                <option key={semestre} value={semestre}>Semestre {semestre}</option>
              ))}
            </select>
          </div>

          {semestreSeleccionado && (
            <div className="grupos-disponibles">
              <h3>Grupos del Semestre {semestreSeleccionado}</h3>
              <div className="grupos-grid">
                {gruposFiltrados.map(grupo => (
                  <div
                    key={grupo.id}
                    className={`grupo-card ${grupoSeleccionado === grupo.id ? 'selected' : ''}`}
                    onClick={() => setGrupoSeleccionado(grupo.id)}
                  >
                    {grupo.nombre}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {alumnoSeleccionado && grupoSeleccionado && (
        <div className="resumen-asignacion">
          <h3>Resumen de Asignación</h3>
          <p><strong>Alumno:</strong> {alumnos.find(a => a._id === alumnoSeleccionado)?.nombre}</p>
          <p><strong>Grupo:</strong> {grupos.find(g => g.id === grupoSeleccionado)?.nombre} (Semestre {grupos.find(g => g.id === grupoSeleccionado)?.semestre})</p>
        </div>
      )}

      <div className="asignacion-actions">
        <button
          className="admin-button"
          onClick={manejarAsignacionGrupo}
          disabled={!alumnoSeleccionado || !grupoSeleccionado}
        >
          Confirmar Asignación
        </button>

        <button
          className="admin-button"
          style={{ backgroundColor: '#6c757d' }}
          onClick={() => setMostrarAsignaciones(!mostrarAsignaciones)}
        >
          {mostrarAsignaciones ? 'Ocultar Asignaciones' : 'Ver Asignaciones'}
        </button>
      </div>

      {mostrarAsignaciones && (
        <div className="tabla-asignaciones">
          <h3>Asignaciones Realizadas</h3>
          {asignacionesPorSemestre.map(({ semestre, asignaciones }) => (
            <div key={semestre} className="semestre-group">
              <h4>Semestre {semestre}</h4>
              <table>
                <thead>
                  <tr>
                    <th>Alumno</th>
                    <th>Grupo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {asignaciones.map(asignacion => (
                    <tr key={asignacion.id}>
                      <td>{asignacion.alumnoNombre}</td>
                      <td>{asignacion.grupoNombre}</td>
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
            </div>
          ))}
        </div>
      )}
    </section>
  );
}