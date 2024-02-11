import React from 'react';
import Link from 'next/link';
import '../../styles/agenda.css'
import Image from 'next/image'
export default function Agenda() {

  return (
    <main>
      <article className='titulo-agenda'>
        <h1>Agenda Bethesda</h1>
        <h2 className='ano'>2 0 2 4</h2>
        <h3>...Nem por força, nem por violência, mas pelo meu Espírito, diz o SENHOR dos Exercítos. <p> Zacarias 4:6</p></h3>
      </article>

      <section className="agenda-section">
        <h2>FEVEREIRO</h2>
        <ul className="event-list">
          <li>Dia 4: Santa Ceia - 8h</li>
          <li>Dia 7: Rede de Mulheres - 19h30</li>
          <li>Dia 11: Culto - 8h</li>
          <li>Dia 14: Rede de Homens - 19h30</li>
          <li>Dia 17: Bazar + Almoço + Rede Jump - 9h | 12h | 19h</li>
          <li>Dia 18: Culto - 8h</li>
          <li>Dia 21: Rede de Casais - 19h30</li>
          <li>Dia 25: Culto - 8h</li>
          <li>Dia 28: Rede da Família - 19h30</li>
        </ul>
        <h2>Março</h2>
        <ul className="event-list">
          <li>Dia 1: Rede de Homens - 19h30</li>
          <li>Dia 8: Rede de Mulheres - 19h30</li>
          <li>Dia 15: Rede de Casais - 19h30</li>
          <li>Dia 16: RDJ - 19h</li>
          <li>Dia 22: Rede de Família - 19h30</li>
          <li>Dia 29/30/31: Niver da Igreja</li>
          <ul>
            <li>Dia 29: Vereda</li>
            <li>Dia 30: Ap Washington + Igor Lins</li>
            <li>Dia 31: Bethesda, à noite</li>
          </ul>
        </ul>

        <h2>Abril</h2>
        <ul className="event-list">
          <li>Dia 5/6: Pessach</li>
          <ul>
            <li>Dia 5: Montaremos a mesa, sentados</li>
            <li>Dia 6: Festa</li>
          </ul>
          <li>Dia 12/13/14: Encontro Jump</li>
          <li>Dia 12: Rede de Mulheres</li>
          <li>Dia 20: RDJ - 19h</li>
          <li>Dia a definir: Batismo no Sítio</li>
          <li>Dia 27: Seminário de Intercessão</li>
        </ul>

        <h2>Maio</h2>
        <ul className="event-list">
          <li>Dia 17/18: Pentecostes</li>
          <li>Dia 19: RDJ - 19h</li>
          <li>Dia 25: Rede Kids</li>
        </ul>

        <h2>Junho</h2>
        <ul className="event-list">
          <li>Dia 1: Estadual Jump</li>
          <li>Dia 8: 5h de Louvor e Adoração</li>
          <li>Dia 14/15/16: Conferência Arde</li>
          <li>Dia 24: Seminário de Dons</li>
        </ul>
      </section>
    </main>
  );
}
