import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GradientCTABtn(props){
    
    const [MousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [onHover, setOnHover] = useState(false)

    //records mouse moves and save it to state.
    function handleMouseMove(event) {
        setOnHover(true);
        setMousePosition({x: event.pageX, y: event.pageY});
    };

    //styles separated from css to use react variables
    const btnStyle = {
        width: '284px',
        height: '80px',
        background: 'linear-gradient(to right, #1FE1E9, #4405f7, #D34848, #FFB33F)', //onHover ? '#FFB33F' : 
        border: 'none',
        color: 'white',
        fontSize: '1.2em',
        cursor: 'pointer',
        outline: 'none',
        overflow: 'hidden',
        borderRadius: '100px',
        // clipPath: 'inset(100%)'
    }

    // const btnHoverStyles = {
    //     position: 'absolute',
    //     zIndex: '-1',
    //     left: MousePosition.x-250,
    //     top: MousePosition.y-250,
    //     width: '500px',
    //     height: '500px',
    //     background: 'radial-gradient(circle closest-side, #1FE1E9, #4405f7, #D34848, transparent)',
    //     transition: 'width .2s ease, height .2s ease'
    // };

    return (
        <Link to={"pricing"}>
            <button onMouseMove={(event => {handleMouseMove(event)})}
                className="ctaBtn"
                style={btnStyle}
            >
                {/* <div style={btnHoverStyles}></div> */}
                <div className="btnText">{props.text}</div>
            </button>
        </Link>
    )
}

export default GradientCTABtn;