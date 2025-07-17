import React from 'react'

const Footer = () => {
  return (
    <div className='text-white text-center py-3 mt-5' 
    style={{
    left: 0,
    bottom: 0,
    width: "100%",
    background: "#f8f9fa",
    textAlign: "center",
    zIndex: 1000,
    backgroundColor: "#4f1479"
  }}>
      <p className='mb-0'>
        &copy; {new Date().getFullYear()} Semana Acadêmica de Biotecnologia da UFPel. Todos os direitos reservados.
      </p>
      <p className='mb-0'>
        <a href="" target="_blank" rel="noopener noreferrer" className='text-white'>Política de Privacidade</a> | <a href="" target="_blank" rel="noopener noreferrer" className='text-white'>Termos de Uso</a>
      </p>
    </div>
  )
}

export default Footer
