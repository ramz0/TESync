import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',  // Centra verticalmente
      alignItems: 'center',     // Centra horizontalmente
      minHeight: '100vh',       // Ocupa toda la pantalla
      textAlign: 'center',      // Centra el texto (por si acaso)
      padding: '20px',          // Espaciado opcional
      boxSizing: 'border-box',  // Evita problemas de padding
    }}>
      {/* Título */}
      <h1 style={{ fontSize: '3rem', color: '#222', marginBottom: '2rem' }}>
        Tesync
      </h1>

      {/* Botones */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/login">
          <button style={{ padding: '1rem 2rem', cursor: 'pointer' }}>
            Iniciar Sesión
          </button>
        </Link>
        <Link to="/register">
          <button style={{ padding: '1rem 2rem', cursor: 'pointer' }}>
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}