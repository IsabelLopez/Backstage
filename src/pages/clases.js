import * as React from 'react'
import Layout from "../components/layout"


import girls from "../images/Tap_foto.jpeg"
import img13 from "../images/circulo_foto_01.png"
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

            <div className="flex-box-half pink-background" id="outside-flex">
              <div className="one-half-flex flex-responsive img-absolute img-circle-class" id="relative-circle">
                  <img src={img13} alt="" class="circle-img-class" />
              </div>
              <div className="one-half-flex" id="outside-text">
                  <p className=""><b>Coordinación y Movimiento, Ballet Básico y Pre Ballet</b>, se ha diseñado para introducir a las más <b>pequeñas desde los 3 años de edad</b>, a las alegrías del movimiento, explorando y expandiendo su rango de movimiento en un ambiente alegre y dinámico. Es un programa divertido que desarrollará el autoestima de la alumna, además de inculcarles mucha disciplina y responsabilidad desde tan pequeñas. Coordinación, fuerza, flexibilidad y equilibrio, en combinación con ejercicios musicales enfocados en danza, son algunos de los objetivos principales de la clase.</p>
                  <p className="">Cada nivel está basado en un programa cuidadosamente elaborado para un desarrollo constante de la técnica e interpretación artística de las alumnas. Para garantizar este progreso, <b>se requiere un número mínimo de clases por semana</b> para cada nivel. El progreso depende de la participación regular y consistente. Se recomienda que las alumnas continúen sus estudios de danza durante todo el año, sobre todo si aspiran a pasar a trabajo de puntas cuando sea el momento indicado.</p>
              </div>
          </div>

            <div className="contenido" id="secondary-contenido">
              <div className="flex-box-half margin-40">
                <div className="one-half-flex" id="">
                  <p className="text center">Otros géneros como <b>Tap, Jazz y Contemporáneo
                          </b> también siguen un plan de estudio. La colocación del estudiante en una clase se determina por su edad o por la potestad del profesor, mediante la evaluación de su progreso. Cada clase tendrá un conjunto de pasos necesarios que se deberán dominar antes de pasar al siguiente nivel. </p>
                  <p className="text center">Como parte del entrenamiento de nuestras alumnas, una vez llegan a un nivel intermedio se incluyen clases de preparación física como complemento para su formación. Somos fiel creyentes en que debemos entender anatómicamente cómo funciona el cuerpo para lograr con mayor éxito el progreso de las diferentes técnicas de danza que ofrecemos. La conexión mente + cuerpo les dará a nuestras alumnas una visión mas clara de cómo funciona su mayor "instrumento". su cuerpo, y de esa manera aprendan cómo manejarlo correctamente para evitar cualquier tipo de lesiones.</p>
                </div>

                <div className="one-half-flex img-side img-flex-class" id="relative-side">
                  <div id="background-rounded-class">
                  </div>
                    <img src={girls} alt="" class="img-class-rounded" id="absolute" />
                </div>
              </div>


            <h4 className="mainTitle" id="title-timeline">Cada nivel requiere la evaluación de tres aspectos:</h4>

            <div class="wrapper">
              <div class="center-line">
                <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
              </div>
              <div class="row row-1">
                <section>
                  <img src={img3} alt="" class="img-class" id="img-timeline"/>
                </section>
                 <section>
                  <div class="details">
                    <span class="title">TÉCNICA</span>
                  </div>
                  <p>En los niveles Coordinación, Ballet Básico y Pre Ballet, el énfasis está en la posición correcta, el control del cuerpo y el uso coordinado de la cabeza, el cuerpo y los brazos para obtener un buen sentido de la línea. Los movimientos de danza se basan en movimientos naturales del cuerpo, por ejemplo. caminar, correr y saltar . El estudiante será introducido a los términos de ballet en le idioma original que es el francés.</p>
                  <p>En los niveles intermedios y avanzados, una gama más amplia de movimientos físicos se desarrollan dentro de las capacidades propias del estudiante. Se desarrolla una mayor coordinación entre el uso en conjunto de la cabeza, el cuerpo y los brazos. El vocabulario de los movimientos de la danza se incrementa hasta incluir más pasos de baile y la técnica necesaria.</p>
                </section>
              </div>

              <div class="row row-2">
                <section>
                  <img src={img3} alt="" class="img-class" id="img-timeline"/>
                </section>
                <section>
                  <i class="icon fas fa-star"></i>
                  <div class="details">
                    <span class="title">RITMO</span>
                  </div>
                  <p>En los niveles principiantes, se hace énfasis en escuchar, y ser capaz de mantenerse al ritmo de la música. En los niveles intermedio y avanzado, el ritmo se desarrolló a partir de la comprensión de los compases simples, tales como 4/4 y 3/4 a composiciones más complicadas. En cada nivel, la alumna tiene la oportunidad de explorar el desarrollo del ritmo en el movimiento a su propia manera individual.</p>
                </section>
              </div>
            </div>
            </div>



        </>
    )
}

export default ClasesPage
