import './CardAlumno.css';
import AlumnoImg from '../../assets/Alumno.jpg'; // Ruta ajustada

function CardAlumno({estadoPerfil}) {
  const alumno = {
    nombre: "Carlos García",
    matricula: "A98765432",
    correo: "carlos.garcia@escuela.com",
    grupo: "ITI-2024-B",

  };

  return (
    <div className="card-alumno">
      <div className="profile-header">
        <img 
          src={AlumnoImg} 
          alt={`Foto de ${alumno.nombre}`}
          className="profile-img"
        />
        <h2>{alumno.nombre}</h2>
        <p className="matricula">{alumno.matricula}</p>
      </div>

      <div className="info-section">
        <p><span className="label">Correo:</span> {alumno.correo}</p>
        <p><span className="label">Grupo:</span> {alumno.grupo}</p>
      </div>
      
    <button className='btn-card-alumno' onClick={estadoPerfil}>Ocultar perfil</button>

    </div>
  );


}

export default CardAlumno;