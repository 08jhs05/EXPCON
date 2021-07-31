import React from 'react';
import Footer from './Footer';
import Perks from './Perks';
import { MusicNote } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Pricing(props){
    //this props will be rendered with map function below.
    const columnProps = [{title:'BASIC', term:'MONTHLY', price:'$9', color: '#D24848'
                                , words: ["Very good", "Amazing", "Perfect job", "Love this", "It’s so good", "Features"]},
                            {title:'ADVANCED', term:'YEARLY', price:'$99', color: '#FFB33F'
                                , words: ["Very very good", "Even Amazing", "Perfect job", "Love this more", "It’s so so good", "More Features"]},
                            {title:'PRO', term:'YEARLY', price:'$120', color: '#1FE1E9'
                                , words: ["Very very good", "Even more", "Perfect job", "Love this more", "It’s so so good", "More Features"]}];

    return (
        <div>
            <div className="section-pricing">
                <div className="contents">
                    <div className="title">
                        PRICING
                    </div>
                    <div className="title-description">
                        Test out our app today! Choose from three subscription Based payment models.
                    </div>
                    <div className="pricing-columns">
                        {columnProps.map(elem => {
                            return(
                                <div className="column" key={elem.title}>
                                    <div className="column-title" style={{color: elem.color}}>
                                        {elem.title}
                                        <hr style={{borderColor: elem.color}}/>
                                        {elem.term}
                                    </div>
                                    <div className="column-price" style={{color: elem.color}}>
                                        {elem.price}
                                    </div>
                                    <div className="column-description">
                                        {elem.words.map(innerElement => {
                                            return(
                                                <div key={innerElement}><MusicNote />{innerElement}</div>
                                            );
                                        })
                                        }
                                    </div>
                                    <Link to={"payment"}>
                                        <button style={{backgroundColor: elem.color}}>SELECT</button>
                                    </Link>
                                </div>);
                        })}
                    </div>
                </div>
            </div>
            <Perks/>
            <Footer/>
        </div>
    )
}

export default Pricing;