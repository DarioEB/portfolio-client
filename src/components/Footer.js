import React from 'react';

const Footer = () => {
    
    const year = new Date().getFullYear();

    return(
        <footer className="container">
            <p>Desarrollador Web Full Stack - Dario Barboza - Portafolio {year}</p>
        </footer>
    );
}

export default Footer;