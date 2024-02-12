import React from 'react'
import { useState } from 'react'
import '../styles/main.css'
import Image from 'next/image'
export default function Modal() {
    const[modal, setModal] = useState(false)

  return (
    <> 
 
            <a onClick={()=> setModal(true)} className='hall'>
          <figure className='FiguraHall'>
            <Image src='/images/map.png' width={36} height={36}  alt='mapa'/> 
              <figcaption>Endereço</figcaption>              
            </figure>
            </a>
        {modal && 
        <div style={{ width:'50vw', height:'35vh', backgroundColor:'rgb(1000,1000,1000, 0.9)', position:"absolute", top:'50%', zIndex:'1'}}>
              <h1>Endereço</h1>
              <button style={{ width:'6vw',position:'relative', bottom:'12.5%', left:'89%', borderBottomLeftRadius:'25%'}} onClick={()=> setModal(false)}>X</button>
              <p>Avenida Tancredo Neves 1735 / Rua Dona Jove 74 Tomazinho</p>
              <p>ou <a href='https://www.google.com/maps/@-22.8030526,-43.3937667,3a,89.3y,249.6h,82.23t/data=!3m6!1e1!3m4!1sbZ1kj_TdyAzH86FuvjOJVg!2e0!7i16384!8i8192?entry=ttu'>Clique aqui</a></p>
            </div> }
           
    </>
  )
}
