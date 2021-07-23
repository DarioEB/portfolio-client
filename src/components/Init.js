import React, { Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom';

const Init = () => {
    return(
        <Fragment>
            <Header />
            <section className="container p-content">
                <div className="sec-init">
                    <div className="box-link-sec">
                        <Link
                            to={'/about'}
                            className="link-sec"
                        >Sobre Mi
                        <span className="line-link-sec"></span>
                        </Link>
                    </div>
                    <div className="box-link-sec">
                        <Link
                            to={'/projects'}
                            className="link-sec"
                        >Proyectos
                        <span className="line-link-sec"></span>
                        </Link>
                    </div>
                    <div className="box-link-sec">
                        <Link
                            to={'/'}
                            className="link-sec"
                        >Contacto
                        <span className="line-link-sec"></span>
                        </Link>
                    </div>
                    <div className="box-link-sec">
                        <Link
                            to={'/techs'}
                            className="link-sec"
                        >Tecnologías
                        <span className="line-link-sec"></span>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}

export default Init;