import React from 'react';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return(
        <header className="container">
            <nav className="navegation">
                <div className="logo">
                    <Link 
                        to={'/'} 
                        className="link-logo"
                    >DB</Link>
                </div>
                <div className="my-sm">
                    <a 
                        href="https://github.com/DarioEB"
                        className="link-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><FontAwesomeIcon icon={faGithub}/></a>
                    <a 
                        href="https://www.linkedin.com/in/dariobarboza"
                        className="link-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a 
                        href="https://www.instagram.com/darioebarboza/"
                        className="link-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><FontAwesomeIcon icon={faInstagram}/></a>
                    <a 
                        href="https://www.facebook.com/dario.barboza.737/"
                        className="link-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><FontAwesomeIcon icon={faFacebookF}/></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;