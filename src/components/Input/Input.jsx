import './InputStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Input = ({tipo, textoInterno, hacer}) => {
  return (
    <>
      <span className='input-final flex-row-center'>
      <FontAwesomeIcon icon={faUser} className='icono-input-login'/>
      <input className="input-principal" type={tipo} placeholder={textoInterno} onChange={hacer} />
      </span>
    </>
  )
}

export default Input