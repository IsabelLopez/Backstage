import React from 'react'
import Flickity from "../components/flickity"
import Layout from "../components/layout"
import "./fotos.css"

import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

import Sala1 from "../images/salas6.jpg"
import Sala2 from "../images/salas3.jpg"
import Sala3 from "../images/salas1.jpg"
import Sala4 from "../images/salas4.jpg"

import Evento1 from "../images/clases34.jpeg"
import Evento2 from "../images/clases26.jpeg"
import Evento3 from "../images/clases30.jpeg"
import Evento4 from "../images/clases24.jpeg"


const BackstagePage = () => {
    return (
        <>
            <title>Backstage - Somos Backstage</title>
            <Layout>
              <div className="contenido">

                <h3 className="mainTitle center-text">Salas de danza e Instalaciones</h3>
                <div className="masonry-box">
                  <div className="masonry-1">
                    <img src={Sala1} alt=""/>
                  </div>

                  <div className="masonry-2">
                    <img src={Sala2} alt=""/>
                    <img src={Sala3} alt=""/>
                  </div>

                  <div className="masonry-2">
                    <img src={Sala1} alt=""/>
                    <img src={Sala4} alt=""/>
                  </div>
                </div>

                <div className="middle-box">
                  <h3 className="mainTitle center-text">clases</h3>
                  <Flickity/>
                </div>

                <h3 className="mainTitle center-text">Eventos especiales</h3>

                <div className="masonry-box">
                  <div className="masonry-3">
                    <img src={Evento1} alt=""/>
                    <img src={Evento2} alt=""/>
                  </div>

                  <div className="masonry-4">
                    <img src={Evento3} alt=""/>
                  </div>

                  <div className="masonry-5">
                    <img src={Evento4} alt=""/>
                  </div>
                </div>

              </div>
            </Layout>

        </>
    )
}

export default BackstagePage
