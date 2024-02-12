import React from 'react'
import '../styles/modal.css'
export default function Modal({setModal}) {
  return (
    <div className='modal-container'>
        <article className='modal-texto'>
        <h1>ATENÇÃO!</h1>
        <p>Voltaremos com as nossas  atividades no dia 14/02</p>
        <button onClick={()=>setModal(false)}>OK</button>
        </article>

    </div>
  )
}
