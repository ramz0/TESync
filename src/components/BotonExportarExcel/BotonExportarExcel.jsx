import './BotonExportarExcelStyle.css'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BotonExportarExcel = ({datosParaExcel, icono, texto}) => {
  
  const exportarExcel = () => {
      const rows = [];
      datosParaExcel.forEach((grupo) => {
        grupo.alumnos.forEach((alumno) => {
          alumno.materias.forEach((materia) => {
            const notas = materia.calificaciones.filter((c) => c !== null && c !== undefined);
            const promedio = notas.length
              ? notas.reduce((a, b) => a + b, 0) / notas.length
              : 0;
  
            let estado = '';
            if (promedio >= 7) estado = 'Aprobó';
            else if (promedio < 6) estado = 'Reprobó';
            else estado = 'Regular';
  
            rows.push({
              Grupo: grupo.grupo,
              Alumno: alumno.nombre,
              Materia: materia.nombre,
              'Calificación Unidad 1': materia.calificaciones[0] ?? '',
              'Calificación Unidad 2': materia.calificaciones[1] ?? '',
              'Calificación Unidad 3': materia.calificaciones[2] ?? '',
              'Calificación Final': promedio.toFixed(2),
              Estado: estado,
            });
          });
        });
      });
  
      const worksheet = XLSX.utils.json_to_sheet(rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Calificaciones');
  
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(dataBlob, 'calificaciones.xlsx');
  };

  return (
    <button 
      className='btn-exportar-excel flex-row-center flex-evenly' 
      onClick={exportarExcel()} 
      title="Exportar calificaciones a Excel"
    >
      {texto}
      <span className='btn-icono-exportar'>
        <FontAwesomeIcon icon={icono} />
      </span>
    </button>
  )
}

export default BotonExportarExcel;