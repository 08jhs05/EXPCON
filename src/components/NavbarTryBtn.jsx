import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavbarTryBtn(props){

    const[btnStyleColors, setbtnStyleColors] = useState({textColor: '#D1346E', bgColor: 'white'});

    //styles separated from css to use react variables
    const btnStyle = {
        width: '248px',
        height: '62px',
        background: btnStyleColors.bgColor,
        border: 'none',
        color: btnStyleColors.textColor,
        fontSize: '1.2em',
        cursor: 'pointer',
        outline: 'none',
        overflow: 'hidden',
        borderRadius: '100px',
        clipPath: 'inset(100% round 100px)'
    }

    const btnHoverStyles = {

    };

    useEffect(() => {
        //changes button background, text color depending on current section
        switch (props.section) {
            case 'Red':
                setbtnStyleColors({textColor: '#D1346E', bgColor: 'white'})
                break;
            case 'Yellow':
                setbtnStyleColors({textColor: '#FFB33F', bgColor: 'white'})
                break;
            case 'Perks':
                setbtnStyleColors({textColor: 'white', bgColor: 'linear-gradient(to right, #1FE1E9, #4405f7, #D34848, #FFB33F)'})
                break;
            case 'Reviews':
                setbtnStyleColors({textColor: '#1FE1E9', bgColor: 'white'})
                break;
        }
    }, [props.section]);

    return (
        <Link to="/pricing">
            <button
                className="ctaBtn"
                style={btnStyle}
            >
                <div style={btnHoverStyles}></div>
                <div className="btnText-small">TRY IT NOW</div>
            </button>
        </Link>
    )
}

export default NavbarTryBtn;