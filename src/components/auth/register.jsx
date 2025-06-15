import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí iría el envío de datos al backend para crear usuario
    console.log('Registrarse con:', email, password);
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registro</h2>
      <input type="email" placeholder="Correo" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Registrar</button>
    </form>
  );
}
