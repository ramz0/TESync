import React, { useEffect, useState } from 'react';
import './InforCard.css';

function InfoCard() {
  const [rol, setRol] = useState('');
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const rolGuardado = localStorage.getItem('rol');
    const usuarioGuardado = localStorage.getItem('usuario');
    setRol(rolGuardado);
    setUsuario(usuarioGuardado ? JSON.parse(usuarioGuardado) : null);
  }, []);

  if (!rol || !usuario) {
    return <div className="InfoCard">Cargando información...</div>;
  }

  return (
    
    <div className="InfoCard">
            <Dashboard></Dashboard>
      
      <h2>Bienvenido {usuario.nombre}</h2>

      {rol === 'profesor' && (
        <div>
          <p><strong>Cédula:</strong> {usuario.cedula}</p>
          <p><strong>Correo:</strong> {usuario.correo}</p>
          <p><strong>Materias:</strong> {usuario.materias?.length || 0}</p>
        </div>
      )}

      {rol === 'alumno' && (
        <div>
          <p><strong>Matrícula:</strong> {usuario.matricula}</p>
          <p><strong>Correo:</strong> {usuario.correo}</p>
          <p><strong>Grupo:</strong> {usuario.grupo}</p>
        </div>
      )}
    </div>
  );
}




export default InfoCard;
