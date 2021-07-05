import * as React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav, Container } from 'react-bootstrap';

import "./Navbar.css"
import Logo from "../images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'


const Navigation = () => {
    return (

        <Container>
            <Nav className="navbarItems">

                <div className="navbarRight">
                    <Navbar.Brand href="#home">
                        <img src={Logo} width="160" height="120" className="d-inline-block align-top logoNavbar" alt="Backstage logo" />
                    </Navbar.Brand>
                    <Link to="/backstage" className="navlink">SOMOS BACKSTAGE</Link>
                    <Link to="/clases" className="navlink">CLASES</Link>
                    <Link to="/fotos" className="navlink">FOTOS</Link>
                    <Link to="/contacto" className="navlink">CONTÁCTANOS</Link>
                </div>

                <div className="social-media navbarLeft">
                    <a className="nav-icon" alt="Instagram icon" href="https://www.instagram.com/backstagebaile/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="fa-fw" />
                    </a>
                    <a className="nav-icon" alt="Facebook icon" href="https://www.facebook.com/groups/133354070189600" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} className="fa-fw" />
                    </a>
                    <a className="nav-icon" alt="Youtube icon" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutubeSquare} className="fa-fw" />
                    </a>
                </div>

            </Nav>
        </Container >
    )


}

export default Navigation