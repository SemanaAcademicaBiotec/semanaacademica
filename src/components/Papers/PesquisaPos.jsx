import React from 'react'
import Regras from '../Regras'
import { Link } from 'react-router-dom'

const PesquisaPos = () => {


   return (
    <div className='container fs-5'>
      <div className='text-center'>
        <p className='fs-2 mt-4'><strong>Submissão de trabalho: Pesquisa - Pós-Graduação</strong></p>
        <br />
        <div className='lh-sm'>
          <p>Para submeter seu trabalho, você primeiro deve estar <strong>inscrito como ouvinte.</strong></p>
          <p>
        Caso ainda não esteja inscrito,{' '}
        <Link to="/inscrições">clique aqui</Link> para se inscrever.
       </p>
        </div>
      </div>
    <div className='text-center border shadow p-5 m-4 mx-auto rounded-5' style={{maxWidth: '70%'}}>
      <h4>Submeta seu resumo expandido</h4>
      <p>Para submeter seu resumo expandido, clique no botão abaixo.</p>
      <button className='btn btn-outline-dark btn-lg mb-4 p-4 btn-roxo' onClick={() => window.open("https://forms.gle/cJZy194eutCcALiZ9", "_blank")}>
        Submeter Resumo Expandido
      </button>
      <hr style={{width: '40%'}} className='mx-auto'/>
      <div className='fs-6'>
        <p><strong>Prazo de submissão</strong> <br /> 22/07/2025 às 00:00 até 15/08/2025 às 23:59</p>
        <p><strong>Resultado dos Resumos Aprovados</strong> <br /> 30/08/2025 até 05/09/2025</p>
      </div>
    </div>
    <br />
    <Regras />
    </div>
  )
}

export default PesquisaPos
