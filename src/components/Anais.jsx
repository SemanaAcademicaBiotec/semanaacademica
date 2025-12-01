import React from 'react'
import { Link } from 'react-router-dom'

const Anais = () => {
  return (
    <div className='container'>
      <p className='fs-2 mt-4'><strong>Anais</strong></p>
      <p className='fs-5 mt-3'>
        Clique no botão abaixo para acessar os anais do evento.
      </p>
      <a className='btn btn-lg p-4 mb-4 ms-2 border btn-submeta'
      href="https://drive.google.com/drive/folders/1T8GnBBIhu_pIcyaTRVg_p7J7zWF3emWM?usp=sharing" target="_blank" rel="noopener noreferrer">
        Clique para acessar os anais
      </a>
    </div>
  )
}

export default Anais
