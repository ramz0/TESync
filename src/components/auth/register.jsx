import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Verificar si el correo ya está registrado
      const checkResponse = await fetch(`http://localhost:3000/usuarios?email=${email}`);
      const existingUsers = await checkResponse.json();

      if (existingUsers.length > 0) {
        setError('El correo ya está registrado');
        return;
      }

      // Registrar nuevo usuario
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const newUser = await response.json();
        console.log('Usuario registrado:', newUser);
        navigate('/alumno'); // Redirige si quieres
      } else {
        setError('Error al registrar usuario');
      }
    } catch (err) {
      console.error(err);
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registro</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Registrar</button>
    </form>
  );
}
