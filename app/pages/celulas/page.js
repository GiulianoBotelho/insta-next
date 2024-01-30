import React from 'react'
import styles from '../../styles/main.css'
import Link from 'next/link'
import '../../styles/celulas.css'
import Image from 'next/image'
export default function Redes() {
  return (
    <main className='corpo'>
        
        <div className='background-titulo'>
        <h1 className='celula-titulo'>Células de Evangelismo</h1>
        </div>
        <Link href='/'> <Image className='back' src='/images/voltar.png' width={20} height={20} alt='Voltar' /> </Link>
        </main>
  )
}
