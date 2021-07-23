import React, { useState } from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll as scroll } from "react-scroll";
const Into = () => {

    const [ y, saveY ] = useState();

    window.onscroll = () => {
        let _y = window.scrollY;
        saveY(_y);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return(
        <div className={`box-arrow ${(y >= 240) ? 'visible' : 'hidden'}`}>
            <FontAwesomeIcon 
                icon={faArrowUp}
                className="box-arrow__icon"
                onClick={ scrollToTop}    
            />
        </div>
    );
}

export default Into;