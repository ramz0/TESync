import './HomeStyle.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <span className='flex-row-center'>
        <h1>Tes</h1>
        <h2>ync</h2>
      </span>

      <div className='felx-evenly'>
        <Link to="/login">
          <button className='boton-n1'>
            Iniciar Sesión
          </button>
        </Link>
        <Link to="/register">
          <button className='boton-n1'>
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}