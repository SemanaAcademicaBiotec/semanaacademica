import React from 'react'
import { Link } from 'react-router-dom'
import './Submeta.css';

const Submeta = () => {


return (
    <div className='container text-center'>
        <p className='fs-2 mt-4 p-4'><strong>Submeta seu trabalho</strong></p>
        <p className='fs-5'>
            A submissão de trabalhos está aberta para alunos da <strong>graduação</strong> e <strong>pós-graduação</strong> nas modalidades <strong>Pesquisa</strong> e <strong>Ensino/Extensão</strong>
        </p>
        <div className='p-4'>
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
)
}

export default Submeta
