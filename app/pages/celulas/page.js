import React from 'react'
import styles from '../../styles/main.css'
import Link from 'next/link'
import '../../styles/celulas.css'
import Image from 'next/image'
export default function Redes() {
  return (
    <main className='corpo'>
<section className='lista-lideres'>
        
        <div className='background-titulo'>
       <h1 className='celula-titulo'>Células de Evangelismo</h1>
       </div>
<h2>TERÇA-FEIRA</h2>
<ul className="lista">
  <li>Larissa</li>
  <li>Danilo</li>
  <li>Thuanny</li>
  <li>Samara</li>
  <li>Valéria</li>
  <li>Solimá</li>
</ul>

<h2>QUINTA-FEIRA</h2>
<ul className="lista">
  <li>Richard</li>
</ul>

<h2>SEXTA-FEIRA</h2>
<ul className="lista">
  <li>Ana</li>
  <li>Igor e Esther</li>
  <li>Roberto</li>
</ul>

</section>
        </main>
  )
}
