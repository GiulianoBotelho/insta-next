import React from 'react'
import '../../styles/main.css'
export default function Endereco() {
  return (
    <main className='corpo'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5201.431143705708!2d-43.39911100321776!3d-22.803677988526182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996411bad7b985%3A0x552d77309e5660e!2sAv.%20Presidente%20Tancredo%20Neves%2C%201735%20-%20Tomazinho%2C%20S%C3%A3o%20Jo%C3%A3o%20de%20Meriti%20-%20RJ%2C%2025576-060!5e0!3m2!1spt-BR!2sbr!4v1707750795367!5m2!1spt-BR!2sbr"
        style={{ width:'70%', height:'70%'}}
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
    </main>
  )
}
