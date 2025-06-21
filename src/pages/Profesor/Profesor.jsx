import './ProfesorStyle.css'
import { useState } from 'react';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../../components/InfoCard/InfoCard.jsx';
import ListaMateriasProfesor from '../../components/ListaMateriasProfesor/ListaMateriasProfesor.jsx';
import Dashboard from '../dashboard/Dashboard';
import BotonExportarExcel from '../../components/BotonExportarExcel/BotonExportarExcel';
import TablaProfesores from '../../components/TablaProfesores/TablaProfesores';

const initialData = [
  {
    grupo: '4851',
    alumnos: [
      {
        nombre: 'Ana Pérez',
        materias: [
          { nombre: 'Programacion web', calificaciones: [8, 9, 7] },
          { nombre: 'Base de datos', calificaciones: [7, 8, 9] },
          { nombre: 'Diseño web', calificaciones: [6, 7, 8] },
        ],
      },
      {
        nombre: 'Luis Gómez',
        materias: [
          { nombre: 'Programacion web', calificaciones: [10, 9, 10] },
          { nombre: 'Base de datos', calificaciones: [9, 9, 9] },
          { nombre: 'Diseño web', calificaciones: [7, 8, 9] },
        ],
      },
      {
        nombre: 'María López',
        materias: [
          { nombre: 'Programacion web', calificaciones: [7, 8, 9] },
          { nombre: 'Base de datos', calificaciones: [6, 5, 7] },
          { nombre: 'Diseño web', calificaciones: [8, 9, 8] },
        ],
      },
      {
        nombre: 'Pedro Martínez',
        materias: [
          { nombre: 'Programacion web', calificaciones: [5, 6, 4] }, 
          { nombre: 'Bases de datos', calificaciones: [7, 7, 6] }, 
          { nombre: 'Diseño web', calificaciones: [6, 6, 7] },  
        ],
      },
    ],
  },
  {
    grupo: '4852',
    alumnos: [
      {
        nombre: 'Carlos Ruiz',
        materias: [
          { nombre: 'Programacion web', calificaciones: [6, 7, 8] },
          { nombre: 'Base de datos', calificaciones: [9, 9, 10] },
          { nombre: 'Diseño web', calificaciones: [7, 8, 9] },
        ],
      },
      {
        nombre: 'Marta Díaz',
        materias: [
          { nombre: 'Programacion web', calificaciones: [7, null, 8] },
          { nombre: 'Base de datos', calificaciones: [10, 10, 10] },          
          { nombre: 'Diseño web', calificaciones: [6, 7, 7] },
        ],
      },
      {
        nombre: 'Jorge Torres',
        materias: [
          { nombre: 'Programacion web', calificaciones: [5, 6, 5] },
          { nombre: 'Base de datos', calificaciones: [8, 7, 9] },
          { nombre: 'Diseño web', calificaciones: [7, 8, 6] },
        ],
      },
      {
        nombre: 'Lucía Fernández',
        materias: [
          { nombre: 'Programacion web', calificaciones: [9, 9, 10] },
          { nombre: 'Base de datos', calificaciones: [10, 9, 10] },
          { nombre: 'Diseño web', calificaciones: [8, 9, 10] }, 
        ],
      },
    ],
  },
];

const todasCalificacionesCompletas = (materias) =>
  materias.every((materia) =>
    materia.calificaciones.every((cal) => cal !== null && cal !== undefined)
  );

const Profesor = () => {
  const [datos, setDatos] = useState(initialData);
  const [resultados, setResultados] = useState({});

  const handleChangeCalificacion = (grupoIndex, alumnoIndex, materiaIndex, unidadIndex, value) => {
    const valNum = value === '' ? null : Number(value);
    if (valNum !== null && (isNaN(valNum) || valNum < 0 || valNum > 10)) return;

    const newDatos = [...datos];
    newDatos[grupoIndex].alumnos[alumnoIndex].materias[materiaIndex].calificaciones[unidadIndex] = valNum;
    setDatos(newDatos);
  };

  const handleChangeNombreAlumno = (grupoIndex, alumnoIndex, value) => {
    const newDatos = [...datos];
    newDatos[grupoIndex].alumnos[alumnoIndex].nombre = value;
    setDatos(newDatos);
  };

  const handleChangeNombreMateria = (grupoIndex, alumnoIndex, materiaIndex, value) => {
    const newDatos = [...datos];
    newDatos[grupoIndex].alumnos[alumnoIndex].materias[materiaIndex].nombre = value;
    setDatos(newDatos);
  };

  const calcularFinales = (grupoIndex, alumnoIndex) => {
    const alumno = datos[grupoIndex].alumnos[alumnoIndex];
    const res = alumno.materias.map((materia) => {
      const notas = materia.calificaciones.filter((c) => c !== null && c !== undefined);
      const promedio = notas.length
        ? notas.reduce((a, b) => a + b, 0) / notas.length
        : 0;
      let estado = '';
      if (promedio >= 7) estado = 'Aprobó';
      else if (promedio < 6) estado = 'Reprobó';
      else estado = 'Regular';
      return {
        materia: materia.nombre,
        promedio: promedio.toFixed(2),
        estado,
      };
    });
    setResultados((prev) => ({
      ...prev,
      [`${grupoIndex}-${alumnoIndex}`]: res,
    }));
  };

  

  return (
    <div className='fondo-Profesor'>
      <Dashboard/>
      <InfoCard/>
      <ListaMateriasProfesor />
      <BotonExportarExcel datosParaExcel = {datos} icono={faFileExcel} texto={"Exportar Calificaciones"} />
      <TablaProfesores/>

      {datos.map((grupo, grupoIndex) => (
        <div key={grupo.grupo} style={{ marginBottom: '20px' }}>
          <h2 style={{ marginBottom: '6px', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Grupo {grupo.grupo}
          </h2>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {grupo.alumnos.map((alumno, alumnoIndex) => {
              const completo = todasCalificacionesCompletas(alumno.materias);
              const key = `${grupoIndex}-${alumnoIndex}`;
              return (
                <div
                  key={alumno.nombre + alumnoIndex}
                  style={{
                    border: '1px solid',
                    borderColor: completo ? 'green' : 'red',
                    borderRadius: '6px',
                    padding: '6px',
                    width: '220px',
                    backgroundColor: completo ? '#e6f9e6' : '#f9e6e6',
                    fontSize: '0.85rem',
                  }}
                >
                  <input
                    type="text"
                    value={alumno.nombre}
                    onChange={(e) => handleChangeNombreAlumno(grupoIndex, alumnoIndex, e.target.value)}
                    style={{
                      fontSize: '1rem',
                      marginBottom: '6px',
                      width: '100%',
                      boxSizing: 'border-box',
                      border: 'none',
                      borderBottom: '1px solid #666',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      fontWeight: 'bold',
                      cursor: 'text',
                    }}
                  />
                  {alumno.materias.map((materia, materiaIndex) => (
                    <div key={materia.nombre + materiaIndex} style={{ marginBottom: '6px' }}>
                      <input
                        type="text"
                        value={materia.nombre}
                        onChange={(e) =>
                          handleChangeNombreMateria(
                            grupoIndex,
                            alumnoIndex,
                            materiaIndex,
                            e.target.value
                          )
                        }
                        style={{
                          fontWeight: 'bold',
                          fontSize: '0.9rem',
                          marginBottom: '3px',
                          width: '100%',
                          boxSizing: 'border-box',
                          border: 'none',
                          borderBottom: '1px solid #aaa',
                          backgroundColor: 'transparent',
                          outline: 'none',
                          cursor: 'text',
                        }}
                      />
                      <table
                        style={{
                          width: '100%',
                          borderCollapse: 'collapse',
                          marginTop: '3px',
                        }}
                      >
                        <thead>
                          <tr>
                            {materia.calificaciones.map((_, unidadIndex) => (
                              <th
                                key={unidadIndex}
                                style={{
                                  border: '1px solid #ddd',
                                  padding: '3px',
                                  backgroundColor: '#f0f0f0',
                                  fontWeight: 'normal',
                                  fontSize: '0.75rem',
                                }}
                              >
                                Unidad {unidadIndex + 1}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {materia.calificaciones.map((cal, unidadIndex) => (
                              <td
                                key={unidadIndex}
                                style={{ border: '1px solid #ddd', padding: '3px' }}
                              >
                                <input
                                  type="number"
                                  min="0"
                                  max="10"
                                  value={cal === null ? '' : cal}
                                  onChange={(e) =>
                                    handleChangeCalificacion(
                                      grupoIndex,
                                      alumnoIndex,
                                      materiaIndex,
                                      unidadIndex,
                                      e.target.value
                                    )
                                  }
                                  style={{ width: '40px', fontSize: '0.8rem' }}
                                />
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}

                  <button
                    onClick={() => calcularFinales(grupoIndex, alumnoIndex)}
                    style={{
                      marginTop: '5px',
                      fontSize: '0.85rem',
                      padding: '4px 8px',
                      cursor: 'pointer',
                    }}
                  >
                    Ver calificaciones finales
                  </button>

                  {resultados[key] && (
                    <div style={{ marginTop: '6px', fontSize: '0.85rem' }}>
                      {resultados[key].map(({ materia, promedio, estado }) => (
                        <p key={materia} style={{ margin: '2px 0' }}>
                          <strong>{materia}:</strong> {promedio} — {estado}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profesor;