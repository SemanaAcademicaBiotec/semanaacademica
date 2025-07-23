import React from 'react'

const Home = () => {
  return (
    <div className='container'>
        <div className=''>
           <p className='fs-4 mt-5 recuo'>
                Convidamos estudantes de <strong>graduação</strong> e <strong>pós-graduação</strong> de toda a Universidade Federal de Pelotas para participar da <br /><strong>1° Semana Acadêmica</strong>, que será realizada no auditório Eliseu Maciel da Faculdade de Agronomia, no campus Capão do Leão da UFPel. 
                <br /><br />O evento, com duração de uma semana, tem por intuito possibilitar aos participantes: 
            </p> 
            <p className='fs-4 ms-4'>- Assistir palestras; <br /> - Participar de minicursos; <br /> - Realizar apresentação oral ou de pôster; <br /> - Interagir com empresas, divulgadores científicos e pesquisadores da UFPel e de outras instituições do Brasil; <br /> - E muito mais!</p>
            <p className='fs-4'>Desta forma, um dos objetivos deste evento é <strong>promover a interação da comunidade acadêmica</strong> e impulsionar diferentes áreas de conhecimento acerca da Biotecnologia.</p>
        </div>
    <div className='border rounded-5 mt-5 fs-5 text-center mx-auto shadow' style={{width: "70%"}}>
      <h3 className='mt-4 fs-1 text-center mb-4 info'>INFORMAÇÕES</h3>
      <p><strong>Data</strong> <br />22 de setembro até 26 de setembro</p>
      <p className='mb-4'><strong>Local</strong> <br />Auditório Eliseu Maciel, Faculdade de Agronomia, UFPel</p>
    </div>
    <p className='mb-5 text-center mt-4'> Para mais informações, acompanhe no instragam <a href="https://www.instagram.com/dabiotecufpel/" target="_blank" rel="noopener noreferrer">@dabiotecufpel </a> <br /> ou entre em contato através do nosso email mostracincolinhatreslinha@gmail.com.</p>
    </div>
  )
}

export default Home
