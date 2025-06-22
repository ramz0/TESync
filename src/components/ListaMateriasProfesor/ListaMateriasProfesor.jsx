import './ListaMateriasProfesorStyle.css'
import BotonMaterias from "../BotonMaterias/BotonMaterias";
import FiltroListaMateriasProfesor from '../FiltroListaMateriasProfesor/FiltroListaMateriasProfesor';
import { useState } from 'react';

const ListaMateriasProfesor = ({enviarDatosMateria, mostrarComponente, cambiarColorTabla}) => {
  
  const listaMaterias =[ 
    {nombreMateria: "Programacion", grupoAsignado:"4852", estadoCalificaciones: "listo"},
    {nombreMateria: "Programacion", grupoAsignado:"4851", estadoCalificaciones: "pendiente"},
    {nombreMateria: "Base De Datos", grupoAsignado:"4101", estadoCalificaciones: "pendiente"},
    {nombreMateria: "Redes", grupoAsignado:"4402", estadoCalificaciones: "listo"},
    {nombreMateria: "Taller De Investigacion", grupoAsignado:"4202", estadoCalificaciones: "pendiente"},
  ] 
  
  const [mostrarMaterias, setMostrarMaterias] = useState(listaMaterias)

  const saberEstadoListaMaterias = (aviso) => {
    let listaMateriasFiltradas = []
    if (aviso[0].msg === 'materias listas') 
      listaMateriasFiltradas = listaMaterias.filter(lm => lm.estadoCalificaciones === "listo")
    else if (aviso[0].msg === 'materias pendientes')
      listaMateriasFiltradas = listaMaterias.filter(lm => lm.estadoCalificaciones === "pendiente")
    else
      listaMateriasFiltradas = listaMaterias

    console.log(listaMateriasFiltradas)
    setMostrarMaterias(listaMateriasFiltradas)
  }

  return (
    <main 
      className='flex-column flex-stretch contenedor-info-lista'
      data-aos="zoom-out-left"
    >
      <FiltroListaMateriasProfesor avisarEstadoListaMaterias={saberEstadoListaMaterias}/>
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
          {mostrarMaterias.map(m => (<BotonMaterias materia={m.nombreMateria} grupo={m.grupoAsignado} estado={m.estadoCalificaciones} mostrarOtroComponente={mostrarComponente} cambiarColorTabla={cambiarColorTabla} enviarDatosMateria={enviarDatosMateria} />))}
        </nav>
      </span>
    </main>
  )
}

export default ListaMateriasProfesor;