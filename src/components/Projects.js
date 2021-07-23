import React, { useState, useEffect, Fragment } from 'react';
import axiosClient from '../config/axios';

import Header from './Header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Into from './Into';
const Projects = () => {

    const [ projects, updateProjects ] = useState([]);

    const baseURL = 'https://whispering-gorge-63143.herokuapp.com/api/projects';

    // eslint-disable-next-line
    useEffect( () => {
        const updateApiProjects = async () => {
            try {
                const result = await axiosClient.get('/api/projects');
                updateProjects(result.data.projects);
            } catch (error) { 
                console.log(error);
            }
        }
        updateApiProjects();
    }, [])


    return(
        <Fragment>
                <Header />
                <section className="container p-content">
                    <h1 className="title">Proyectos</h1>
                    <div className="sec-projects">
                        { projects.map( project => (
                            <article
                                className="pjt"
                                key={project._id}
                            >
                                <div className="pjt-image">
                                    <img 
                                        src={`${baseURL}/get-image/${project.image}`}
                                        alt={`Imagen ${project.name}`} 
                                    />
                                </div>
                                <div className="pjt-detail">
                                    <p>Nombre: <span>{project.name}</span></p>
                                    <p>Categoría: <span>{project.category}</span></p>
                                    <a href={project.url}>
                                        Ir al sitio
                                        <span>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </span>
                                    </a>
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

export default Projects;