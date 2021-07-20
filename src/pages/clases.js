import * as React from 'react'
import Layout from "../components/layout"


import girls from "../images/girls.jpeg"
import img13 from "../images/class-circle.png"
import img3 from "../images/img3.jpeg"
import virtual from "../images/screenshot.png"

import { Button } from 'react-bootstrap';

import Navigation from "../components/Navbar"
import "../pages/clases.css"


const ClasesPage = () => {
    return (
        <>
            <title>Backstage - Clases</title>
            <Layout>
              <div className="contenido">

                <div className="flex-box-half" id="class-flex">
                    <div className="one-half-flex" id="img-half">
                        <img src={img3} alt="" class="img-class" />
                        <Button id="btn" type="submit" size="sm">PRESENCIALES</Button>
                    </div>
                    <div className="one-half-flex" id="img-half">
                        <img src={virtual} alt="" class="img-class" />
                        <Button id="btn" type="submit" size="sm">VIRTUALES</Button>
                    </div>
                </div>

                <div className="text-box-center class-text-box">
                    <h3 className="mainTitle">Backstage Dance Studio</h3>
                    <h5 className="">Como academia profesional en la enseñanza de danzas, ofrece un programa que ha sido seguido por generaciones de alumnos y diseñado por profesionales de este Arte.</h5>
                </div>
              </div>
            </Layout>

            <div className="flex-box-half pink-background" id="">
              <div className="one-half-flex flex-responsive img-absolute" id="relative-side">
                  <img src={img13} alt="" class="circle-img-class" />
              </div>
              <div className="one-half-flex" id="outside-text">
                  <p className=""><b>Coordinación y Movimiento, Ballet Básico y Pre Ballet</b>, se ha diseñado para introducir a las más <b>pequeñas desde los 3 años de edad</b>, a las alegrías del movimiento, explorando y expandiendo su rango de movimiento en un ambiente alegre y dinámico. Es un programa divertido que desarrollará el autoestima de la alumna, además de inculcarles mucha disciplina y responsabilidad desde tan pequeñas. Coordinación, fuerza, flexibilidad y equilibrio, en combinación con ejercicios musicales enfocados en danza, son algunos de los objetivos principales de la clase.</p>
                  <p className="">Cada nivel está basado en un programa cuidadosamente elaborado para un desarrollo constante de la técnica e interpretación artística de las alumnas. Para garantizar este progreso, <b>se requiere un número mínimo de clases por semana</b> para cada nivel. El progreso depende de la participación regular y consistente. Se recomienda que las alumnas continúen sus estudios de danza durante todo el año, sobre todo si aspiran a pasar a trabajo de puntas cuando sea el momento indicado.</p>
              </div>
          </div>

          <div className="contenido secondary">
            <div className="flex-box-half margin-40">
              <div className="one-half-flex">
                <p className="text center">Otros géneros como <b>Tap, Jazz y Contemporáneo
                        </b> también siguen un plan de estudio. La colocación del estudiante en una clase se determina por su edad o por la potestad del profesor, mediante la evaluación de su progreso. Cada clase tendrá un conjunto de pasos necesarios que se deberán dominar antes de pasar al siguiente nivel. </p>
                <p className="text center">Como parte del entrenamiento de nuestras alumnas, una vez llegan a un nivel intermedio se incluyen clases de preparación física como complemento para su formación. Somos fiel creyentes en que debemos entender anatómicamente cómo funciona el cuerpo para lograr con mayor éxito el progreso de las diferentes técnicas de danza que ofrecemos. La conexión mente + cuerpo les dará a nuestras alumnas una visión mas clara de cómo funciona su mayor "instrumento". su cuerpo, y de esa manera aprendan cómo manejarlo correctamente para evitar cualquier tipo de lesiones.</p>
              </div>

              <div className="one-half-flex img-side" id="relative-side">
                <div id="background-rounded-class">
                </div>
                  <img src={girls} alt="" class="img-class-rounded" />
              </div>
            </div>


          </div>


        </>
    )
}

export default ClasesPage
