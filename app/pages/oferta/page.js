import React from 'react'
import Link from 'next/link'
import '../../styles/oferta.css'
export default function Oferta() {
  return (
    <>
    <main className='corpo'>
        <div className='background-titulo'>
        <h1 className='oferta-titulo'>Faça uma oferta, abençoe o Reino</h1>
        </div>
        <Link href='/'>Voltar</Link>
    </main>
    </>
  )
}
