import './BotonMateriasStyle.css'
import GlareHover from '../GlareHover/GlareHover'

const BotonMaterias = ({materia, grupo, estado, mostrarOtroComponente}) => {
  return (
    <button className='btn-principal' onClick={mostrarOtroComponente}>

    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      // glareSize={300}
      transitionDuration={800}
      playOnce={false}
    >
      <span className={'flex-column contenedor-btn-m-g-' + estado}>
        <span 
          className={"flex-column btn-m-g btn-m-g-" + estado}
        >
          <p className="btn-txt-materia"> {materia} </p>
          <p className="btn-txt-grupo"> {grupo} </p>
        </span>
      </span>
    </GlareHover>
    </button>
  )
}

export default BotonMaterias;