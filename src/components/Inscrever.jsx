import React from 'react'

const Inscrever = () => {
  return (
    <div className='container text-center'>
      <p className='fs-3 text-center mt-5'>
        As inscrições para a <strong>Semana Acadêmica de Biotecnologia</strong> da UFPel estão <strong>abertas!</strong>
      </p> <br />
      <p className='mt-4 text-center'>
        <a
          href="https://forms.gle/7b1d8Z5f3g1z9x6cA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-roxo btn-lg p-4"
        >
          Inscreva-se como ouvinte
        </a>
      </p><br /><br />
      <p className='fs-5'>
        Para se inscrever, preencha o formulário disponível clicando no botão acima. Inscrições abertas do dia <strong>21 de julho</strong> até <strong>15 de agosto</strong>.
      </p>
     
    </div>
  )
}

export default Inscrever
