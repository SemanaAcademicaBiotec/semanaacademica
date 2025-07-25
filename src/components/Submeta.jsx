import React from 'react'
import { Link } from 'react-router-dom'
import './Submeta.css';
import Mostra from '../media/Mostra.jpg';

const Submeta = () => {


return (
  <div className='' style={{position: 'relative'}}>
    <img
      src={Mostra}
      alt="Mostra de Trabalhos"
      className='img-fluid mb-4 mostra-desktop'
    />
    {/* Imagem para mobile e tablets */}
    <div className='mostra-mobile w-100 text-center mb-3 mt-5' style={{display: 'flex', justifyContent: 'center'}}>
      <img
        src={Mostra}
        alt="Mostra de Trabalhos"
        className='img-fluid mx-auto'
        style={{width: '150px', maxWidth: '40%', objectFit: 'cover'}}
      />
    </div>
    <div className='container'>
      <p className='fs-1 pt-5'><strong>I MOSTRA ACADÊMICA 5' &#8594; 3' </strong></p>
      <p className='fs-5'>A primeira <strong>Mostra Acadêmica 5' → 3'</strong> busca incentivar a divulgação de trabalhos acadêmicos e científicos, <br />promovendo apresentações concisas e impactantes, com duração de 5 minutos e 30 segundos por projeto.</p>
      <br /><br /><p className='fs-2 mt-2'><strong>Submeta seu trabalho</strong></p>
    <p className='fs-5'>
      A submissão de trabalhos está aberta para alunos da <strong>graduação</strong> e <strong>pós-graduação</strong> nas modalidades <strong>Pesquisa</strong> e <strong>Ensino/Extensão</strong>
    </p>
    <div className='p-4 text-center'>
      <Link className='btn btn-lg p-4 mb-4 border btn-submeta'
      to="/pesquisa-graduacao">
        Pesquisa - Graduação
      </Link>
      <Link className='btn btn-lg p-4 mb-4 ms-2 border btn-submeta'
      to="/pesquisa-pos-graduacao">
        Pesquisa - Pós-Graduação
      </Link>
      <Link className='btn btn-lg p-4 mb-4 ms-2 border btn-submeta'
      to="/ensino-extensao">
        Ensino/Extensão - Geral
      </Link>
    </div>
    <p className='fs-5 mb-4'>
      <strong>Mas atenção!</strong> Para submeter seu trabalho, você deve estar inscrito como ouvinte, se ainda não se inscreveu <Link to="/inscrições">clique aqui</Link> para se inscrever.
    </p>
    </div>
  </div>
)
}

export default Submeta
