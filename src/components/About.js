import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Into from './Into';
import aboutImage from '../aboutv4.jpg';
const About = () => {
    return(
        <Fragment>
            <Header />
            <section className="container p-content">
                <h1 className="title">Sobre Mi</h1>
                <div className="sec-about"> 

                    <div className="sec-about__image">
                        <div className="box-langs">
                            <h2 className="subtitle">Lenguajes / Frameworks / Librerías</h2>
                            <ul>
                                <li><p>HTML / CSS</p></li>
                                <li><p>SASS</p></li>
                                <li><p>Bootstrap</p></li>
                                <li><p>JavaScript</p></li>
                                <li><p>jQuery</p></li>
                                <li><p>REACT</p></li>
                                <li><p>ANGULAR</p></li>
                                <li><p>NODEJS</p></li>
                                <li><p>MONGODB</p></li>
                                <li><p>PHP</p></li>
                                <li><p>Python</p></li>
                                <li><p>Django</p></li>
                                <li><p>Flask</p></li>
                                <li><p>Lenguaje SQL</p></li>
                                <li><p>MySQL - SQLite</p></li>
                                <li><p>Git - GitHub</p></li>
                            </ul>
                        </div>

                        <div className="box-skills">
                            <h2 className="subtitle">Software's de desarrollo</h2>
                            <ul>
                                <li><p>Gestores de bases de datos MySQL: <span>Workbench, PhpMyAdmin, DBBrowser SQLite</span></p></li>
                                <li><p>Gestores de bases de datos MONGO: <span>MongoDBCompass, Robo 3T</span></p></li>
                                <li><p>Editores de código: <span>Visual Studio Code, SublimeTEXT</span></p></li>
                                <li><p>Peticiones API / REST - Cliente RESTFul: <span>Postman Agent</span></p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sec-about__information">
                        <div className="sec-about__information__container">
                            <div className="box-rad-image">
                                <img 
                                    src={aboutImage}
                                    alt="About"
                                />
                            </div>
                            <div className="box-text-about">
                                <p>Soy Dario Barboza, tengo 21 años y soy de Misiones. Soy técnico informático y me encuentro cursando el tercer año de ingeniería en computación. </p>
                                <p>Estudios que me han permitido formarme como programador con gran capacidad de analisis y resolución de problemas. </p>
                                <p>Cuento con una gran cantidad de conocimientos en lenguajes de programación que están dirigidos al desarrollo back-end y front-end de aplicaciones web.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Into />
        </Fragment>
    );
}

export default About;