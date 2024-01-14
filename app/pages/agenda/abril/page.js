import React from 'react';
import Link from 'next/link'
export default function Abril() {
  return (
    <main className="corpo">
      <h3> <Link href="/pages/agenda/marco">Voltar</Link></h3>
    <h3><Link href='/pages/agenda/maio'>Próximo</Link></h3> 
      <h1>Abril</h1>
    </main>
  );
}
