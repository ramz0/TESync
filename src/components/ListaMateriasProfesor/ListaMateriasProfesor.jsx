import BotonMaterias from "../BotonMaterias/BotonMaterias";

const ListaMateriasProfesor = () => {
  return (
    <nav className="flex-row-center">
      <BotonMaterias materia={"Programacion"} grupo={"4852"} estado={"listo"} />
      <BotonMaterias materia={"Programacion"} grupo={"4851"} estado={"pendiente"} />
    </nav>
  )
}

export default ListaMateriasProfesor;