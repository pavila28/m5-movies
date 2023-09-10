import React from 'react'
import './footer.css'
import Card from 'react-bootstrap/Card';

export default function FooterComponent() {
  return (
    <div className='footer-container'>
        <h3 className='footer-crator'>Creador: Patricio Avila</h3>
        <h4 className='footer-contact'>Contacto: </h4>
        <p className='footer-info'>avilapato8@gmail.com</p>
        <p className='footer-info'>Cel 81 1984 7061</p>
    </div>
  )
}
