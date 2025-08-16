import React from 'react'

const Cronograma = () => {
  return (
    <div className='container'>
      <p className='fs-2 mt-4'><strong>Cronograma</strong></p>
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>Período/Data</th>
            <th>Evento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22 de julho a 30 de setembro de 2025</td>
            <td>Período para submissão de trabalhos.</td>
          </tr>
          <tr>
            <td>22 de julho a 30 de setembro de 2025</td>
            <td>Período para inscrições como ouvinte.</td>
          </tr>
          <tr>
            <td>01 de outubro de 2025</td>
            <td>Divulgação por e-mail dos trabalhos selecionados para apresentação oral.</td>
          </tr>
          <tr>
            <td>03 de outubro de 2025</td>
            <td>Divulgação por e-mail dos trabalhos selecionados para apresentação em formato pôster.</td>
          </tr>
          <tr>
            <td>Até 19 de outubro de 2025</td>
            <td>Prazo final para o envio do conteúdo da apresentação oral em formato PDF.</td>
          </tr>
          <tr>
            <td>24 a 28 de novembro de 2025</td>
            <td>Realização da Semana Acadêmica, com apresentações de trabalhos ocorrendo no período da tarde.</td>
          </tr>
          <tr>
            <td>-- de dezembro de 2025</td>
            <td>Anúncio dos trabalhos premiados durante o encerramento do evento.</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default Cronograma
