import './CardAlumno.css';

function CardAlumno({ alumno, estadoPerfil }) {
  return (
    <div className="card-alumno">
      <div className="profile-header">
        <h2>{alumno.nombre}</h2>
        <p className="matricula">{alumno.matricula}</p>
      </div>

      <div className="info-section">
        {/* Mostrar correo sólo si existe */}
        {alumno.correo && <p><span className="label">Correo:</span> {alumno.correo}</p>}
        <p><span className="label">Grupo:</span> {alumno.grupo}</p>
      </div>
      
      <button className='btn-card-alumno' onClick={estadoPerfil}>Ocultar perfil</button>
    </div>
  );
}

export default CardAlumno;
