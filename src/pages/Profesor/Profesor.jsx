import { Link } from "react-router-dom"

import BotonMaterias from "../../components/BotonMaterias/BotonMaterias"

const Profesor = () => {
  return (
    <>
      <h1>Soy un Profesor</h1>
      <BotonMaterias estado={'pendiente'} materia={'Base De Datos'} grupo={'4852'}></BotonMaterias>
      <BotonMaterias estado={'listo'} materia={'Base De Datos'} grupo={'4851'}></BotonMaterias>
    </>
  )
}

export default Profesor