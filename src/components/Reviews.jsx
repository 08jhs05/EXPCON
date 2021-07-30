import React from 'react';

function Reviews(props){
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
                        <div className="column">
                            <div className="stars">
                                ★★★★★
                            </div>
                            <div className="artist">
                                ARTIST
                            </div>
                            <p className="comment">
                                “Love it, it’s the Best.I can’t live without it!”
                            </p>
                        </div>
                        <div className="column">
                            <div className="stars">
                                ★★★★★
                            </div>
                            <div className="artist">
                                PRODUCER
                            </div>
                            <p className="comment">
                                “Love it, it’s the Best.I can’t live without it!”
                            </p>
                        </div>
                        <div className="column">
                            <div className="stars">
                                ★★★★★
                            </div>
                            <div className="artist">
                                MUSIC FAN
                            </div>
                            <p className="comment">
                                “Love it, it’s the Best.I can’t live without it!”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;