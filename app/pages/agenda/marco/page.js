import React from 'react'
import Link from 'next/link'
export default function Marco() {
  return (
    <main className='corpo'>
        <h3><Link href='/pages/agenda/fevereiro'>Voltar</Link></h3>
        <h3><Link href='/pages/agenda/abril'>Próximo</Link></h3>
        <h1>Março</h1>
    </main>
  )
}
