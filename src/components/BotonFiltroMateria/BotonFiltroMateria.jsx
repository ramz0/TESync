import './BotonFiltroMateriaStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BotonFiltroMateria = ({icono, activo, onClick, children}) => {
  return (
    <button 
      className={`btn-filtro-materia ${activo ? 'btn-filtro-materia-on' : ''}`} 
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icono} />
      {children}
    </button>
  );
}

export default BotonFiltroMateria;