import './LoginStyle.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import Input from '../../components/Input/Input';

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
    <div className='flex-row-center contenedor-dec-form'>
      <span className='decoracion'>
        <img src="" alt="img-escuela" srcset="" />
      </span>
      <form onSubmit={handleLogin} className='form-login flex-column'>
        <h1 className='titulo-login'>Iniciar Sesión</h1>
        
        <Input icono={faUser} tipo={"email"} textoInterno={"Usuario."} hacer={e => setEmail(e.target.value)}></Input>
        <Input icono={faKey} tipo={"password"} textoInterno={"Contraseña."} hacer={e => setPassword(e.target.value)}></Input>

        <button className='boton-n1' type="submit">Entrar</button>
      </form>
    </div>  
  );
}
