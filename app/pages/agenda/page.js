import React from 'react';
import Link from 'next/link';
import '../../styles/agenda.css'
export default function Agenda() {

  return (
    <main className="corpo">
        <article className='artigo'>
        <h1 className='titulo-agenda'>Agenda Bethesda</h1>
        <h2 className='ano'>2024</h2>
        </article>

        <section className="agenda-section">
      <h2>FEVEREIRO</h2>
      <ul className="event-list">
        <li>dia 4 (domingo): Santa Ceia - 8h</li>
        <li>dia 7 (quarta-feira): Rede de Mulheres - 19h30</li>
        <li>dia 11 (domingo): culto - 8h</li>
        <li>dia 14 (quarta-feira): Rede de Homens - 19h30</li>
        <li>dia 17 (sábado): Bazar + Almoço - 9h | 12h</li>
        <li>dia 18 (domingo): Culto - 8h</li>
        <li>dia 21 (quarta-feira): Rede de Casais - 19h30</li>
        <li>dia 25 (domingo): Culto - 8h</li>
        <li>dia 28 (quarta-feira): Rede da Família - 19h30</li>
      </ul>
  </section>
    </main>
  );
}
