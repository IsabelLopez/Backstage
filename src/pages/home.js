import React from 'react'
import Layout from "../components/layout"
import Circle from '../images/circle.png'
import Main from "../images/mainImg.png"
import Ballet from "../images/ballet2.png"
import Ballet2 from "../images/ballet.png"
import Jazz from "../images/jazz.png"
import Tap from "../images/tap.png"
import Contemporaneo from "../images/contempo.png"
import "../pages/home.css"

import { Carousel } from 'react-bootstrap';




function Homepage() {

    return (
      <Layout>
        <div className="home">
            <title>Backstage - Homepage</title>
            <Carousel >
            <Carousel.Item interval={4000}>
              <img
                className="d-block carousel-circle"
                src={Circle}
                alt="First slide"
              />
              <img
                className="d-block carousel-img"
                src={Main}
                alt="First slide"
              />
              <Carousel.Caption id="first-slide-text">
                <h1 className="carousel-text">Escuela de</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
              <img
                className="d-block carousel-circle"
                src={Circle}
                alt="First slide"
              />
              <img
                className="d-block carousel-img"
                src={Ballet}
                alt="First slide"
                id="ballet-desktop"
              />
              <img
                className="d-block carousel-img"
                src={Ballet2}
                alt="First slide"
                id="ballet-mobile"
              />
              <Carousel.Caption id="second-slide-text">
                <h1 className="carousel-text">ballet</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
              <img
                className="d-block carousel-circle"
                src={Circle}
                alt="First slide"
              />
              <img
                className="d-block carousel-img"
                src={Jazz}
                alt="First slide"
                id="jazz-pic"
              />
              <Carousel.Caption id="third-slide-text">
                <h1 className="carousel-text">jazz</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
              <img
                className="d-block carousel-circle"
                src={Circle}
                alt="First slide"
              />
              <img
                className="d-block carousel-img"
                src={Tap}
                alt="First slide"
                id="tap-pic"
              />
              <Carousel.Caption id="fourth-slide-text">
                <h1 className="carousel-text">tap</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={4000}>
              <img
                className="d-block carousel-circle"
                src={Circle}
                alt="First slide"
              />
              <img
                className="d-block carousel-img"
                src={Contemporaneo}
                alt="First slide"
                id="contem-pic"
              />
              <Carousel.Caption id="fifth-slide-text">
                <h1 className="carousel-text">contemporaneo</h1>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>

        </div>
      </Layout>

    )
}

export default Homepage
