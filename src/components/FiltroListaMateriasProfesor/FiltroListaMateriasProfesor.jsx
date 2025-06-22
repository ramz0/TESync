import './FiltroListaMateriaProfesorStyle.css'
import { useState } from 'react';
import { faFileCircleCheck, faFileCircleExclamation, faFile } from '@fortawesome/free-solid-svg-icons';
import BotonFiltroMateria from '../BotonFiltroMateria/BotonFiltroMateria';

const FiltroListaMateriasProfesor = () => {
  const [botonesActivos, setBotonesActivos] = useState([
    {id: 0, icono: faFileCircleCheck, msg: "materias listas", estado: false},
    {id: 1, icono: faFileCircleExclamation, msg: "materias pendientes", estado: false},
    {id: 2, icono: faFile, msg: "todas las materias", estado: false},
  ]);

  const seleccionarBoton = (id) => {
    setBotonesActivos(botonesActivos.map(ba => ({
      ...ba,
      estado: ba.id === id
    })));
  };

  return (
    <main className='titulo-filtro-Lista-Materias'>
      <h3>Filtro para tus materias.</h3>
      <span className='flex-row'>
        {botonesActivos.map((cb) => (
          <BotonFiltroMateria 
            key={cb.id} 
            icono={cb.icono} 
            activo={cb.estado} 
            onClick={() => seleccionarBoton(cb.id)}
          >
            {cb.msg}
          </BotonFiltroMateria>
        ))}
      </span>
    </main>
  );
}

export default FiltroListaMateriasProfesor;