import React from 'react'
import Regras from '../Regras'
import { useNavigate } from 'react-router-dom'

const Ensino = () => {

    const navigate = useNavigate();

  return (
    <div className='container'>
      <p className='display-6 mt-4'><strong>Ensino/Extensão - Geral</strong></p>
      <p>Para submeter seu trabalho, você primeiro deve estar <strong>inscrito como ouvinte.</strong></p>
      <p>Caso ainda não esteja inscrito, <a href="#" onClick={() => navigate("/inscrições")}>clique aqui</a> para se inscrever.</p>
      <p>Prazo de submissão: <strong>30/09/2023 às 00:00</strong> até <strong>05/10/2023 às 23:59.</strong></p>
      <p>Resultado dos Resumos Aprovados: <strong>30/09/2023 às 00:00</strong> até <strong>05/10/2023 às 23:59.</strong></p>
    <hr />
    <Regras />
    <hr />
    <h4>Submeta seu resumo expandido</h4>
    <p>Para submeter seu resumo expandido, clique no botão abaixo.</p>
    <button className='btn btn-outline-dark mb-4' onClick={() => window.open("https://forms.gle/7b1d8Z5f3g1z9x6cA", "_blank")}>
      Submeter Resumo Expandido
    </button>
    </div>
  )
}

export default Ensino
