// src/pages/Alumno/CardAlumno.jsx
import React from 'react';
import InfoCard from '../../components/InfoCard/InfoCard.jsx';
import './CardAlumno.css';
import AlumnoImg from '../../assets/Alumno.jpg'; // Ajusta ruta si es necesario

const alumno = {
  nombre: "Carlos García",
  matricula: "A98765432",
  correo: "carlos.garcia@escuela.com",
  grupo: "ITI-2024-B",
  calificaciones: [
    {
      materia: "Programación",
      unidades: [
        { numero: 1, calificacion: 92 },
        { numero: 2, calificacion: 88 }
      ],
      final: 90
    }
  ],
  imagen: AlumnoImg
};

export default function CardAlumno() {
  return (
    <div className="card-alumno-container">
      <h2>Card Alumno</h2>
      {/* Pasa el alumno como prop, si InfoCard lo acepta */}
      <InfoCard alumno={alumno} />
    </div>
  );
}

