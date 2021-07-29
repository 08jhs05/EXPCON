import React from 'react';

function HeroSection(props){
    return (
        <div className="section-hero">
            <img src="/img/background/Image1.png" className="bgImage"/>
            <div className="contents">
                <div className="title">
                    INTERACTIVE CONCERT EXPERIENCE
                </div>
                <div className="description">
                    Experience your favourite artists like never before and from the comfort of your own home.
                </div>
            </div>
        </div>
    );
}

export default HeroSection;