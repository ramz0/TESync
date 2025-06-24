import './LoginStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { apiTesync } from '../../servicios/axios.js';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import Input from '../../components/Input/Input';
import teschaImage from '../../assets/tescha.jpg';

export default function Login() {
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const rutasApiTesync = {
    loginAlumno: 'http://localhost:3000/api/alumnos/login',
    loginProfesor: 'http://localhost:3000/api/maestros/login',
  }

  const iniciarSesion = async (e, tipoUsuario) => {
    e.preventDefault();
    try {
      const endpoint = tipoUsuario === 'alumno' 
        ? rutasApiTesync.loginAlumno 
        : rutasApiTesync.loginProfesor;
      
      const response = await apiTesync.post(endpoint, { matricula, password });
      
      if (response.data.success) {
        navigate(`/${tipoUsuario.toLowerCase()}`); 
      } else {
        setError(response.data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Error al conectar con el servidor');
      console.error("Error:", error.response?.data);
    }
  };

  return (
    <div className='flex-row-center login-container-custom'>
      <div className='login-image-custom sombra'>
        <img className='img-decoration' src={teschaImage} alt="img-escuela" />
      </div>
      <form className='form-login flex-column'>
        <h1 className='titulo-login'>Iniciar Sesión</h1>
        {error && <div className="error-message">{error}</div>}
        <main className='flex-column contenido-login'>
          <Input 
            icono={faUser} 
            tipo={"matricula"} 
            textoInterno={"Usuario"} 
            hacer={e => setMatricula(e.target.value)} 
          />
          <Input 
            icono={faKey} 
            tipo={"password"} 
            textoInterno={"Contraseña"} 
            hacer={e => setPassword(e.target.value)} 
          />
          
          <button 
            className='boton-n2' 
            onClick={(e) => iniciarSesion(e, 'profesor')}
          >
            Entrar Prof
          </button>

          <button 
            className='boton-n2' 
            onClick={(e) => iniciarSesion(e, 'alumno')}
          >
            Entrar Alum
          </button>

          <button 
            className='boton-n2' 
            onClick={(e) => iniciarSesion(e, 'admin')}
          >
            Entrar Adm
          </button>
        </main>
        <footer className='footer-login'></footer>
      </form>
    </div>
  );
}