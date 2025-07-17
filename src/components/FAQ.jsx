import React from 'react'

const FAQ = () => {
  return (
    <div className='container'>
      <p className='fs-2 mt-4'><strong>Perguntas Frequentes</strong></p>
      <ol className='list list-group-numbered'>
        <li className='list-group-item fs-4 mb-2'>Como chegar ao Auditório Eliseu Maciel?</li>
        <p className='fs-5 ms-4'>O auditório está localizado na Faculdade de Agronomia da UFPel, no campus Capão do Leão.</p>
      </ol>
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

    </div>
  )
}

export default FAQ
