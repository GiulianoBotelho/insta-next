import React from 'react'
import Link from 'next/link'
import '../../styles/oferta.css'
import Image from 'next/image'
export default function Oferta() {
  return (
    <>
    <main className='corpo'>
        <div className='background-titulo'>
        <h1 className='oferta-titulo'>Faça uma oferta, abençoe o Reino</h1>
        </div>
        <Link href='/'><Image className='back' src='/images/voltar.png' width={20} height={20} alt='Voltar' /></Link>
    </main>
    </>
  )
}
