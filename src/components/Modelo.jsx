import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Submeta.css';

const Modelo = () => {

    const navigate = useNavigate();

return (
  <div className='container text-center'>
    <p className='fs-2 mt-4 p-1'><strong>Modelos de resumos</strong></p>
    <p className='fs-5'>Os trabalhos devem adequar às normas apresentadas no template/modelo de cada categoria. <br/></p>
    <p><strong className='fs-6 p-2 rounded' style={{backgroundColor: '#f18080'}}>Trabalhos não conformes resultarão em submissões inválidas.</strong></p>
    <div className='d-flex justify-content-center mt-5'>
      <div className='border shadow p-5 rounded-5' style={{width: '500px'}}>
      <p className='fs-4'>
        Modelo - Resumo expandido
      </p>
      <a
        className='btn btn-lg btn-submeta'
        href="https://docs.google.com/document/d/1AHPppTGmScDB_Mt8mgkpOFJKRKsTEfW-/edit?usp=sharing&ouid=115857694393847470804&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir Modelo
      </a>
      </div>
    </div>
  </div>
)
}

export default Modelo
