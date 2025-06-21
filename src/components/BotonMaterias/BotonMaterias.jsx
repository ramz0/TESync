import './BotonMateriasStyle.css'

const BotonMaterias = ({materia, grupo, estado}) => {
  return (
    <span className={'contenedor-btn-m-g-' + estado}>
      <button className={"flex-column btn-m-g btn-m-g-" + estado}>
        <p className="btn-txt-materia"> {materia} </p>
        <p className="btn-txt-grupo"> {grupo} </p>
      </button>
    </span>
  )
}

export default BotonMaterias