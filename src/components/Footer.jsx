import React from 'react';
import { EnvelopeFill } from 'react-bootstrap-icons';

function Footer(props){
    return (
        <div className="section-Footer">
            <div className="email">
                <EnvelopeFill style={{padding:"6px 26px 0 0"}}/>
                support@experienceconcerts.co
            </div>
            <div className="bottom">
                <div className="companyName">
                    EXP|CON
                </div>
                <div className="legal">
                    2019 © All Rights Reserved | Speer Technologies Incorporated
                </div>
            </div>
        </div>
    )
}

export default Footer;