import * as React from 'react'
// import Layout from "../components/layout"
import Navigation from "../components/Navbar"
import { Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Circle from "../images/circle_contact.png"
import Map from "../images/map.png"
import "../pages/contacto.css"

import { config } from '@fortawesome/fontawesome-svg-core'
// Disable the auto CSS insertion
config.autoAddCss = false



const ContactPage = () => {
    return (
        <>
            <title>Backstage - Contacto</title>
              <Navigation/>
              <div className="contenido" id="contact-page">
                  <h2 className="mainTitle center-text">Contáctanos</h2>
                  <p className="center-text contact-text">Para mayor información o si está interesado en alguno de nuestros servicios contáctenos por aquí.</p>


                <div className="contact_form">
                    <Form method="post" action="https://formspree.io/f/myylpjjo">
                        <Col className="contactrow">
                            <input name="nombre" type="text" required placeholder="Nombre y Apellido" className="placeholder form-control" />
                        </Col>

                        <Col className="contactrow">
                            <input name="email" type="email" required placeholder="Correo" className="placeholder form-control" />
                        </Col>

                        <Col className="contactrow">
                            <input name="mensaje" type="text" required placeholder="Mensaje" className="placeholder form-control longerInput" />
                        </Col>

                        <Col className="contactrow">
                            <Button id="btnForm" type="submit" size="sm">ENVIAR</Button>
                        </Col>
                    </Form>
                </div>

                <div className="map-container">
                  <img src={Map} alt="" className="map-img"/>
                  <div className="contact-media">
                    <div className="contact-info">
                      <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                      <p className="text">+507 6670-1713</p>
                    </div>
                    <div className="contact-info">
                      <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon"/>
                      <p className="text">+507 394-2667/68</p>
                    </div>
                    <div className="contact-info">
                      <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                      <p className="text">Backstagebaile@gmail.com</p>
                    </div>
                    <div className="contact-info">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                      <p className="text">Edificio iStorage, Piso M Parque Industrial - Costa del Este</p>
                    </div>
                  </div>
                </div>
              <img src={Circle} alt="" className="contact-circle"/>
              </div>



        </>
    )
}

export default ContactPage
