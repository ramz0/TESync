import { useEffect, useState } from 'react';
import CardAlumno from '../../components/CardAlumno/CardAlumno';
import CardAlumnoCalificaciones from '../../components/CardAlumnoCalificaciones/CardAlumnoCalificaciones';
import TopBar from '../../components/TopBar/TopBar';
import './AlumnoPerfil.css';

export default function AlumnoPerfil() {
  const [alumno, setAlumno] = useState(null);
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);

  useEffect(() => {
    const matricula = localStorage.getItem('matricula');
    if (!matricula) return;

    fetch(`http://localhost:3000/api/alumnos/${matricula}/materias`)
      .then(res => res.json())
      .then(data => setAlumno(data))
      .catch(err => console.error(err));
  }, []);

  const togglePerfil = () => setMostrarPerfil(!mostrarPerfil);
  const toggleMateria = (index) => setMateriaSeleccionada(materiaSeleccionada === index ? null : index);

  if (!alumno) return <p>Cargando datos del alumno...</p>;

  // Opcional: calcular promedio general (promedio de calificacionFinal de todas las materias)
  const promedioGeneral = alumno.materias && alumno.materias.length > 0
    ? (alumno.materias.reduce((acc, m) => acc + m.calificacionFinal, 0) / alumno.materias.length).toFixed(2)
    : 'N/A';

  return (
    <>
      <TopBar onPerfilToggle={togglePerfil} />

      {mostrarPerfil && (
        <span className="perfil-container">
          <CardAlumno alumno={alumno} estadoPerfil={togglePerfil} />
        </span>
      )}

      <header className="header-section">
        <div className="alumno-info">
          <div>
            <h1 className="alumno-nombre">{alumno.nombre}</h1>
            <p className="alumno-datos">
              <span>Grupo: {alumno.grupo}</span>
              {alumno.correo && <span>Correo: {alumno.correo}</span>}
            </p>
          </div>
        </div>
        <div className="promedio-container">
          <div className="promedio-circulo">
            <span>Promedio</span>
            <strong>{promedioGeneral}</strong>
          </div>
        </div>
      </header>

      <div className="main-container">
        <div className="flex-column materias-container">
          <h2 className="materias-titulo">Materias y Calificaciones</h2>

          <span className="materias-grid">
            {alumno.materias && alumno.materias.length > 0 ? (
              alumno.materias.map((materia, i) => (
                <CardAlumnoCalificaciones
                  key={i}
                  materia={materia}
                  estaExpandida={materiaSeleccionada === i}
                  verMaterias={() => toggleMateria(i)}
                />
              ))
            ) : (
              <p>No hay materias registradas.</p>
            )}
          </span>

          <div className="boton-container">
            <button onClick={() => window.history.back()} className="boton-regresar">
              ← Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
