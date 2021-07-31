import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';

function GradientCTABtn(props){

    const [hover, setHover] = useState(false);

    //records mouse moves and save it to state. will be used to make hover gradient effect
    const [MousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    function handleMouseMove(event) {
        setMousePosition({x: event.pageX, y: event.pageY});
    };

    //styles separated from css to use react variables
    const btnStyle = {
        width: '284px',
        height: '80px',
        background: hover ? 'transparent' : 'linear-gradient(to right, #1FE1E9, #4405f7, #D34848, #FFB33F)', 
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        outline: 'none',
        borderRadius: '100px',
        clipPath: 'inset(0 0 0 0 round 100px)'              //this clips the hover gradient effect that leaks outside the button
    }

    // the div element inside Motion controls circular gradient effect on hover
    // it starts from height&width 0px, then increases its size to 500
    // x variable controls the animation behavior smoothly with 'spring' method imported from react-motion library

    return (
        <Link to="/pricing">
            <button onMouseMove={(event => {handleMouseMove(event)})}
                    onMouseEnter={()=>{setHover(true);}}
                    onMouseLeave={()=>{setHover(false);}}
                className="ctaBtn"
                style={btnStyle}
            >
                <Motion style={{x: spring(hover ? 500 : 0)}}>
                    {({x}) => 
                        <div style={{
                            position: 'absolute',
                            zIndex: '-1',
                            transform: 'translate(-50%, -50%)',
                            left: MousePosition.x,
                            top: MousePosition.y,
                            width: `${x}px`,
                            height: `${x}px`,
                            background: 'radial-gradient(circle closest-side, #1FE1E9, #4405f7, #D34848, transparent)'
                        }}></div>
                    }
                </Motion>
                <div className="btnText">{props.text}</div>
            </button>
        </Link>
    )
}

export default GradientCTABtn;