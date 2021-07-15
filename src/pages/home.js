import React from 'react'
import Main from "../images/carrousel1.png"
import Ballet from "../images/ballet2.png"
import Tap from "../images/tap.png"
import Jazz from "../images/jazz.png"


import Contemporaneo from "../images/contempo.png"
import "../pages/home.css"

import { Button, Carousel } from 'react-bootstrap';




function Homepage() {

    return (
        <div className="home container-box">
            <title>Backstage - Homepage</title>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block carousel-img"
                src={Main}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>



          </Carousel>

        </div>

    )
}

export default Homepage
