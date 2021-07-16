import * as React from 'react'
import Layout from "../components/layout"
import { Form, Button, Col } from 'react-bootstrap';

import Navigation from "../components/Navbar"
import "../pages/contacto.css"



const ContactPage = () => {
    return (
        <>
            <Navigation />
            <title>Backstage - Contacto</title>
            <Layout>
              <div className="contenido">
                  <h2 className="mainTitle center-text">Contáctanos</h2>
                  <p className="center-text">Para mayor información o si está interesado en alguno de nuestros servicios contáctenos por aquí.</p>
              </div>

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
            </Layout>

        </>
    )
}

export default ContactPage
