import { useState } from 'react';
import './ModificarProfesor.css';

export default function ModificarProfesor({ profesores, setProfesores, materias, setMensajeConfirmacion }) {
  const [profeSeleccionado, setProfeSeleccionado] = useState('');
  const [nuevoNombreProfe, setNuevoNombreProfe] = useState('');
  const [nuevaEspecialidad, setNuevaEspecialidad] = useState('');

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

    setMensajeConfirmacion('✅ Profesor modificado correctamente');
    setTimeout(() => setMensajeConfirmacion(''), 3000);
    setProfeSeleccionado('');
    setNuevoNombreProfe('');
    setNuevaEspecialidad('');
  };

  const eliminarProfesor = (id) => {
    const profe = profesores.find(p => p.id === id);
    if (window.confirm(`¿Eliminar al profesor ${profe.nombre}?`)) {
      setProfesores(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
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
                onClick={() => eliminarProfesor(profe.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
