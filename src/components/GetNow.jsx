import React from 'react';
import GradientCTABtn from './GradientCTABtn';

function GetNow(props){
    return (
        <div className="section-GetNow">
            <div className="contents">
                <div className="texts">
                    <div className="title">
                        GET EXP|CON NOW
                    </div>
                    <div className="description">
                        Purchase and download the app.
                    </div>
                </div>
                <GradientCTABtn text={"TRY IT NOW"}/>
            </div>
        </div>
    )
}

export default GetNow;