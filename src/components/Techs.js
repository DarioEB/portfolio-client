import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Into from './Into';

import axiosClient from '../config/axios';
const Techs = () => {

    const [ techs, saveTechs ] = useState([]);
    const baseURL = 'https://whispering-gorge-63143.herokuapp.com/api/technologies';
    useEffect( () => {
        const uploadTechsApi = async () => {
            try {
                const result = await axiosClient.get('/api/technologies');
                saveTechs(result.data.technologies);
            } catch (error) {
                console.log(error);
            }
        } 
        uploadTechsApi();
    }, [])

    return(
        <Fragment>
            <Header />
            <section className="container p-content">
                <h1 className="title">Tecnologías</h1>
                <div className="sec-techs">

                    <div className="tech-information">
                        <p>
                            La idea de esta sección no es explicarte que es cada tecnología, para que o como se utilizan, si no, mostrarte mi experiencia utilizando 
                            desde conceptos fundamentales de la programación hasta distintas definiciones, convensiones, diversos patrones y características que tienen
                            cada una de estas.
                        </p>
                    </div>

                    { techs.map( tech => (
                        <article 
                            className="tech"    
                            key={tech._id}
                        >
                            <div className="tech__title">
                                <h3>{tech.name}</h3>
                                <div className="tech__title__image">
                                    <img 
                                        src={`${baseURL}/get-image/${tech.image}`}
                                        alt={`${tech.name}`}
                                    />
                                </div>
                            </div>
                            <div className="tech__description">
                                <p>{tech.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <Footer />
            <Into />
        </Fragment>
    );
}

export default Techs;