import './CalificacionesAlumnosStyle.css'
import { useState } from 'react';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

import TablaProfesores from "../TablaProfesores/TablaProfesores";
import BotonExportarExcel from "../BotonExportarExcel/BotonExportarExcel";

const CalificacionesAlumnos = ({estadoCalificacionesTabla}) => {

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
  
  const [datos] = useState(initialData);

  return (
    <samp data-aos="fade-up">
      <BotonExportarExcel datosParaExcel = {datos} icono={faFileExcel} texto={"Exportar Calificaciones"} />   
      <samp className='contenedor-instrucciones-calificaiones'>
      <h3>Instrucciones:</h3>
      <h4>Archivo Excel.</h4>
      <ol type='A'>
        <li>Puedes Descargar la plantilla para llevar el registro de tus alumnos en excel.</li> 
        <li>Posteriormente cargar esas calificaciones con ese mismo excel (Cargalas con la plantilla que te proporcionamos nosotros).</li>
        <ol type='1'>
          <li>Descarga el Excel.</li>
          <li>Llena el excel con las calificaciones <strong>por unidad</strong> de tus alumnos.</li>
          <li>Suelta el archivo excel que tienes sobre la tabla.</li>
        </ol>
      </ol>
      <h4>Tabla.</h4>
      <ol type='A'>
        <li>La tabla puede ser modificada desde aquí mismo.</li>
        <li>Puedes borrar una unidad completa si te equivocaste.</li>
        <li>Define el tiempo en el que debes de registrar tus unidades.</li>
      </ol>
      
      </samp>
      <TablaProfesores estadoCalificaciones={estadoCalificacionesTabla} />
    </samp>
  );
}

export default CalificacionesAlumnos;