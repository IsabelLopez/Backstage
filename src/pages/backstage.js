import * as React from 'react'
import img5 from "../images/img5.jpeg"
import Main from "../images/mainImg.png"

import Navigation from "../components/Navbar"
import "../pages/backstage.css"


const BackstagePage = () => {
    return (
        <>
            <Navigation />
            <title>Backstage - Somos Backstage</title>
            
            <div className="container historiaBackstage">

                <div className="historia">
                    <div className="historiaParagraph">
                        <h2 className="mainTitle">Nuestra Historia</h2>
                        <p className="subtitle">En marzo del 2013 abre sus puertas Backstage Dance Studio, con el fin de enriquecer y elevar el nivel de cultura en nuestro país, a través del bello arte de la danza.</p>
                        <p className="subtitle">Actualmente, Backstage cuenta con un maravilloso equipo de profesionales de la danza, que juntos proporcionan la más avanzada y completa formación artística a sus estudiantes, bajo la dirección artística de Tita López.</p>
                        <p className="subtitle">A través de este arte, logramos inculcarle a nuestras alumnas un alto nivel de disciplina, responsabilidad y una educación integral. No solo con el objetivo que se conviertan en bailarinas profesionales, si no co el fin que crezcan como personas íntegras, con valores, cultra y un grado de responsabilidad elevado.</p>
                        <p className="subtitle">Más que una academia de danzas, somos una gran familia donde la exclusividad es un atributo que nos permite identificarnos con cada una de nuestras alumnas desde cerca, logrando así un trato y una enseñanza muy personalizada.</p>
                    </div>
                    <div className="historiaPic">
                        <img src={img5} alt="" class="imgHistoria" />
                    </div>
                </div>

                <div className="container quote">
                    <h2 className="mainQuote"><i>La Danza es un estilo de vida, más no solo una carrera.</i> Para poder vivir de ella se debe tener mucha pasión y amor por este arte, ya que el proceso de aprendizaje no acaba y nunca es suficiente a nivel de entrenamiento. ¡Todos los días son parte esencial del éxito!</h2>
                    <p className="nameQuote">Tita López</p>
                </div>

                <div className="historia">
                    <div className="historiaPic">
                        <img src={Main} alt="" class="imgHistoria" />
                    </div>
                    <div className="historiaParagraph">
                        <h2 className="mainTitle">Tita López</h2>
                        <h3 className="subtitle2">Bailarina / Directora / Profesora / Productora</h3>

                        <div className="infoTita">
                            <div className="infoLeft">
                                <p className="subtitleTita">Inició sus estudios de danza a los 5 años de edad. Tiene una trayectoria de 28 años en el ámbito de la danza. Representó a Panamá por 8 años consecutivos en competencias de danza internacionales obteniendo numerosos premios.</p>
                                <p className="subtitleTita">Ha participado como bailarina y productora en producciones de ballet clásico tales como: "La Peri", "La Bayadere", "Don Quijote", "Coppelia", "El Cacanueces", "Giselle", "Paquita", entre otras. Tuvo la oportunidad de interpretar el rol que cada niña con hacer, este fue el papel de Clara en "El Cacanueces", dirigida por el coreógrafo Marek Cholewa en el año 2001. </p>
                                <p className="subtitleTita">En el 2010 obtuvo un Bachelor of Fine Arts, con énfasis en Ballet Clásico de Texas Christian University (TCU), Forth Worth, Texas.</p>
                                <p className="subtitleTita">Fue invitada para bailar representando a Texas Christian University (TCU) en el American College Dance Festival Association (ACDFA) en el Kennedy Center, Washington D.C en mayo 2010.</p>
                            </div>
                            <div className="infoRight">
                                <p className="subtitleTita">Tuvo la oportunidad de trabajar con reconocidos coreógrafos y bailarines internacionales tales como: Jessica Lang, Susan Jaffe (Primera ex bailarina del New York City NYC Ballet), Ben Stevenson (Director Artístico Texas Ballet Theatre TBT), Summer Lee Rhatigan, Thom Clower, Robert Battle, Alonzo King (Director Artístico Lines Ballet) entre otros.</p>
                                <p className="subtitleTita">Actualmente aparte de dirigir y enseñar en nuestra Academia Backstage Dance Studio, donde es profesora de Ballet, Tap, Jazz, y Contemporáneo, es Presidenta de la Asociación Pro-Danza de Panamá.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default BackstagePage