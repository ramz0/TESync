import { useState, useEffect } from 'react';
import './ModificarProfesor.css';

const API_BASE_URL = 'http://localhost:3000/api/maestros';

export default function ModificarProfesor({ setMensajeConfirmacion }) {
  const [modo, setModo] = useState('crear');
  const [cedulaSeleccionada, setCedulaSeleccionada] = useState('');
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [profesores, setProfesores] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProfesores = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/obtener-maestros`);
      const data = await response.json();
      setProfesores(data);
    } catch (error) {
      setMensajeConfirmacion('❌ Error al cargar profesores');
      setTimeout(() => setMensajeConfirmacion(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfesores();
  }, []);

  useEffect(() => {
    if (cedulaSeleccionada && modo === 'editar') {
      const profesor = profesores.find((p) => p.cedula === cedulaSeleccionada);
      if (profesor) {
        setNombre(profesor.nombre);
        setCedula(profesor.cedula);
        setCorreo(profesor.correo || '');
        setPassword('');
      }
    }
  }, [cedulaSeleccionada, modo, profesores]);

  const resetFormulario = () => {
    setNombre('');
    setCedula('');
    setCorreo('');
    setPassword('');
    setCedulaSeleccionada('');
    setModo('crear');
  };

  const crearProfesor = async () => {
    if (!nombre.trim() || !cedula.trim() || !password.trim()) {
      alert('Por favor complete todos los campos obligatorios');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/crear-maestro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, cedula, correo: correo || undefined, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear profesor');
      }

      const nuevoProfesor = await response.json();
      setProfesores((prev) => [...prev, nuevoProfesor]);
      setMensajeConfirmacion('✅ Profesor creado correctamente');
      setTimeout(() => setMensajeConfirmacion(''), 3000);
      resetFormulario();
    } catch (error) {
      setMensajeConfirmacion(`❌ ${error.message}`);
      setTimeout(() => setMensajeConfirmacion(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const actualizarProfesor = async () => {
    if (!cedulaSeleccionada) return;

    setLoading(true);
    try {
      const updateData = {
        nombre,
        correo: correo || undefined,
        ...(password && { password })
      };
      const response = await fetch(`${API_BASE_URL}/actualizar-maestro/${cedulaSeleccionada}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar profesor');
      }

      const profesorActualizado = await response.json();
      setProfesores((prev) => prev.map((p) => (p.cedula === cedulaSeleccionada ? profesorActualizado : p)));
      setMensajeConfirmacion('✅ Profesor actualizado correctamente');
      setTimeout(() => setMensajeConfirmacion(''), 3000);
    } catch (error) {
      setMensajeConfirmacion(`❌ ${error.message}`);
      setTimeout(() => setMensajeConfirmacion(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const eliminarProfesor = async (cedulaEliminar) => {
    if (!window.confirm(`¿Eliminar profesor con cédula ${cedulaEliminar}?`)) return;
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/eliminar-maestro/${cedulaEliminar}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al eliminar profesor');
      }

      setProfesores((prev) => prev.filter((p) => p.cedula !== cedulaEliminar));
      setMensajeConfirmacion('✅ Profesor eliminado correctamente');
      setTimeout(() => setMensajeConfirmacion(''), 3000);
      if (cedulaEliminar === cedulaSeleccionada) resetFormulario();
    } catch (error) {
      setMensajeConfirmacion(`❌ ${error.message}`);
      setTimeout(() => setMensajeConfirmacion(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`admin-section ${modo === 'editar' ? 'edicion' : ''}`}>
      <h2>{modo === 'crear' ? 'Crear Nuevo Profesor' : 'Editar Profesor'}</h2>
      {loading && <div className="loading">Cargando...</div>}

      {modo === 'editar' && (
        <div className="admin-select-group">
          <select
            className="admin-select"
            value={cedulaSeleccionada}
            onChange={(e) => {
              setCedulaSeleccionada(e.target.value);
              setModo('editar');
            }}
            disabled={loading}
          >
            <option value="">Selecciona un profesor</option>
            {profesores.map((p) => (
              <option key={p.cedula} value={p.cedula}>{p.nombre} - {p.cedula}</option>
            ))}
          </select>
          <button className="admin-button" onClick={() => setModo('crear')} disabled={loading}>+ Nuevo Profesor</button>
        </div>
      )}

      <div className="admin-form-group">
        <div className="admin-input-group">
          <label>Nombre completo:</label>
          <input type="text" className="admin-input" value={nombre} onChange={(e) => setNombre(e.target.value)} disabled={loading} />
        </div>
        <div className="admin-input-group">
          <label>Cédula:</label>
          <input type="text" className="admin-input" value={cedula} onChange={(e) => setCedula(e.target.value)} disabled={modo === 'editar' || loading} />
        </div>
        <div className="admin-input-group">
          <label>Correo electrónico:</label>
          <input type="email" className="admin-input" value={correo} onChange={(e) => setCorreo(e.target.value)} disabled={loading} />
        </div>
        <div className="admin-input-group">
          <label>Contraseña:</label>
          <input type="password" className="admin-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={modo === 'editar' ? 'Dejar vacío si no cambia' : ''} disabled={loading} />
        </div>
      </div>

      <div className="admin-button-group">
        {modo === 'crear' ? (
          <button className="admin-button" onClick={crearProfesor} disabled={!nombre || !cedula || !password || loading}>Crear Profesor</button>
        ) : (
          <button className="admin-button" onClick={actualizarProfesor} disabled={!nombre || !cedulaSeleccionada || loading}>Actualizar Profesor</button>
        )}
        <button className="admin-button-cancel" onClick={resetFormulario} disabled={loading}>Cancelar</button>
      </div>

      <div className="lista-profesores">
        <h3>Lista de Profesores</h3>
        {profesores.length === 0 ? (
          <p>No hay profesores registrados</p>
        ) : (
          <ul>
            {profesores.map((p) => (
              <li key={p.cedula} className="item-profesor">
                <div>
                  <strong>{p.nombre}</strong> - Cédula: {p.cedula}
                  <br />
                  Correo: {p.correo || 'No especificado'}
                </div>
                <button className="boton-eliminar" onClick={() => eliminarProfesor(p.cedula)} disabled={loading}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}