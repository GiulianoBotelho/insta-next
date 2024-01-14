import React from 'react'
import Link from 'next/link'
import styles from './../../../styles/tabela.css'
export default function Fevereiro() {
  return (
    <main className='corpo'>
      <h3><Link href='/'>Voltar</Link></h3>
      <h3><Link href='/pages/agenda/marco'>Próximo</Link></h3>
      <h1 className="event-title">Eventos de Fevereiro</h1>

      <table className="event-table">
        <thead>
          <tr>
            <th className="event-header">Evento</th>
            <th className="event-header">Data</th>
            <th className="event-header">Horário</th>
          </tr>
        </thead>
        <tbody>
          <tr className="event-row">
            <td className="event-data" >Santa Ceia</td>
            <td className="event-data">04/02/2024</td>
            <td className="event-data">8:00</td>
          </tr>

          <tr className="event-row">
            <td className="event-data">Rede de Mulheres</td>
            <td className="event-data">07/02/2024</td>
            <td className="event-data">19:30</td>
          </tr>

          <tr className="event-row">
            <td className="event-data">Rede de Homens</td>
            <td className="event-data">14/02/2024</td>
            <td className="event-data">19:30</td>
          </tr>

          <tr className="event-row">
            <td className="event-data">Culto de Celebração</td>
            <td className="event-data">11/02/2024</td>
            <td className="event-data">8:00</td>
          </tr>
          <tr className="event-row">
            <td className="event-data">Bazar/Almoço/Rede Jump</td>
            <td className="event-data">14/02/2024</td>
            <td className="event-data">9:00|12:00|19:00</td>
          </tr>
          <tr className="event-row">
            <td className="event-data">Culto de Celebração</td>
            <td className="event-data">18/02/2024</td>
            <td className="event-data">8:00</td>
          </tr>
          <tr className="event-row">
            <td className="event-data">Bazar/Almoço/Rede Jump</td>
            <td className="event-data">14/02/2024</td>
            <td className="event-data">9:00|12:00|19:00</td>
          </tr>
          <tr className="event-row">
            <td className="event-data">Culto de Celebração</td>
            <td className="event-data">18/02/2024</td>
            <td className="event-data">8:00</td>
          </tr>
          <tr className="event-row">
            <td className="event-data">Rede de Casais</td>
            <td className="event-data">21/02/2024</td>
            <td className="event-data">19:30</td>
          </tr>
          <tr className="event-row">
            <td className="event-data">Culto de Celebração</td>
            <td className="event-data">25/02/2024</td>
            <td className="event-data">8:00</td>
          </tr>
          <tr className="event-row">
            <td className="event-data">Rede da Família</td>
            <td className="event-data">28/02/2024</td>
            <td className="event-data">19:30</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
