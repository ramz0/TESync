import { useEffect, useState } from 'react';
import './TopBar.css';

export default function TopBar({ onPerfilToggle }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-left flex-row">
        <span className="logo flex-row-center">
          <p className='l-tes'>Tes</p>
          <p>ync</p>
        </span>
        <nav className="nav-links">
          <a href="/login">Inicio</a>
          <a href="/materias">Materias</a>
          <a href='#' onClick={onPerfilToggle}>Perfil</a>
        </nav>
      </div>
      {usuario && (
        <div className="topbar-right">
          <span>{usuario.nombre}</span>
          <span>{usuario.correo}</span>
        </div>
      )}
    </header>
  );
}