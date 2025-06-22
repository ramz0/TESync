import './ListaMateriasProfesorStyle.css'
import BotonMaterias from "../BotonMaterias/BotonMaterias";

const ListaMateriasProfesor = ({mostrarComponente, cambiarColorTabla}) => {

  return (
    <main 
      className='flex-column flex-stretch contenedor-info-lista'
      data-aos="zoom-out-left"
    >
      <header className='flex-row felx-btwn info-grupo'>
        <span className='flex-colum'>
          <h3>Materia:</h3>
          <h4>Grupo:</h4>
          <h4>Estado: "Pendiente o Calificaciones Cargadas"</h4>
        </span>
        <span className='flex-column titulo-lista-materias'>
          <p>Lista de Materias que Impartes:</p>
        </span>
      </header>
      <span className='flex-row'>

        <span className='flex-column contenedor-info-grupo'>
          <main className='grafica-grupo'>
            <p>Aquí va la grafica de estadisticas del grupo.</p>
          </main>
          <footer className="descripcion-grupo">
            <h3>Descripcion de Desempeño:</h3>
            <p >Aqui debe ir un texto muy grande o no tan grande pero que si de una descripcion del rendimiento del grupo, si no hay registro de calificaciones que tenga un mensaje "Aun no hay estadisticas".</p>
          </footer>
        </span>
        <nav 
          className="flex-column lista-materias"
           data-aos="zoom-out-down"
        >
          <BotonMaterias materia={"Programacion"} grupo={"4852"} estado={"listo"} mostrarOtroComponente={mostrarComponente} cambiarColorTabla={cambiarColorTabla} />
          <BotonMaterias materia={"Programacion"} grupo={"4851"} estado={"pendiente"} mostrarOtroComponente={mostrarComponente} cambiarColorTabla={cambiarColorTabla} />
          <BotonMaterias materia={"Programacion"} grupo={"4852"} estado={"listo"} mostrarOtroComponente={mostrarComponente} cambiarColorTabla={cambiarColorTabla} />
          <BotonMaterias materia={"Programacion"} grupo={"4851"} estado={"pendiente"} mostrarOtroComponente={mostrarComponente} cambiarColorTabla={cambiarColorTabla} />
          <BotonMaterias materia={"Programacion"} grupo={"4852"} estado={"listo"} mostrarOtroComponente={mostrarComponente} cambiarColorTabla={cambiarColorTabla} />
          <BotonMaterias materia={"Programacion"} grupo={"4851"} estado={"pendiente"} mostrarOtroComponente={mostrarComponente} cambiarColorTabla={cambiarColorTabla} />
        </nav>
      </span>
    </main>
  )
}

export default ListaMateriasProfesor;