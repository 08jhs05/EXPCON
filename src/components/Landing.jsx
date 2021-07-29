import React from 'react';
import Footer from './Footer';
import GetNow from './GetNow';
import HeroSection from './HeroSection';
import Perks from './Perks';
import Red from './Red';
import Reviews from './Reviews';
import Yellow from './Yellow';

function Landing(props){
    return (
        <div>
            <HeroSection/>
            <Red/>
            <Yellow/>
            <Perks/>
            <Reviews/>
            <GetNow/>
            <Footer/>
        </div>
    )
}

export default Landing;