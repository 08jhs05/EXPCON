import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavDropdownItemBtn(props){
    const [hover, setHover] = useState(false); //changes the color dynamically when on hover

    return(
        <Link to={props.link}>
            <button className="navDropdownItem"  
                onMouseEnter={()=>{
                    setHover(true);
                }}
                onMouseLeave={()=>{
                    setHover(false);
                }}
                style={{color: hover ? props.keyColor : props.defaultColor}}>
                  {props.text}
            </button>
        </Link>
    );
}

export default NavDropdownItemBtn;