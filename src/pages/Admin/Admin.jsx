import { useState, useEffect } from 'react';
import './admin.css';
import Dashboard from '../dashboard/Dashboard';

export default function AdminPage() {
  // Estados para alumnos, grupos y materias
  const [materias, setMaterias] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [semestreSeleccionado, setSemestreSeleccionado] = useState('');
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState('');
  const [grupoSeleccionado, setGrupoSeleccionado] = useState('');
  const [asignacionesGrupo, setAsignacionesGrupo] = useState([]);
  const [mostrarAsignaciones, setMostrarAsignaciones] = useState(false);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState('');
  const [accionSeleccionada, setAccionSeleccionada] = useState(null);

  // Estados para asignación de materias
  const [alumnoSeleccionadoMateria, setAlumnoSeleccionadoMateria] = useState('');
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
  const [asignacionesMateria, setAsignacionesMateria] = useState([]);
  const [mostrarAsignacionesMateria, setMostrarAsignacionesMateria] = useState(false);

  // Estados para profesores
  const [profesores, setProfesores] = useState([]);
  const [profeSeleccionado, setProfeSeleccionado] = useState('');
  const [nuevoNombreProfe, setNuevoNombreProfe] = useState('');
  const [nuevaEspecialidad, setNuevaEspecialidad] = useState('');

  // Datos completos de ejemplo
  useEffect(() => {
    // Materias completas (10 originales + 5 nuevas)
    setMaterias([
      { id: 1, nombre: 'Matemáticas' },
      { id: 2, nombre: 'Programación' },
      { id: 3, nombre: 'Física' },
      { id: 4, nombre: 'Química' },
      { id: 5, nombre: 'Historia' },
      { id: 6, nombre: 'Literatura' },
      { id: 7, nombre: 'Biología' },
      { id: 8, nombre: 'Inglés' },
      { id: 9, nombre: 'Filosofía' },
      { id: 10, nombre: 'Geografía' },
      // Nuevas materias agregadas
      { id: 11, nombre: 'Álgebra Lineal' },
      { id: 12, nombre: 'Cálculo Diferencial' },
      { id: 13, nombre: 'Estadística' },
      { id: 14, nombre: 'Dibujo Técnico' },
      { id: 15, nombre: 'Ética Profesional' }
    ]);

    // Lista completa de alumnos (20 alumnos)
    setAlumnos([
      { id: 1, nombre: 'Juan Pérez García' },
      { id: 2, nombre: 'María López Martínez' },
      { id: 3, nombre: 'Carlos Sánchez Rodríguez' },
      { id: 4, nombre: 'Ana García Fernández' },
      { id: 5, nombre: 'Pedro Díaz González' },
      { id: 6, nombre: 'Laura Ruiz Pérez' },
      { id: 7, nombre: 'Jorge Martínez Sánchez' },
      { id: 8, nombre: 'Sofía Hernández López' },
      { id: 9, nombre: 'David Gómez García' },
      { id: 10, nombre: 'Elena Castro Díaz' },
      { id: 11, nombre: 'Miguel Ángel Ramírez' },
      { id: 12, nombre: 'Lucía Mendoza Vargas' },
      { id: 13, nombre: 'Fernando Ortega Silva' },
      { id: 14, nombre: 'Daniela Ríos Morales' },
      { id: 15, nombre: 'Ricardo Torres Jiménez' },
      { id: 16, nombre: 'Patricia Navarro Castro' },
      { id: 17, nombre: 'Alejandro Méndez Rojas' },
      { id: 18, nombre: 'Gabriela Soto León' },
      { id: 19, nombre: 'Raúl Herrera Mendoza' },
      { id: 20, nombre: 'Adriana Vega Campos' }
    ]);

    // Grupos completos por semestre (3 grupos por semestre)
    setGrupos([
      // Semestre 1
      { id: '1101', nombre: '1101', semestre: 1 },
      { id: '1102', nombre: '1102', semestre: 1 },
      { id: '1103', nombre: '1103', semestre: 1 },
      // Semestre 2
      { id: '2101', nombre: '2101', semestre: 2 },
      { id: '2102', nombre: '2102', semestre: 2 },
      { id: '2103', nombre: '2103', semestre: 2 },
      // Semestre 3
      { id: '3101', nombre: '3101', semestre: 3 },
      { id: '3102', nombre: '3102', semestre: 3 },
      { id: '3103', nombre: '3103', semestre: 3 },
      // Semestre 4
      { id: '4101', nombre: '4101', semestre: 4 },
      { id: '4102', nombre: '4102', semestre: 4 },
      { id: '4103', nombre: '4103', semestre: 4 },
      // Semestre 5
      { id: '5101', nombre: '5101', semestre: 5 },
      { id: '5102', nombre: '5102', semestre: 5 },
      { id: '5103', nombre: '5103', semestre: 5 },
      // Semestre 6
      { id: '6101', nombre: '6101', semestre: 6 },
      { id: '6102', nombre: '6102', semestre: 6 },
      { id: '6103', nombre: '6103', semestre: 6 },
      // Semestre 7
      { id: '7101', nombre: '7101', semestre: 7 },
      { id: '7102', nombre: '7102', semestre: 7 },
      { id: '7103', nombre: '7103', semestre: 7 },
      // Semestre 8
      { id: '8101', nombre: '8101', semestre: 8 },
      { id: '8102', nombre: '8102', semestre: 8 },
      { id: '8103', nombre: '8103', semestre: 8 },
      // Semestre 9
      { id: '9101', nombre: '9101', semestre: 9 },
      { id: '9102', nombre: '9102', semestre: 9 },
      { id: '9103', nombre: '9103', semestre: 9 }
    ]);

    // Profesores con especialidades
    setProfesores([
      { id: 1, nombre: 'Dr. Carlos Martínez', especialidad: 'Matemáticas' },
      { id: 2, nombre: 'Dra. Ana López', especialidad: 'Programación' },
      { id: 3, nombre: 'Mtro. José García', especialidad: 'Física' },
      { id: 4, nombre: 'Mtra. Laura Fernández', especialidad: 'Química' },
      { id: 5, nombre: 'Dr. Roberto Sánchez', especialidad: 'Historia' },
      { id: 6, nombre: 'Mtra. Claudia Ramírez', especialidad: 'Literatura' },
      { id: 7, nombre: 'Dr. Eduardo Morales', especialidad: 'Biología' },
      { id: 8, nombre: 'Mtra. Patricia Jiménez', especialidad: 'Inglés' }
    ]);
  }, []);

  // Filtrar grupos por semestre seleccionado
  const gruposFiltrados = semestreSeleccionado 
    ? grupos.filter(grupo => grupo.semestre === Number(semestreSeleccionado))
    : [];

  // Asignar alumno a grupo
  const manejarAsignacionGrupo = () => {
    if (!alumnoSeleccionado || !grupoSeleccionado) {
      alert('Por favor selecciona un alumno y un grupo');
      return;
    }

    const alumno = alumnos.find(a => a.id === Number(alumnoSeleccionado));
    const grupo = grupos.find(g => g.id === grupoSeleccionado);

    if (!alumno || !grupo) return;

    // Verificar si el alumno ya está asignado a este grupo
    const yaAsignado = asignacionesGrupo.some(
      asig => asig.alumnoId === alumno.id && asig.grupoId === grupo.id
    );

    if (yaAsignado) {
      alert('Este alumno ya está asignado a este grupo');
      return;
    }

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

    setMensajeConfirmacion(`✅ ${alumno.nombre} asignado a ${grupo.nombre} (Semestre ${grupo.semestre})`);
    setTimeout(() => setMensajeConfirmacion(''), 3000);
  };

  // Asignar materia a alumno
  const manejarAsignacionMateria = () => {
    if (!alumnoSeleccionadoMateria || !materiaSeleccionada) {
      alert('Por favor selecciona un alumno y una materia');
      return;
    }

    const alumno = alumnos.find(a => a.id === Number(alumnoSeleccionadoMateria));
    const materia = materias.find(m => m.id === Number(materiaSeleccionada));

    if (!alumno || !materia) return;

    // Verificar si el alumno ya está asignado a esta materia
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
    setAlumnoSeleccionadoMateria('');
    setMateriaSeleccionada('');

    setMensajeConfirmacion(`✅ ${alumno.nombre} asignado a ${materia.nombre}`);
    setTimeout(() => setMensajeConfirmacion(''), 3000);
  };

  // Eliminar asignación de grupo
  const eliminarAsignacion = (id) => {
    setAsignacionesGrupo(prev => prev.filter(asig => asig.id !== id));
  };

  // Eliminar asignación de materia
  const eliminarAsignacionMateria = (id) => {
    setAsignacionesMateria(prev => prev.filter(asig => asig.id !== id));
  };

  // Modificar profesor
  const manejarModificacionProfe = () => {
    if (!profeSeleccionado || !nuevoNombreProfe.trim()) {
      alert('Por favor selecciona un profesor y completa los campos');
      return;
    }

    setProfesores(prev => 
      prev.map(profe => 
        profe.id === Number(profeSeleccionado) 
          ? { 
              ...profe, 
              nombre: nuevoNombreProfe,
              especialidad: nuevaEspecialidad || profe.especialidad
            } 
          : profe
      )
    );

    setMensajeConfirmacion(`✅ Profesor modificado correctamente`);
    setTimeout(() => setMensajeConfirmacion(''), 3000);
    setProfeSeleccionado('');
    setNuevoNombreProfe('');
    setNuevaEspecialidad('');
  };

  // Organizar asignaciones por semestre
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

      <div className="menu-acciones">
        <h2>¿Qué deseas realizar?</h2>
        <div className="botones-acciones">
          <button 
            className={`boton-accion ${accionSeleccionada === 'asignarGrupo' ? 'active' : ''}`}
            onClick={() => setAccionSeleccionada('asignarGrupo')}
          >
            Asignar Grupo a Alumno
          </button>
          <button 
            className={`boton-accion ${accionSeleccionada === 'asignarMateria' ? 'active' : ''}`}
            onClick={() => setAccionSeleccionada('asignarMateria')}
          >
            Asignar Materia a Alumno
          </button>
          <button 
            className={`boton-accion ${accionSeleccionada === 'modificarProfe' ? 'active' : ''}`}
            onClick={() => setAccionSeleccionada('modificarProfe')}
          >
            Modificar Profesor
          </button>
        </div>
      </div>

      {accionSeleccionada === 'asignarGrupo' && (
        <section className="admin-section">
          <h2>Asignar Grupo a Alumno</h2>
          
          <div className="asignacion-container">
            {/* Lista de alumnos en cards */}
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

            {/* Selector de semestre y grupo */}
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

          {/* Resumen de selección */}
          {alumnoSeleccionado && grupoSeleccionado && (
            <div className="resumen-asignacion">
              <h3>Resumen de Asignación</h3>
              <p>
                <strong>Alumno:</strong> {alumnos.find(a => a.id === Number(alumnoSeleccionado))?.nombre}
              </p>
              <p>
                <strong>Grupo:</strong> {grupos.find(g => g.id === grupoSeleccionado)?.nombre} 
                (Semestre {grupos.find(g => g.id === grupoSeleccionado)?.semestre})
              </p>
            </div>
          )}

          {/* Botones de acción */}
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

          {/* Tabla de asignaciones */}
          {mostrarAsignaciones && (
            <div className="tabla-asignaciones">
              <h3>Asignaciones Realizadas</h3>
              
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
                ))
              ) : (
                <p>No hay asignaciones registradas</p>
              )}
            </div>
          )}
        </section>
      )}

      {accionSeleccionada === 'asignarMateria' && (
        <section className="admin-section">
          <h2>Asignar Materia a Alumno</h2>
          
          <div className="asignacion-container">
            {/* Lista de alumnos en cards */}
            <div className="lista-alumnos">
              <h3>Selecciona un Alumno</h3>
              <div className="alumnos-grid">
                {alumnos.map(alumno => (
                  <div 
                    key={alumno.id}
                    className={`alumno-card ${alumnoSeleccionadoMateria === alumno.id ? 'selected' : ''}`}
                    onClick={() => setAlumnoSeleccionadoMateria(alumno.id)}
                  >
                    {alumno.nombre}
                  </div>
                ))}
              </div>
            </div>

            {/* Lista de materias en cards */}
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

          {/* Resumen de selección */}
          {alumnoSeleccionadoMateria && materiaSeleccionada && (
            <div className="resumen-asignacion">
              <h3>Resumen de Asignación</h3>
              <p>
                <strong>Alumno:</strong> {alumnos.find(a => a.id === Number(alumnoSeleccionadoMateria))?.nombre}
              </p>
              <p>
                <strong>Materia:</strong> {materias.find(m => m.id === Number(materiaSeleccionada))?.nombre}
              </p>
            </div>
          )}

          {/* Botones de acción */}
          <div className="asignacion-actions">
            <button 
              className="admin-button" 
              onClick={manejarAsignacionMateria}
              disabled={!alumnoSeleccionadoMateria || !materiaSeleccionada}
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

          {/* Tabla de asignaciones de materias */}
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
      )}

      {accionSeleccionada === 'modificarProfe' && (
        <section className="admin-section">
          <h2>Modificar Profesor</h2>
          
          <div className="admin-select-group">
            <select
              className="admin-select"
              value={profeSeleccionado}
              onChange={e => setProfeSeleccionado(e.target.value)}
            >
              <option value="">Selecciona un profesor</option>
              {profesores.map(p => (
                <option key={p.id} value={p.id}>{p.nombre} - {p.especialidad}</option>
              ))}
            </select>
          </div>

          {profeSeleccionado && (
            <>
              <div className="admin-select-group">
                <input
                  type="text"
                  className="admin-select"
                  placeholder="Nuevo nombre del profesor"
                  value={nuevoNombreProfe}
                  onChange={e => setNuevoNombreProfe(e.target.value)}
                />
                
                <select
                  className="admin-select"
                  value={nuevaEspecialidad}
                  onChange={e => setNuevaEspecialidad(e.target.value)}
                >
                  <option value="">Mantener especialidad actual</option>
                  {materias.map(m => (
                    <option key={m.id} value={m.nombre}>{m.nombre}</option>
                  ))}
                </select>
              </div>

              <button 
                className="admin-button" 
                onClick={manejarModificacionProfe}
                disabled={!nuevoNombreProfe.trim()}
              >
                Actualizar Profesor
              </button>
            </>
          )}

          <div className="lista-profesores">
            <h3>Lista de Profesores</h3>
            <ul>
              {profesores.map(profe => (
                <li key={profe.id} className="item-profesor">
                  <div>
                    <strong>{profe.nombre}</strong> - {profe.especialidad}
                  </div>
                  <button 
                    className="boton-eliminar"
                    onClick={() => {
                      if (window.confirm(`¿Eliminar al profesor ${profe.nombre}?`)) {
                        setProfesores(prev => prev.filter(p => p.id !== profe.id));
                      }
                    }}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}