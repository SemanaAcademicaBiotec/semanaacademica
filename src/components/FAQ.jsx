import React from 'react'

const FAQ = () => {
  return (
    <div className='container'>
      <p className='fs-2 mt-4'><strong>Perguntas Frequentes</strong></p>
      <ol className='list list-group-numbered'>
        <li className='list-group-item fs-4 mb-2'>Como chegar ao Auditório Eliseu Maciel?</li>
        <p className='fs-5 ms-4'>O auditório está localizado na Faculdade de Agronomia da UFPel, no campus Capão do Leão.</p>
          <div className="container my-4" style={{ maxWidth: '70%' }}>
            <div className="ratio ratio-16x9">
              <iframe 
                title="Google Maps Eliseu Maciel Faculty of Agronomy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.8593150844745!2d-52.41704481597297!3d-31.80158388667672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511cbc7e365af97%3A0x7029a662e5355e41!2sEliseu%20Maciel%20Faculty%20of%20Agronomy!5e0!3m2!1sen!2sbr!4v1752762483839!5m2!1sen!2sbr" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        <li className='list-group-item fs-4 mb-2 mt-5'>Posso me inscrever mesmo não sendo da UFPel?</li>
        <p className='fs-5 ms-4'>Sim, desde que você tenha vínculo com alguma universidade ou instituto semelhante.</p>
        <p className='fs-5 ms-4'><strong>Atenção:</strong> o acesso ao restaurante universitário (R.U.) e ao ônibus interno da UFPel é restrito a alunos da própria universidade.</p>
        <p className='fs-5 ms-4'>Mas não se preocupe — há outras opções de alimentação no campus, com restaurantes por quilo.</p>
        <p className='fs-5 ms-4'>E para transporte, é possível utilizar a linha "Universidade" da empresa Santa Silvana.</p>
      </ol> 
    </div>
  )
}

export default FAQ
