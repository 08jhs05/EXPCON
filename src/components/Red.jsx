import React from 'react';

function Red(props){
    return (
        <div className="section-RED">
            <div className="contents">
                <div className="contents-left">
                    <div className="title">
                        SUPERIOR SOUND
                    </div>
                    <div className="decription">
                        Experience live versions of your favourite songs.
                    </div>
                    <button className="demoBtn">SEE DEMO</button>
                </div>
                <div className="contents-right">
                    <img src={'/img/speakers.png'} className="speakers" alt='spaekers'/>
                </div>
            </div>
        </div>
    )
}

export default Red;