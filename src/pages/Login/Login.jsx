import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiTesync } from '../../servicios/axios.js';
import './LoginStyle.css';

import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

import teschaImage from '../../assets/tescha.jpg';
import Input from '../../components/Input/Input';

export default function Login() {
  const [usuario, setUsuario] = useState(''); // matrícula o cédula
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const rutasApiTesync = {
    loginAlumno: 'http://localhost:3000/api/alumnos/login',
    loginProfesor: 'http://localhost:3000/api/maestros/login',
  };

  const iniciarSesion = async (e, tipoUsuario) => {
    e.preventDefault();

    if (!usuario || !password) {
      setError('Debes llenar los campos');
      return;
    }
    
// 🔒 Verificación de Admin (sin usar backend)
  if (
    usuario === import.meta.env.VITE_ADMIN_USER &&
    password === import.meta.env.VITE_ADMIN_PASS
  ) {
    navigate('/admin'); // Redirige al panel de administración
    return; // Sale de la función, ya no sigue con el login normal
  }

    let endpoint = '';
    let payload = {};

    if (tipoUsuario === 'alumno') {
      endpoint = rutasApiTesync.loginAlumno;
      payload = { matricula: usuario, contraseña: password };
    } else if (tipoUsuario === 'profesor') {
      endpoint = rutasApiTesync.loginProfesor;
      payload = { cedula: usuario, password: password };
    } else {
      setError('Tipo de usuario no válido');
      return;
    }

    try {
      const response = await apiTesync.post(endpoint, payload);

      if (response.status === 200) {
        if (tipoUsuario === 'alumno') {
          localStorage.setItem('matricula', usuario);
          navigate('/alumno');
        } else if (tipoUsuario === 'profesor') {
          navigate('/profesor');
        }
      } else {
        setError(response.data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      setError(
        error.response?.data?.error ||
          error.response?.data?.message ||
          'Error al conectar con el servidor'
      );
      console.error('Error en login:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex-row-center login-container-custom">
      <div className="login-image-custom sombra">
        <img className="img-decoration" src={teschaImage} alt="img-escuela" />
      </div>

      <form className="form-login flex-column">
        <h1 className="titulo-login">Iniciar Sesión</h1>

        {error && <div className="error-message">{error}</div>}

        <main className="flex-column contenido-login">
          <Input
            icono={faUser}
            tipo="text"
            textoInterno="Usuario (matrícula o cédula)"
            hacer={e => setUsuario(e.target.value)}
          />

          <Input
            icono={faKey}
            tipo="password"
            textoInterno="Contraseña"
            hacer={e => setPassword(e.target.value)}
          />

          <button
            className="boton-n2"
            onClick={e => iniciarSesion(e, 'profesor')}
          >
            Entrar Prof
          </button>

          <button
            className="boton-n2"
            onClick={e => iniciarSesion(e, 'alumno')}
          >
            Entrar Alum
          </button>
        </main>

        <footer className="footer-login"></footer>
      </form>
    </div>
  );
}
