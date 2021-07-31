import React from 'react';
import { useEffect, useState } from 'react';

function Red(props){

    const [playMusic, setPlayMusic] = useState(false);

    useEffect(() => {
        const audio = document.getElementsByClassName("audio-player")[0];
        if(playMusic){
            audio.play();
        } else {
            audio.pause();
        }
    }, [playMusic])

    return (
        <div className="section-RED">
            <audio className="audio-player">
                <source src="/music.mp3"/>
            </audio>
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
                    <img src={'/img/speakers.png'}
                        onClick={() => {setPlayMusic(!playMusic)}}
                        className="speakers"
                        alt='spaekers'
                    />
                </div>
            </div>
        </div>
    )
}

export default Red;