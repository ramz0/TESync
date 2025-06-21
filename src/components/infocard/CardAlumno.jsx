import './CardAlumno.css';
import AlumnoImg from '../../assets/Alumno.jpg'; // Ruta ajustada

function AlumnoPerfil() {
  const alumno = {
    nombre: "Carlos García",
    matricula: "A98765432",
    correo: "carlos.garcia@escuela.com",
    grupo: "ITI-2024-B",
    calificaciones: [
      {
        materia: "Programación",
        unidades: [
          { numero: 1, calificacion: 92 },
          { numero: 2, calificacion: 88 }
        ],
        final: 90
      }
    ]
  };

  return (
    <div className="alumno-perfil">
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

      <div className="calificaciones-section">
        <h3>📊 Calificaciones</h3>
        {alumno.calificaciones.map((materia, index) => (
          <div key={index} className="materia">
            <h4>{materia.materia}</h4>
            <div className="unidades">
              {materia.unidades.map((unidad, idx) => (
                <span key={idx}>U{unidad.numero}: {unidad.calificacion}</span>
              ))}
            </div>
            <p className="promedio">Promedio: <strong>{materia.final}</strong></p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AlumnoPerfil;