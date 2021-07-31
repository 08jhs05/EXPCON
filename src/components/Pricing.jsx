import React from 'react';
import Footer from './Footer';
import Perks from './Perks';
import { MusicNote } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Pricing(props){
    //this props will be rendered with map function below.
    const columnProps = [{title:'BASIC', term:'MONTHLY', price:'$9', color: {color: '#D24848'}, borderColor: {borderColor: '#D24848'}, backgroundColor: {backgroundColor: '#D24848'}
                                , words: ["Very good", "Amazing", "Perfect job", "Love this", "It’s so good", "Features"]},
                            {title:'ADVANCED', term:'YEARLY', price:'$99', color: {color: '#FFB33F'}, borderColor: {borderColor: '#FFB33F'}, backgroundColor: {backgroundColor: '#FFB33F'}
                                , words: ["Very very good", "Even Amazing", "Perfect job", "Love this more", "It’s so so good", "More Features"]},
                            {title:'PRO', term:'YEARLY', price:'$120', color: {color: '#1FE1E9'}, borderColor: {borderColor: '#1FE1E9'}, backgroundColor: {backgroundColor: '#1FE1E9'}
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
                                <div className="column">
                                    <div className="column-title" style={elem.color}>
                                        {elem.title}
                                        <hr style={elem.borderColor}/>
                                        {elem.term}
                                    </div>
                                    <div className="column-price" style={elem.color}>
                                        {elem.price}
                                    </div>
                                    <p className="column-description">
                                        {elem.words.map(innerElement => {
                                            return(
                                                <div><MusicNote />{innerElement}</div>
                                            );
                                        })
                                        }
                                    </p>
                                    <Link to={"payment"}>
                                        <button style={elem.backgroundColor}>SELECT</button>
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