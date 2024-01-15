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
        <li>dia 4: Santa Ceia - 8h</li>
        <li>dia 7: Rede de Mulheres - 19h30</li>
        <li>dia 11: Culto - 8h</li>
        <li>dia 14: Rede de Homens - 19h30</li>
        <li>dia 17: Bazar + Almoço + Rede Jump - 9h | 12h | 19h</li>
        <li>dia 18: Culto - 8h</li>
        <li>dia 21: Rede de Casais - 19h30</li>
        <li>dia 25: Culto - 8h</li>
        <li>dia 28D: Rede da Família - 19h30</li>
      </ul>
  <Link href='/'>   
    <Image src='/images/voltar.png' width={28} height={28}/>
  </Link>
  </section>
    </main>
  );
}
