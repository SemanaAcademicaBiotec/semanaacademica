import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Submeta.css';

const Submeta = () => {

    const navigate = useNavigate();

return (
    <div className='container text-center'>
        <p className='fs-2 mt-4 p-4'><strong>Submeta seu trabalho</strong></p>
        <p className='fs-5'>
            A submissão de trabalhos está aberta para alunos da <strong>graduação</strong> e <strong>pós-graduação</strong> nas modalidades <strong>Pesquisa</strong> e <strong>Ensino/Extensão</strong>
        </p>
        <div className='p-4'>
            <button className='btn btn-lg p-4 mb-4 border btn-submeta'
            onClick={() => navigate("/pesquisa-graduacao")}>
              Pesquisa - Graduação
            </button>
            <button className='btn btn-lg p-4 mb-4 ms-2 border btn-submeta'
            onClick={() => navigate("/pesquisa-pos-graduacao")}>
              Pesquisa - Pós-Graduação
            </button>
            <button className='btn btn-lg p-4 mb-4 ms-2 border btn-submeta'
            onClick={() => navigate("/ensino-extensao")}>
              Ensino/Extensão - Geral
            </button>
        </div>
        <p className='fs-5 mb-4'>
            <strong>Mas atenção!</strong> Para submeter seu trabalho, você deve estar inscrito como ouvinte, se ainda não se inscreveu <a href="/inscrições">clique aqui</a> para se inscrever.
        </p>   
    </div>
)
}

export default Submeta
