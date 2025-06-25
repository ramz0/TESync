import './CardAlumnoCalificacionesStyle.css';

const CardAlumnoCalificaciones = ({ materia, verMaterias, estaExpandida }) => {
  const getColorCalificacion = (calificacion) => {
    if (calificacion >= 90) return '#4CAF50'; // Verde
    if (calificacion >= 80) return '#8BC34A'; // Verde claro
    if (calificacion >= 70) return '#FFC107'; // Amarillo
    if (calificacion >= 60) return '#FF9800'; // Naranja
    return '#F44336'; // Rojo
  };

  return (
    <div
      className={`materia-card ${estaExpandida ? 'expanded' : ''}`}
      onClick={verMaterias}
    >
      <div className="materia-header">
        <h3>{materia.nombre}</h3>
        <div
          className="calificacion-final"
          style={{ backgroundColor: getColorCalificacion(materia.calificacionFinal) }}
        >
          {materia.calificacionFinal}
        </div>
      </div>

      <div className="materia-info">
        <p><strong>Grupo:</strong> {materia.grupo}</p>
        <p><strong>Profesor:</strong> {materia.profesor}</p>
      </div>

      {estaExpandida && (
        <div className="unidades-container">
          <h4>Calificaciones por Unidad</h4>
          <div className="unidades-grid">
            {materia.unidadesCalificaciones.map((nota, idx) => (
              <div key={idx} className="unidad-item">
                <span>Unidad {idx + 1}</span>
                <span
                  className="unidad-nota"
                  style={{ color: getColorCalificacion(nota) }}
                >
                  {nota}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardAlumnoCalificaciones;
