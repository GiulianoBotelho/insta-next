import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/main.css'
export default function Home() {
  return (
    <>
    <main className='corpo'>
   
      <figure className='Figura'>
       <Image className='Images' src='/images/logo1.jpg' width={200} height={200} alt='Logo Bethesda' />
      <p ><a  className='link' href='https://www.instagram.com/bethesdasjm/'> @bethesdasjm</a></p>
       <p className='p1'>Lugar do fluir das águas</p>
       </figure>
      <nav className='navegacao'>
      
       <Link className='hall' href='/pages/agenda'>
        <figure style={{display:'flex', alignItems:'center', justifyContent:"start", width:'100%', gap:'60px'}}>
        <Image src='/images/agenda.png' width={32} height={32} alt='agenda' />
        <figcaption>Agenda</figcaption>
        </figure>
       </Link>
     
       <Link className='hall' href='/pages/redes'><p> Nossas Redes</p></Link>
       <Link href='/pages/endereco' className='hall'><p> Endereço</p></Link>

       <a className='hall'><p> Ultimos Eventos</p></a>
       <Link className='hall' href='/pages/sobre'><p> Sobre</p></Link>
       <Link className='hall' href='/pages/agenda'><p> Contatos</p></Link>
              <h1>Faça uma oferta</h1>
       <Link className='hall' href='/pages/agenda'><p> Oferta</p></Link>
       </nav>
    </main>

    </>
  )
}
