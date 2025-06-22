import './TablaProfesoresStyle.css';

const TablaProfesores = ({datosMateria, estadoCalificaciones}) => {
  return (
    <main className='flex-column'>
      <h3 className={'nombre-materia ' + estadoCalificaciones}> { `${datosMateria.nombreMateria} ${datosMateria.grupoMateria}` } </h3>
      <table className="cuerpo-tabla sombra">
        <tr className={estadoCalificaciones}>
          <th>alumno</th>
          <th>matricula</th>
          <th>correo</th>
          <th>calificacion</th>
        </tr>
        <tr>
          <td>Luis</td>
          <td>1212</td>
          <td>luis@ramz.com</td>
          <td>0</td>
        </tr>
      </table>
    </main>
  )
}

export default TablaProfesores;