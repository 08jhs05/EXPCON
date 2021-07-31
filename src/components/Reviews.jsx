import React from 'react';

function Reviews(props){

    const artistNames = ['ARTIST', 'PRODUCER', 'MUSIC FAN']; // will be used for map function below for repeating elements

    return (
        <div className="section-reviews">
            <div className="contents">
                <div>
                    <img src={'/img/speakers2.png'} />
                </div>
                <div className="reviews-container">
                    <div className="title">
                        REVIEWS
                    </div>
                    <div className="reviews-columns">
                        {artistNames.map(elem => {
                            return (<div className="column">
                                <div className="stars">
                                    ★★★★★
                                </div>
                                <div className="artist">
                                    {elem}
                                </div>
                                <p className="comment">
                                    “Love it, it’s the Best. I can’t live without it!”
                                </p>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;