import React, { useState, useEffect} from 'react';
import { Motion, spring } from 'react-motion';
import GradientCTABtn from './GradientCTABtn';

function HeroSection(props){

    const [currentImage, setCurrentImage] = useState(0);            // 3 images starting from index 0, [0 1 2], controlled by radio buttons
    const [carouselAutoScroll, setCarouselAutoScroll] = useState(true); //when false, stops auto scrolling images in the background carousel
    
    useEffect(() => {
        setTimeout(() => {                      // update currentImage state for every 10 seconds
            if(carouselAutoScroll){             // when currentImage is updated, this useEffect function is triggered
                if(currentImage < 2){           // and re-run this code after 10 sec again
                    setCurrentImage(currentImage+1);    //this won't run when carouselAutoScroll is false.
                } else {
                    setCurrentImage(0);
                    }
                }
            }, 10000);
    }, [currentImage, carouselAutoScroll]);

    // 'Motion' imported from react-motion library
    // x variable in the style props controlls its animation behavior
    // three background images are placed horizontally, and only 100% window width of the images are shown.
    // other images are hidden.
    // when currentImage state changes, it triggers the variable x to change with imported 'spring' function
    // and shifts left coordinate as shown at line 34.

    return (
        <div className="section-hero">
            <div className="imageCarousel">
                <Motion style={{x: spring(currentImage)}}>
                    {({x}) =>
                        <div style={{display:'flex', position: 'absolute', left: `-${x*1920}px`, objectFit: 'cover', filter: `brightness(60%)`}}>
                            <img src="/img/background/Image1.png" className="bgImage" alt="bg1"/>
                            <img src="/img/background/Image2.png" className="bgImage" alt="bg2"/>
                            <img src="/img/background/Image3.png" className="bgImage" alt="bg3"/>
                        </div>}
                </Motion>
            </div>
            <div className="contents">
                <div className="title">
                    INTERACTIVE CONCERT EXPERIENCE
                </div>
                <div className="description">
                    Experience your favourite artists like never before and from the comfort of your own home.
                </div>
                <GradientCTABtn text={"TRY IT NOW"}/>
                <div className="btn-group" >
                    <input type="radio" value={0} name="value" checked={currentImage === 0}
                        onChange={ () => { 
                            setCarouselAutoScroll(false);
                            setCurrentImage(0) } }/>
                    <input type="radio" value={1} name="value" checked={currentImage === 1}
                        onChange={ () => {
                            setCarouselAutoScroll(false);
                            setCurrentImage(1) } }/>
                    <input type="radio" value={2} name="value" checked={currentImage === 2}
                        onChange={ () => {
                            setCarouselAutoScroll(false);
                            setCurrentImage(2) } }/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;