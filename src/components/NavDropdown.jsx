import React from 'react';
import { useState } from 'react';
import { List } from 'react-bootstrap-icons';
import { Motion, spring } from 'react-motion';
import { useLocation } from 'react-router-dom';
import NavDropdownItemBtn from './NavDropDownItemBtn';


const COLORS = {RED: "#D34848", SKY: "#1FE1E9", YELLOW: "#FFB33F"}; //constant color variables

function NavDropdown(props){

    const location = useLocation(); //gets current route

    React.useEffect(() => {     //when user navigates to another page, close the hamburger menu
        setExpend(false);
      }, [location])

    const [isMenuExpanded, setExpend] = useState(false);

    const onClickDropdown = () => {
        setExpend(!isMenuExpanded);
    }
    //texts will have black color at payment page. when the hamburger button is clicked, the color will change again to white. (at payment page)

    let bgColor = '';
    let keyColor = '';
    let defaultBtnColor = 'white';

    // this part selects the text & background colors of the hamburger menu depending on current page or section.

    switch (window.location.pathname) {
        case '/pricing':
            bgColor = COLORS.SKY;
            keyColor = isMenuExpanded ? 'black' : 'white';
            break;
        case '/payment':
            bgColor = 'black';
            keyColor = isMenuExpanded ? COLORS.RED : 'black';
            defaultBtnColor = isMenuExpanded ? 'white' : 'black';
            break;
        default:
            switch (props.section) {
                case 'Hero':
                    bgColor = COLORS.SKY;
                    keyColor = isMenuExpanded ? 'black' : 'white';
                    break;
                case 'Red':
                    bgColor = 'black';
                    keyColor = isMenuExpanded ? COLORS.RED : 'white';
                    break;
                case 'Yellow':
                    bgColor = 'black';
                    keyColor = isMenuExpanded ? COLORS.YELLOW  :'white';
                    break;
                case 'Perks':
                    bgColor = COLORS.SKY;
                    keyColor = isMenuExpanded ? 'black' : 'white';
                    break;
                case 'Reviews':
                    bgColor = 'black';
                    keyColor = isMenuExpanded ? COLORS.SKY : 'white';
                    break;
                case 'GetNow':
                    bgColor = COLORS.SKY;
                    keyColor = isMenuExpanded ? 'black' : 'white';
                    break;
                default:
                    bgColor = COLORS.SKY;
                    keyColor = isMenuExpanded ? 'black' : 'white';
                    break;
            }
            break;
    }

    // Motion is an element imported from react-motion to handle animation. x at line 75 below is the variable that controls the animation.
    // x value changes as the state changes, and then changes width&height of animationcircle dynamically

    return (
        <div className="navDropdown">
            <button className="navTitle" onClick={() => onClickDropdown()}  style={{color: keyColor}}>
                <List/><div className="navTitle-text">EXP|CON</div>
            </button>
            <Motion style={{x: spring(isMenuExpanded ? 600 : 0)}}>
                {({x}) => 
                    isMenuExpanded && <div className="navDropdownItemList">
                        <div className="animationCircle"  style={{
                            position: 'absolute',
                            top: -120,
                            left: -100,
                            zIndex: -1,
                            borderRadius: '50%',
                            width: `${x}px`,
                            height: `${x}px`,
                            color: keyColor,
                            backgroundColor: bgColor
                        }} />
                        <NavDropdownItemBtn link="/" text="WHAT IS IT" defaultColor={defaultBtnColor} keyColor={keyColor} />
                        <NavDropdownItemBtn link="/pricing" text="PERKS" defaultColor={defaultBtnColor} keyColor={keyColor} />
                        <NavDropdownItemBtn link="/pricing" text="PRICING" defaultColor={defaultBtnColor} keyColor={keyColor} />
                </div>}
            </Motion>
        </div>
    )
}

export default NavDropdown;