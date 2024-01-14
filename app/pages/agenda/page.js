import React from 'react';
import Link from 'next/link'
import styles from '../../styles/tabela.css'
export default function Agenda() {
  return (
    <main className="corpo">
      <h3> <Link href="/">Voltar</Link></h3>
    <h3><Link href='/pages/agenda/fevereiro'>Próximo</Link></h3> 
      <div style={{textAlign:'center'}}>
    <h1 className="event-title">Eventos de Janeiro</h1>
    <h2>Culto todas as quartas 19:30 e aos domingos 8:00</h2>
    </div>
    </main>
  );
}
