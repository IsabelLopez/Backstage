import React, { Component } from 'react'
import Flickity from 'react-flickity-component'
import Layout from "../components/layout"

import Flickity1 from "../images/clases14.jpg"
import Flickity2 from "../images/clases31.jpeg"
import Flickity3 from "../images/clases28.jpeg"
import Flickity4 from "../images/clases29.jpeg"
import Flickity5 from "../images/clases26.jpeg"
import Flickity6 from "../images/clases7.jpg"
import Flickity7 from "../images/clases20.jpg"
import Flickity8 from "../images/clases34.jpeg"
import Flickity9 from "../images/clases25.jpeg"



import './flickity.css'




export default class Carousel extends Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
          <Flickity
          className={'carousel-pics'}
          options={{
            cellAlign: 'left',
            percentPosition: false,
            imagesLoaded: true,
            // pauseAutoPlayOnHover: true,
            wrapAround: true,
            // groupCells: 1,
          }}>
            <div className="flickity-two">
              <img src={Flickity1}/>
              <img src={Flickity2}/>
            </div>

            <div className="flickity-one">
              <img src={Flickity3}/>
            </div>

            <div className="flickity-two">
              <img src={Flickity4}/>
              <img src={Flickity5}/>
            </div>

            <div className="flickity-one">
              <img src={Flickity6}/>
            </div>

            <div className="flickity-two">
              <img src={Flickity7}/>
              <img src={Flickity8}/>
            </div>

            <div className="flickity-one">
              <img src={Flickity9}/>
            </div>


          </Flickity>
      )
    }
    return null
  }
}
