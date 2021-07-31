import React, { useState } from 'react';

function Yellow(props){

    const [MousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    function handleMouseMove(event) {
        setMousePosition({x: event.pageX, y: event.pageY});
    };

    return (
        <div className="section-YELLOW" onMouseMove={(event => {handleMouseMove(event)})}>
            <div style={{width: '100%', height:'100%', position:'absolute', zIndex: 0}}>
                <svg width="0" height="0">
                    <defs>
                    <clipPath id="svgPath">
                        <circle stroke="#000000" cx="580" cy="380" r="200"/>
                        <circle stroke="#000000" cx="400" cy="720" r="250"/>
                        <circle stroke="#000000" cx="1800" cy="1000" r="280"/>
                        <circle stroke="#000000" cx={MousePosition.x} cy={MousePosition.y-2160} r="180"/>
                    </clipPath >
                    </defs>
                </svg>
                <img src={"/img/background/Image4.png"} alt="stage"
                    style={{
                    clipPath:"url(#svgPath)",
                    width: '100%', height:1080,
                    objectFit: 'cover'
                    }}/>
            </div>
            <div className="contents" style={{position:'absolute', zIndex: 1, right:'5%'}}>
                <div className="title">
                    FRONT ROW SEATS
                </div>
                <div className="decription">
                    Experience concerts up close and personal.
                </div>
                <button className="demoBtn">SEE DEMO</button>
            </div>
        </div>
    )
}

export default Yellow;