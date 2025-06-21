// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlumnoPerfil from './AlumnoPerfil';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/alumno" element={<AlumnoPerfil />} />
      </Routes>
    </Router>
  );
}

export default App;
