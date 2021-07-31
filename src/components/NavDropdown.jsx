import React from 'react';
import { useState } from 'react';
import { List } from 'react-bootstrap-icons';

function NavDropdown(props){
    const [isMenuExpanded, setExpend] = useState(false);

    const onClickDropdown = () => {
        setExpend(!isMenuExpanded);
    }
    //texts will have black color at payment page
    const paymentPageStyle = {
        color: window.location.pathname==="/payment" ? 'black' : 'white'
    }

    return (
        <div className="navDropdown">
            <button className="navTitle" onClick={() => onClickDropdown()}  style={paymentPageStyle}>
                <List/><div className="navTitle-text">EXP|CON</div>
            </button>
            {isMenuExpanded && <div className="navDropdownItemList">
                <button className="navDropdownItem" style={paymentPageStyle}>WHAT IS IT</button>
                <button className="navDropdownItem"  style={paymentPageStyle}>PERKS</button>
                <button className="navDropdownItem"  style={paymentPageStyle}>PRICING</button>
            </div>}
        </div>
    )
}

export default NavDropdown;