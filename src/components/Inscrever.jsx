import React from 'react'

const Inscrever = () => {
  return (
    <div className='container text-center'>
      <p className='fs-3 text-center mt-5'>
        As inscrições para a <strong>Semana Acadêmica de Biotecnologia</strong> da UFPel estão <strong>abertas!</strong>
      </p> <br />
      <p className='mt-4 text-center'>
        <a
          href="https://forms.gle/4imZMdAA6p99Xhf17"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-roxo btn-lg p-4"
        >
          Inscreva-se como ouvinte
        </a>
      </p><br /><br />
      <p className='fs-5'>
        Para se inscrever, preencha o formulário disponível clicando no botão acima. Inscrições abertas do dia <strong>22 de julho</strong> até <strong>20 de setembro</strong>.
      </p>
     
    </div>
  )
}

export default Inscrever
