import './AdminMenu.css';

export default function AdminMenu({ accionSeleccionada, setAccionSeleccionada }) {
  return (
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
  );
}
