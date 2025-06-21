import './ListaMateriasProfesorStyle.css'
import BotonMaterias from "../BotonMaterias/BotonMaterias";

const ListaMateriasProfesor = () => {
  return (
    <main className='flex-row flex-stretch contenedor-info-lista'>
      <span className='flex-column contenedor-info-grupo'>
        <header className='flex-column info-grupo'>
          <h3>Materia:</h3>
          <h4>Grupo:</h4>
          <h4>Estado: "Pendiente o Calificaciones Cargadas"</h4>
        </header>
        <main className='grafica-grupo'>
          <p>Aquí va la grafica de estadisticas del grupo.</p>
        </main>
        <footer className="descripcion-grupo">
          <h3>Descripcion de Desempeño:</h3>
          <p >Aqui debe ir un texto muy grande o no tan grande pero que si de una descripcion del rendimiento del grupo, si no hay registro de calificaciones que tenga un mensaje "Aun no hay estadisticas".</p>
        </footer>
      </span>
      <nav className="flex-column lista-materias">
        <header>
          <p>Lista de Materias que Impartes:</p>
        </header>
        <BotonMaterias materia={"Programacion"} grupo={"4852"} estado={"listo"} />
        <BotonMaterias materia={"Programacion"} grupo={"4852"} estado={"listo"} />
        <BotonMaterias materia={"Programacion"} grupo={"4851"} estado={"pendiente"} />
        <BotonMaterias materia={"Programacion"} grupo={"4851"} estado={"pendiente"} />
        <BotonMaterias materia={"Programacion"} grupo={"4852"} estado={"listo"} />
      </nav>
    </main>
  )
}

export default ListaMateriasProfesor;