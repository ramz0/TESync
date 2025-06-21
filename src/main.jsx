import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'aos/dist/aos.css';
import AOS from 'aos';

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Profesor from './pages/Profesor/Profesor.jsx';
import AlumnoPerfil from './pages/Alumno/AlumnoPerfil.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';

AOS.init({
  duration: 800,
  once: true, 
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profesor" element={<Profesor />} />

        <Route path="/alumno" element={<AlumnoPerfil />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
