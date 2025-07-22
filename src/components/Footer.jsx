import React from 'react'

const Footer = () => {
  return (
    <div className='text-white text-center py-3' 
    style={{
    background: "#f8f9fa",
    textAlign: "center",
    backgroundColor: "#4f1479"
  }}>
      <p className='mb-0'>
        {new Date().getFullYear()} I Semana Acadêmica de Biotecnologia da UFPel.
      </p>
      <p className='mb-0'>
       <a href="https://docs.google.com/document/d/1s6_I1H-8u-8vHtMBOqXiQSK4Nn4Lt1Zr-IvC5vIReCQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='text-white'>Regimento geral</a> | <a href="https://www.instagram.com/dabiotecufpel/" target="_blank" rel="noopener noreferrer" className='text-white'>Instagram oficial</a>
      </p>
    </div>
  )
}

export default Footer
