'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/main.css'
import Modal from './components/modal'
export default function Home({modal, setModal}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <main className='corpo'>
     
        <figure className='Figura'>
          <Image className='Images' src='/images/logo1.jpg' width={200} height={200} alt='Logo Bethesda' />
        <figure> 

        <Image src='/images/instagram.png' width={45} height={45} alt='instagram' />
           <a style={{position:'relative', bottom:'27%'}} className='link' href='https://www.instagram.com/bethesdasjm/'>
            @bethesdasjm</a>
          </figure>
          <p className='p1'>Lugar do fluir das águas</p>
        </figure>
        <nav className='navegacao'>

        <Link className='hall' href='/pages/sobre'>
          <figure className='FiguraHall'>
            <Image src='/images/igreja.png' width={36} height={36} alt='igreja' /> 
              <figcaption>Sobre Nós</figcaption>              
            </figure>
          </Link>
          <Modal/>
          <Link className='hall' href='/pages/agenda'>
           <figure className='FiguraHall'>
            <Image src='/images/agenda.png' width={36} height={36} alt='agenda' /> 
              <figcaption>Agenda</figcaption>              
            </figure>
          </Link>

          <Link className='hall' href='/pages/celulas'>
          <figure className='FiguraHall'>
            <Image src='/images/rede.png' width={36} height={36} alt='rede' /> 
              <figcaption>Células</figcaption>              
            </figure>
          </Link>
       
          <a className='hall' href='https://bit.ly/3tVSmyL'>
          <figure className='FiguraHall'>
            <Image src='/images/foto.png' width={36} height={36} alt='foto' /> 
              <figcaption>Nossas Fotos</figcaption>              
            </figure>
          </a>
          <div onClick={()=> setIsOpen(true)} href='/pages/oferta' className='hall'
          > 
          <figure className='FiguraHall'>
            <Image src='/images/oferta.png' width={36} height={36} alt='oferta' /> 
              <figcaption>Oferta</figcaption>              
            </figure>
          </div>
        </nav>
          { isOpen && <section className='oferta'>
              <div> <button onClick={()=>setIsOpen(false)}>X</button>
              <pre>Chave Pix:</pre>
              <pre>(21) 9 7431-7602</pre>
              <pre>Comunidade Evangélica Peniel</pre>

              <pre>Banco Bradesco</pre>
              </div>
             
            </section>}
      </main>

    </>
  )
}
