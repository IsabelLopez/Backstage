import React from 'react'
import Main from "../images/mainImg.png"
import Ballet from "../images/ballet2.png"
import Tap from "../images/tap.png"
import Jazz from "../images/jazz.png"
import Contemporaneo from "../images/contempo.png"
import "../pages/home.css"

import { Button, Carousel } from 'react-bootstrap';




function Homepage() {

    return (
        <div className="home container">
            <title>Backstage - Homepage</title>
            <Carousel className="carouselBgImage">

                <section className="homeParagraph">
                    <h2 className="titleTextHome">¡Ven y vive la magia del momento!</h2>
                    <Button id="btn" type="submit" size="sm">Contáctanos</Button>
                </section>
                
            {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
                <Carousel.Item>
                    <img className="d-block w-100 carouselImg" src={Main} alt="Teacher and student dancing" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carouselImg" src={Ballet} alt="Student dancing ballet" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carouselImg" src={Tap} alt="Student dancing tap" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carouselImg" src={Jazz} alt="Student dancing jazz" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carouselImg" src={Contemporaneo} alt="Student dancing contemporary" />
                </Carousel.Item>
                
            </Carousel>

        </div>
    )
}

export default Homepage