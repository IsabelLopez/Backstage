import * as React from 'react'
import Ballet from "../images/ballet.png"

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
                    {/* <div className="historiaPic">
                        <img src={Ballet} alt="" class="imgHistoria" />
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default BackstagePage