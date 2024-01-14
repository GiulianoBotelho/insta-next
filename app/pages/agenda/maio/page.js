import React from 'react'
import Link from 'next/link'
export default function Maio() {
  return (
    <main className='corpo'>
        <h3><Link href='/pages/agenda/abril'>Voltar</Link></h3>
        <h3><Link href='/pages/agenda/junho'>Próximo</Link></h3>
        <h1>Maio</h1>
    </main>
  )
}
