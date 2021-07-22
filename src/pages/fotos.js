import React, { Component } from 'react';


import Image1 from "../images/img3.jpeg";
import Image2 from "../images/girls.jpeg";
import Image3 from "../images/img3.jpeg";
import Image4 from "../images/girls.jpeg";
import Image5 from "../images/img3.jpeg";


import Slider from '../components/Slider';
import "../pages/fotos.css"

const images = [Image1, Image2, Image3, Image4, Image5];

export default class Fotos extends Component {
  render() {
    return (
        <>
          <div>

          <Slider
            options={{

              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true,
              imagesLoaded: true,
              percentPosition: false,
            }}
          >
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" alt="orange tree" />
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" alt="submerged" />
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" alt="look-out" />
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" alt="One World Trade" />
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" alt="drizzle" />
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" alt="cat nose" />


          </Slider>
        </div>

      </>
    );
  }
}
