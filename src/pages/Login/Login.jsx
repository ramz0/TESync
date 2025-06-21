import './LoginStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import Input from '../../components/Input/Input';
import teschaImage from '../../assets/tescha.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Iniciar sesión con:', email, password);
    navigate('/');
  };

  return (
    <div className='flex-row-center login-container-custom'>
      <div className='login-image-custom sombra'>
        <img className='img-decoration' src={teschaImage} alt="img-escuela" />
      </div>
        <form data-aos="fade-left" onSubmit={handleLogin} className='form-login flex-column'>
          <h1 className='titulo-login'>Iniciar Sesión</h1>

        <Input icono={faUser} tipo={"email"} textoInterno={"Usuario."} hacer={e => setEmail(e.target.value)} />
        <Input icono={faKey} tipo={"password"} textoInterno={"Contraseña."} hacer={e => setPassword(e.target.value)} />
        
        <Link to="/profesor" className='boton-n1'>
          <button>Entrar Prof</button>
        </Link>

        <Link to="/alumno" className='boton-n1'>
          <button>Entrar Alum</button>
        </Link>
        </form>
    </div>
  );
}
