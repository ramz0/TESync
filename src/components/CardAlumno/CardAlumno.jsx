import './CardAlumno.css';

function CardAlumno({ alumno, estadoPerfil }) {
  console.log("💡 Alumno recibido en CardAlumno:", alumno); // Esto debe imprimirse

  return (
    <div className="card-alumno">
      <div className="profile-header">
        <h2>{alumno.nombre}</h2>
        <p className="matricula">Matrícula: {alumno.matricula || 'NO VIENE'}</p>
      </div>

      <div className="info-section">
        <p><span className="label">Grupo:</span> {alumno.grupo}</p>
      </div>

      <button className='btn-card-alumno' onClick={estadoPerfil}>Ocultar perfil</button>
    </div>
  );
}


export default CardAlumno;
