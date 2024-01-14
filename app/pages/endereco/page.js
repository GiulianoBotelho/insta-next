import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Mapa() {
    return (
        <main className='corpo'>


            <section>
                <h1>Entrada principal</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58847.43849763445!2d-43.42791792228419!3d-22.80376422689211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996411bb0910d7%3A0x9f9408f110330b34!2sComunidade%20Evang%C3%A9lica%20Peniel!5e0!3m2!1spt-BR!2sbr!4v1705156760220!5m2!1spt-BR!2sbr"
                    width={100}
                    height={400}
                    style={{ border: 0, width: '100%', height: '100%' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <h1>Entrada dos fundos</h1>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.9771102374125!2d-43.396858923905576!3d-22.803312034182692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996411b685b871%3A0xd00da924638f02a3!2sR.%20Don%C3%A1%20Jove%2C%2074%20-%20S%C3%A3o%20Mateus%2C%20S%C3%A3o%20Jo%C3%A3o%20de%20Meriti%20-%20RJ%2C%2025530-310!5e0!3m2!1spt-BR!2sbr!4v1705157370057!5m2!1spt-BR!2sbr"
                    width="600" height="450"
                    style={{ border: '0', width: '100%', height: '100%' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <Link href='/'>
                    <Image src='/images/voltar.png' width={28} height={28} />
                </Link>
            </section>
        </main>
    )
}
