import './LoginStyle.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiTesync } from '../../servicios/axios.js';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import Input from '../../components/Input/Input';
import teschaImage from '../../assets/tescha.jpg';

export default function Login() {
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  const rutasApiTesync = {
    loginAlumno: 'http://localhost:3000/api/alumnos/login',
    loginProfesor: 'http://localhost:3000/api/maestros/login',
  }

  const iniciarAlumno = async (e) => {
    e.preventDefault();
    try {
      const response = await apiTesync.post(rutasApiTesync.loginAlumno, { matricula, password });
      console.log("Respuesta del backend:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data);
    }
  };

  return (
    <div className='flex-row-center login-container-custom'>
      <div className='login-image-custom sombra'>
        <img className='img-decoration' src={teschaImage} alt="img-escuela" />
      </div>
        <form data-aos="fade-left" onSubmit={iniciarAlumno} className='form-login flex-column'>
          <h1 className='titulo-login'>Iniciar Sesión</h1>
          <main className='flex-column contenido-login'>
            <Input icono={faUser} tipo={"matricula"} textoInterno={"Usuario."} hacer={e => setMatricula(e.target.value)} />
            <Input icono={faKey} tipo={"password"} textoInterno={"Contraseña."} hacer={e => setPassword(e.target.value)} />
            
            <Link type='submint' to="/profesor" className='boton-n2'>
              Entrar Prof
            </Link>

            <Link type='submint' to="/alumno" className='boton-n2'>
              Entrar Alum
            </Link>

            <Link to="/Admin" className='boton-n2'>
              Entrar Adm
            </Link>
          </main>
          <footer className='footer-login'></footer>
        </form>
    </div>
  );
}
