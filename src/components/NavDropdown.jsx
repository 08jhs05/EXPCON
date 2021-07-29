import React from 'react';
import { useState } from 'react';
import { List } from 'react-bootstrap-icons';

function NavDropdown(props){
    const [isMenuExpanded, setExpend] = useState(false);

    const onClickDropdown = () => {
        setExpend(!isMenuExpanded);
    }

    return (
        <div className="navDropdown">
            <button className="navTitle" onClick={() => onClickDropdown()}>
                <List/><div className="navTitle-text">EXP|CON</div>
            </button>
            {isMenuExpanded && <div className="navDropdownItemList">
                <button className="navDropdownItem">WHAT IS IT</button>
                <button className="navDropdownItem">PERKS</button>
                <button className="navDropdownItem">PRICING</button>
            </div>}
        </div>
    )
}

export default NavDropdown;