import React from 'react';
import InfoCard from '../../components/infocard/infocard';
import TopBar from '../../components/TopBar/TopBar';

export default function Dashboard() {
  return (
    <>
      <TopBar />
      <main style={{ padding: '20px' }}>
        <InfoCard />
        {/* Aquí puedes poner más secciones si quieres */}
      </main>
    </>
  );
}
