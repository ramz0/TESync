import { useState, useEffect } from 'react';
import './admin.css';
import Dashboard from '../dashboard/Dashboard';

export default function AdminPage() {
  const [materias, setMaterias] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [semestreSeleccionado, setSemestreSeleccionado] = useState('');

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

    // 18 alumnos distintos
    setAlumnos([
      { id: 1, nombre: 'Juan Pérez García' },
      { id: 2, nombre: 'María Ramírez López' },
      { id: 3, nombre: 'Carlos Hernández Martínez' },
      { id: 4, nombre: 'Ana Rodríguez Sánchez' },
      { id: 5, nombre: 'Luis González Fernández' },
      { id: 6, nombre: 'Laura Díaz Romero' },
      { id: 7, nombre: 'Pedro Torres Jiménez' },
      { id: 8, nombre: 'Sofía Vázquez Ruiz' },
      { id: 9, nombre: 'Jorge Mendoza Castro' },
      { id: 10, nombre: 'Elena Castro Mendoza' },
      { id: 11, nombre: 'Diego Silva Ortega' },
      { id: 12, nombre: 'Adriana Navarro Herrera' },
      { id: 13, nombre: 'Ricardo Morales Vargas' },
      { id: 14, nombre: 'Patricia Ríos Flores' },
      { id: 15, nombre: 'Fernando Guerrero Soto' },
      { id: 16, nombre: 'Gabriela Paredes Luna' },
      { id: 17, nombre: 'Roberto Cortés Rojas' },
      { id: 18, nombre: 'Lucía Méndez Campos' }
    ]);

    // Grupos organizados por semestre
    setGrupos([
      { id: '4101', nombre: '4101', semestre: 1 },
      { id: '4201', nombre: '4201', semestre: 1 },
      { id: '4102', nombre: '4102', semestre: 2 },
      { id: '4202', nombre: '4202', semestre: 2 },
      { id: '4103', nombre: '4103', semestre: 3 },
      { id: '4203', nombre: '4203', semestre: 3 },
      { id: '4104', nombre: '4104', semestre: 4 },
      { id: '4204', nombre: '4204', semestre: 4 },
      { id: '4105', nombre: '4105', semestre: 5 },
      { id: '4205', nombre: '4205', semestre: 5 },
      { id: '4106', nombre: '4106', semestre: 6 },
      { id: '4206', nombre: '4206', semestre: 6 },
      { id: '4107', nombre: '4107', semestre: 7 },
      { id: '4207', nombre: '4207', semestre: 7 },
      { id: '4851', nombre: '4851', semestre: 8 },
      { id: '4852', nombre: '4852', semestre: 9 }
    ]);
  }, []);

  // Filtrar grupos por semestre seleccionado
  const gruposFiltrados = semestreSeleccionado 
    ? grupos.filter(grupo => grupo.semestre === Number(semestreSeleccionado))
    : [];

  const manejarAsignacionGrupo = () => {
    const alumnoID = Number(alumnoSeleccionado);
    const grupoID = grupoSeleccionado;

    if (!alumnoID || !grupoID) {
      alert('Por favor selecciona un alumno y un grupo');
      return;
    }

    const alumno = alumnos.find(a => a.id === alumnoID);
    const grupo = grupos.find(g => g.id === grupoID);

    if (!alumno || !grupo) return;

    const nuevaAsignacion = {
      id: Date.now(),
      alumnoId: alumno.id,
      alumnoNombre: alumno.nombre,
      grupoId: grupo.id,
      grupoNombre: grupo.nombre,
      semestre: grupo.semestre
    };

    setAsignacionesGrupo(prev => [...prev, nuevaAsignacion]);
    setAlumnoSeleccionado('');
    setGrupoSeleccionado('');
    setSemestreSeleccionado('');

    setMensajeConfirmacion(`✅ ${alumno.nombre} fue asignado a ${grupo.nombre} (Semestre ${grupo.semestre}).`);
    setTimeout(() => setMensajeConfirmacion(''), 2500);
  };

  const eliminarAsignacion = (id) => {
    setAsignacionesGrupo(prev => prev.filter(asig => asig.id !== id));
  };

  // Agrupar asignaciones por semestre para mostrar
  const asignacionesPorSemestre = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(semestre => ({
    semestre,
    asignaciones: asignacionesGrupo.filter(asig => asig.semestre === semestre)
  })).filter(group => group.asignaciones.length > 0);

  return (
    <div className="admin-container">
      <Dashboard />
      <h1>Panel de Administración</h1>

      {mensajeConfirmacion && (
        <div className="admin-confirmacion">{mensajeConfirmacion}</div>
      )}

      {/* Asignar Grupo a Alumno */}
      <section className="admin-section">
        <h2>Asignar Grupo a Alumno</h2>
        
        {/* Selector de semestre */}
        <div className="admin-select-group">
          <select
            className="admin-select"
            value={semestreSeleccionado}
            onChange={e => setSemestreSeleccionado(e.target.value)}
          >
            <option value="">Selecciona un semestre</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(semestre => (
              <option key={semestre} value={semestre}>Semestre {semestre}</option>
            ))}
          </select>
        </div>

        {/* Selector de alumno y grupo (solo visible si se seleccionó semestre) */}
        {semestreSeleccionado && (
          <>
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
                {gruposFiltrados.map(g => (
                  <option key={g.id} value={g.id}>{g.nombre}</option>
                ))}
              </select>
            </div>

            <button 
              className="admin-button" 
              onClick={manejarAsignacionGrupo}
              disabled={!alumnoSeleccionado || !grupoSeleccionado}
            >
              Asignar
            </button>
          </>
        )}

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
            
            {asignacionesPorSemestre.length > 0 ? (
              asignacionesPorSemestre.map(({ semestre, asignaciones }) => (
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
                </div>
              ))
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