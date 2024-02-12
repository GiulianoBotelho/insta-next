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
              <p>ou <a href='https://www.google.com/maps/dir/-22.8102856,-43.3777264/Av.+Presidente+Tancredo+Neves,+1735+-+Tomazinho,+S%C3%A3o+Jo%C3%A3o+de+Meriti+-+RJ,+25576-060/@-22.8067861,-43.395457,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x996411bad7b985:0x552d77309e5660e!2m2!1d-43.3938875!2d-22.8030922?entry=ttu'>Clique aqui</a></p>
            </div> }
           
    </>
  )
}
