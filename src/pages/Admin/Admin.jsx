import './Admin.css';
import { useState, useEffect } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import AdminMenu from '../../components/AdminCard/AdminMenu/AdminMenu';
import AsignarGrupo from '../../components/AdminCard/AsignarGrupo/AsignarGrupo';
import AsignarMateria from '../../components/AdminCard/AsignarMateria/AsignarMateria';
import ModificarProfesor from '../../components/AdminCard/ModificarProfesor/ModificarProfesor';

export default function AdminPage() {
  const [materias, setMaterias] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState('');
  const [accionSeleccionada, setAccionSeleccionada] = useState(null);

  useEffect(() => {
    setMaterias([
      { id: 1, nombre: 'Matemáticas' },
      { id: 2, nombre: 'Programación' },
      { id: 3, nombre: 'Física' },
      { id: 4, nombre: 'Química' },
      { id: 5, nombre: 'Historia' },
      { id: 6, nombre: 'Literatura' },
      { id: 7, nombre: 'Biología' },
      { id: 8, nombre: 'Inglés' },
      { id: 9, nombre: 'Filosofía' },
      { id: 10, nombre: 'Geografía' },
      { id: 11, nombre: 'Álgebra Lineal' },
      { id: 12, nombre: 'Cálculo Diferencial' },
      { id: 13, nombre: 'Estadística' },
      { id: 14, nombre: 'Dibujo Técnico' },
      { id: 15, nombre: 'Ética Profesional' }
    ]);

    setAlumnos([
      { id: 1, nombre: 'Juan Pérez García' },
      { id: 2, nombre: 'María López Martínez' },
      { id: 3, nombre: 'Carlos Sánchez Rodríguez' },
      { id: 4, nombre: 'Ana García Fernández' },
      { id: 5, nombre: 'Pedro Díaz González' },
      { id: 6, nombre: 'Laura Ruiz Pérez' },
      { id: 7, nombre: 'Jorge Martínez Sánchez' },
      { id: 8, nombre: 'Sofía Hernández López' },
      { id: 9, nombre: 'David Gómez García' },
      { id: 10, nombre: 'Elena Castro Díaz' },
      { id: 11, nombre: 'Miguel Ángel Ramírez' },
      { id: 12, nombre: 'Lucía Mendoza Vargas' },
      { id: 13, nombre: 'Fernando Ortega Silva' },
      { id: 14, nombre: 'Daniela Ríos Morales' },
      { id: 15, nombre: 'Ricardo Torres Jiménez' },
      { id: 16, nombre: 'Patricia Navarro Castro' },
      { id: 17, nombre: 'Alejandro Méndez Rojas' },
      { id: 18, nombre: 'Gabriela Soto León' },
      { id: 19, nombre: 'Raúl Herrera Mendoza' },
      { id: 20, nombre: 'Adriana Vega Campos' }
    ]);

    setGrupos([
      { id: '1101', nombre: '1101', semestre: 1 },
      { id: '1102', nombre: '1102', semestre: 1 },
      { id: '1103', nombre: '1103', semestre: 1 },
      { id: '2101', nombre: '2101', semestre: 2 },
      { id: '2102', nombre: '2102', semestre: 2 },
      { id: '2103', nombre: '2103', semestre: 2 },
      { id: '3101', nombre: '3101', semestre: 3 },
      { id: '3102', nombre: '3102', semestre: 3 },
      { id: '3103', nombre: '3103', semestre: 3 },
      { id: '4101', nombre: '4101', semestre: 4 },
      { id: '4102', nombre: '4102', semestre: 4 },
      { id: '4103', nombre: '4103', semestre: 4 },
      { id: '5101', nombre: '5101', semestre: 5 },
      { id: '5102', nombre: '5102', semestre: 5 },
      { id: '5103', nombre: '5103', semestre: 5 },
      { id: '6101', nombre: '6101', semestre: 6 },
      { id: '6102', nombre: '6102', semestre: 6 },
      { id: '6103', nombre: '6103', semestre: 6 },
      { id: '7101', nombre: '7101', semestre: 7 },
      { id: '7102', nombre: '7102', semestre: 7 },
      { id: '7103', nombre: '7103', semestre: 7 },
      { id: '8101', nombre: '8101', semestre: 8 },
      { id: '8102', nombre: '8102', semestre: 8 },
      { id: '8103', nombre: '8103', semestre: 8 },
      { id: '9101', nombre: '9101', semestre: 9 },
      { id: '9102', nombre: '9102', semestre: 9 },
      { id: '9103', nombre: '9103', semestre: 9 }
    ]);

    setProfesores([
      { id: 1, nombre: 'Dr. Carlos Martínez', especialidad: 'Matemáticas' },
      { id: 2, nombre: 'Dra. Ana López', especialidad: 'Programación' },
      { id: 3, nombre: 'Mtro. José García', especialidad: 'Física' },
      { id: 4, nombre: 'Mtra. Laura Fernández', especialidad: 'Química' },
      { id: 5, nombre: 'Dr. Roberto Sánchez', especialidad: 'Historia' },
      { id: 6, nombre: 'Mtra. Claudia Ramírez', especialidad: 'Literatura' },
      { id: 7, nombre: 'Dr. Eduardo Morales', especialidad: 'Biología' },
      { id: 8, nombre: 'Mtra. Patricia Jiménez', especialidad: 'Inglés' }
    ]);
  }, []);

  return (
    <div className="admin-container">
      <TopBar />
      <h1>Panel de Administración</h1>

      {mensajeConfirmacion && (
        <div className="admin-confirmacion">{mensajeConfirmacion}</div>
      )}

      <AdminMenu
        accionSeleccionada={accionSeleccionada}
        setAccionSeleccionada={setAccionSeleccionada}
      />

      {accionSeleccionada === 'asignarGrupo' && (
        <AsignarGrupo
          alumnos={alumnos}
          grupos={grupos}
          setMensajeConfirmacion={setMensajeConfirmacion}
        />
      )}

      {accionSeleccionada === 'asignarMateria' && (
        <AsignarMateria
          alumnos={alumnos}
          materias={materias}
          setMensajeConfirmacion={setMensajeConfirmacion}
        />
      )}

      {accionSeleccionada === 'modificarProfe' && (
        <ModificarProfesor
          profesores={profesores}
          setProfesores={setProfesores}
          materias={materias}
          setMensajeConfirmacion={setMensajeConfirmacion}
        />
      )}
    </div>
  );
}
