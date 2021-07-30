import React from 'react';

function Perks(props){
    return (
        <div className="section-perks">
            <div className="contents">
                <div className="title">
                    PERKS
                </div>
                <div className="perks-columns">
                    <div className="column">
                        <div className="column-title" style={{color:"#D34848"}}>
                            <hr style={{color:"#D34848"}}/>
                            Subscription Payment Model
                        </div>
                        <p className="column-description">
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </p>
                    </div>
                    <div className="column">
                        <div className="column-title" style={{color:"#1FE1E9"}}>
                            <hr style={{color:"#1FE1E9"}}/>
                            No Fee Cancelation Policy
                        </div>
                        <p className="column-description">
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </p>
                    </div>
                    <div className="column">
                        <div className="column-title" style={{color:"#FFB33F"}}>
                            <hr style={{color:"#FFB33F"}}/>
                            Subscription Payment Model
                        </div>
                        <p className="column-description">
                            No commitment, cancel anytime. Never worry about forgetting a payment again!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perks;