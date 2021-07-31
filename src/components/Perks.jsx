import React from 'react';

function Perks(props){

    //applies different styling at pricing page

    const columnProps = window.location.pathname !== '/pricing' ?
                    [{color:"#D34848", title:"Subscription Payment Model"},
                    {color:"#1FE1E9", title:"No Fee Cancelation Policy"},
                    {color:"#FFB33F", title:"Subscription Payment Model"}]
                    : [{color:"white", title:"Subscription Payment Model"},
                        {color:"white", title:"No Fee Cancelation Policy"},
                        {color:"white", title:"Subscription Payment Model"}];

    const pricingPageStyle = window.location.pathname !== '/pricing' ? {} : {backgroundColor:"#D34848"}

    return (
        <div className="section-perks" style={pricingPageStyle}>
            <div className="contents">
                <div className="title">
                    PERKS
                </div>
                <div className="perks-columns">
                    {columnProps.map(elem => {
                        return(
                            <div className="column">
                                <div className="column-title" style={{color: elem.color}}>
                                    <hr style={{borderColor: elem.color}}/>
                                    {elem.title}
                                </div>
                                <p className="column-description">
                                    No commitment, cancel anytime. Never worry about forgetting a payment again!
                                </p>
                            </div>);
                    })}
                </div>
            </div>
        </div>
    )
}

export default Perks;