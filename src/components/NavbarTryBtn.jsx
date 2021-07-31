import React, { useState, useEffect } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';

function NavbarTryBtn(props){

    //button will have color dependeing on current section ex) yellow, hero, red
    const[btnStyleColors, setbtnStyleColors] = useState({textColor: '#D1346E', bgColor: 'white'});

    //records mouse posiion and save it to state.
    //unlike GradientCTABtn component, this button will be always fixed on the navbar,
    //it should read screenX and Y, not pageXY
    const [MousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    function handleMouseMove(event) {
        setMousePosition({x: event.screenX, y: event.screenY});
    };

    const [hover, setHover] = useState(false);

    //styles separated from css to use react variables
    const btnStyle = {
        width: '248px',
        height: '62px',
        background: hover ? 'transparent' : btnStyleColors.bgColor,
        border: 'none',
        color: btnStyleColors.textColor,
        cursor: 'pointer',
        outline: 'none',
        borderRadius: '100px',
        clipPath: 'inset(0 0 0 0 round 100px)'          //this clips the hover gradient effect that leaks outside the button
    }

    useEffect(() => {
        //changes button background, text & gradient effect color depending on current section
        switch (props.section) {
            case 'Red':
                setbtnStyleColors({textColor: '#D1346E', bgColor: 'white',
                gradient: 'radial-gradient(circle closest-side, #5E33D1, #1FE1E9, transparent)'})
                break;
            case 'Yellow':
                setbtnStyleColors({textColor: '#FFB33F', bgColor: 'white',
                gradient: 'radial-gradient(circle closest-side, #D34848, #5E33D1, transparent)'})
                break;
            case 'Perks':
                setbtnStyleColors({textColor: 'white', bgColor: 'linear-gradient(to right, #1FE1E9, #4405f7, #D34848, #FFB33F)',
                gradient: 'radial-gradient(circle closest-side, #1FE1E9, #4405f7, #D34848, transparent)'})
                break;
            case 'Reviews':
                setbtnStyleColors({textColor: '#1FE1E9', bgColor: 'white',
                gradient: 'radial-gradient(circle closest-side, #D34848, #5E33D1, transparent)'})
                break;
            default:
                break;
        }
    }, [props.section]);

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
                <Motion style={{x: spring(hover ? 400 : 0)}}>
                    {({x}) => 
                        <div style={{
                            position: 'absolute',
                            zIndex: '-1',
                            transform: 'translate(-60%, -85%)',
                            left: MousePosition.x,
                            top: MousePosition.y,
                            width: `${x}px`,
                            height: `${x}px`,
                            background: btnStyleColors.gradient
                        }}></div>
                    }
                </Motion>
                <div className="btnText-small">TRY IT NOW</div>
            </button>
        </Link>
    )
}

export default NavbarTryBtn;