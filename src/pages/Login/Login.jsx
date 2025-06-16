import './LoginStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    <div className='login-container-custom'>
      <div className='login-image-custom'>
        <img src={teschaImage} alt="img-escuela" />
      </div>
      <div className='login-form-side'>
        <form onSubmit={handleLogin} className='form-login'>
          <h1 className='titulo-login'>Iniciar Sesión</h1>

        <Input icono={faUser} tipo={"email"} textoInterno={"Usuario."} hacer={e => setEmail(e.target.value)}></Input>
        <Input icono={faKey} tipo={"password"} textoInterno={"Contraseña."} hacer={e => setPassword(e.target.value)}></Input>

          <button className='boton-n1' type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
