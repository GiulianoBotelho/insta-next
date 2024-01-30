import React from 'react';
import Link from 'next/link';
import '../../styles/agenda.css'
import Image from 'next/image'
export default function Agenda() {

  return (
    <main>
        <article className='titulo-agenda'>
          
        <h1>Somos uma igreja na visão celular no modelo dos 12</h1>
        <h2 className='ano'>2 0 2 4</h2>
        </article>

        <section className="agenda-section">

        <h2 style={{textAlign:'center'}}>Ministério Apostólico Bethesda</h2>
        <p style={{fontSize:'1.7rem', marginTop:'50px', textAlign:'center'}}>
        Nós somos uma igreja na visão celular no modelo dos 12 desde 2010. Entendemos que a estrutura para uma 
        igreja essencial seria que uma estrutura onde exista a mentalidade de reino na qual as pessoas precisam de um discipulado e que a medida que as pessoas se convertem, elas entendem que precisam reproduzir o reino de Deus através do evangelismo pessoal, de uma vida mudada, santificada em Deus. A estrutura da visão atende a
         nossa expectativa porque ela tem o principio de ganhar, consolidar, discipular e enviar.
         </p>
         <p style={{marginTop:"30px", fontSize:'1.7rem', marginTop:'50px', textAlign:'center'}}>
A historia da igreja é baseada nisso, uma visão para um ministerio apostólico, sendo um ministerio que entende que a partir do ganhar, 
consolidar e discipular desenvolvendo um trabalho sobre a vida do novo cristão ao longo da sua vida em Deus, que ele vai descobrir
 os seus dons espirituais. O apostólico compreende sobre os 5 dons ministeriais: apostolo, profetas, evangelistas, pastores e mestre.
  (Efésios 4:11-13). A partir desses 5 ministérios nós entendemos que uma igreja precisa trabalhar esse chamado sobre a vida do discípulo.</p>
        
   
  <Link href='/'>   
    <Image className='back' src='/images/voltar.png' width={28} height={28} alt='Voltar'/>
  </Link>
  </section>
    </main>
  );
}




