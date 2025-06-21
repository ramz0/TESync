import './BotonMateriasStyle.css'
import GlareHover from '../GlareHover/GlareHover'

const BotonMaterias = ({materia, grupo, estado}) => {
  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      // glareSize={300}
      transitionDuration={800}
      playOnce={false}
    >
      <span className={'contenedor-btn-m-g-' + estado}>
        <button className={"flex-column btn-m-g btn-m-g-" + estado}>
          <p className="btn-txt-materia"> {materia} </p>
          <p className="btn-txt-grupo"> {grupo} </p>
        </button>
      </span>
    </GlareHover>
  )
}

export default BotonMaterias;