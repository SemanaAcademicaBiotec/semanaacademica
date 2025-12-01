import React from 'react'
import { Link } from 'react-router-dom'

const Minicursos = () => {


  return (
    <div className='container fs-5'>
      <div className='container'>
      <p className='fs-2 mt-4'><strong>Cronograma dos Minicursos</strong></p>
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>Data</th>
            <th>Turno</th>
            <th>Local</th>
            <th>Minicurso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24 de novembro</td>
            <td>Manhã</td>
            <td>Sala 332, Laboratório 3 da Computação - Campus Anglo</td>
            <td>Caracterização genética de isolados bacterianos resistentes com sequenciamento de nova geração (NGS).</td>
          </tr>
          <tr>
            <td>24 de novembro</td>
            <td>Integral</td>
            <td>Prédio 20, laboratório Watson & Crick</td>
            <td>Imunodiagnóstico da COVID-19: Da seleção do antígeno à seleção de anticorpos.</td>
          </tr>
          <tr>
            <td>24 de novembro</td>
            <td>Manhã</td>
            <td>A definir</td>
            <td>Algo do Fábio a confirmar.</td>
          </tr>
          <tr>
            <td>25 de novembro</td>
            <td>Integral</td>
            <td>Prédio 20, laboratório Watson & Crick / Sala de aula</td>
            <td>Gateway, Golden Gate, Nimble Cloning para transformação genética em plantas.</td>
          </tr>
          <tr>
            <td>25 de novembro</td>
            <td>Integral</td>
            <td>Prédio 20, laboratório GenStrut / Sala de aula</td>
            <td>Sequenciamento de DNA pelo método de Sanger.</td>
          </tr>
          <tr>
            <td>25 de novembro</td>
            <td>Integral</td>
            <td>Prédio 19, laboratório 7</td>
            <td>Clonagem de DNA e expressão de proteínas recombinantes.</td>
          </tr>
          <tr>
            <td>A definir</td>
            <td>Tarde</td>
            <td>A definir</td>
            <td>Anatomia de animais de laboratório.</td>
          </tr>
          <tr>
            <td>26 de novembro</td>
            <td>Manhã</td>
            <td>Prédio 21, sala PPGFV / Prédio 14, laboratório de cultura de tecidos e plantas</td>
            <td>Cultura de tecidos de plantas - Da bancada ao espaço.</td>
          </tr>
          <tr>
            <td>26 de novembro</td>
            <td>Manhã</td>
            <td>Laboratório BioNano, 709/PPGCTA / Sala 711 do PPGCTA</td>
            <td>Nanotecnologia aplicada à biotecnologia: Criação de estruturas funcionais por Electrospinning.</td>
          </tr>
          <tr>
            <td>26 de novembro</td>
            <td>Integral</td>
            <td>Prédio 20, laboratório Watson & Crick / Sala de aula</td>
            <td>Cultivo celular: Fundamentos e aplicações em biotecnologia.</td>
          </tr>
          <tr>
            <td>26 de novembro</td>
            <td>Integral</td>
            <td>Prédio 20, laboratório BioPro / Sala de aula</td>
            <td>Purificação de proteínas usando sistema de cromatografia líquida AKATA Purifier.</td>
          </tr>
          <tr>
            <td>26 de novembro</td>
            <td>Tarde</td>
            <td>Prédio 20, laboratório GPN / Sala de aula</td>
            <td>Neurobiologia da depressão e da doença de Alzheimer: O papel do eixo intestino-cérebro.</td>
          </tr>
        </tbody>
      </table>
    </div>

      <div className='text-center'>
        <p className='fs-2 mt-4'><strong>Inscrição para Minicursos</strong></p>
        <br />
        <div className='lh-sm'>
          <p>Para se inscrever em um minicurso, você primeiro deve estar <strong>inscrito como ouvinte.</strong></p>
          <p>
        Caso ainda não esteja inscrito,{' '}
        <Link to="/inscrições">clique aqui</Link> para se inscrever.
       </p>
        </div>
      </div>
    <div className='text-center border shadow p-5 m-4 mx-auto rounded-5' style={{maxWidth: '70%'}}>
      <h4>Inscreva-se em um minicurso</h4>
      <p>Para se inscrever, clique no botão abaixo.</p>
      <button className='btn btn-outline-dark btn-lg mb-4 p-4 btn-roxo' onClick={() => window.open("https://forms.gle/88dXFM5DW6aygQ4o7", "_blank")}>
        Inscrever-se em Minicurso
      </button>
      <hr style={{width: '40%'}} className='mx-auto'/>
      <div className='fs-6'>
        <p>Selecione até dois minicursos aos quais deseja se inscrever</p>
      </div>
    </div>
    <br />
    </div>
  )
}

export default Minicursos
