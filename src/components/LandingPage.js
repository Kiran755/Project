import React from 'react'
import { ReactComponent as ReactLogo } from './svgpic.svg';
import "./LandingPage.css";
const LandingPage = () => {
    return (
        <div className='content'>
            <div className="text">
                <h1 className="first">Web Design</h1>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate hic vero aperiam autem excepturi iusto dolorum quis incidunt quam impedit?<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio atque quod voluptatum autem pariatur?</p>
            </div>
            <div className="svg">
                <svg width="100%" height="100%">
                    <ReactLogo className='svg' />
                </svg>


            </div>
        </div >
    );
}

export default LandingPage