import React from 'react';
import PaymentForm from './PaymentForm';
import Footer from './Footer';
import GradientCTABtn from './GradientCTABtn';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function Payment(props){
    return (
        <div className="paymentPage">
            <div className="payment-section">
                <div className="contents">
                    <div className="title">PAYMENT</div>
                    <div className="selectPlan">
                        <div className="sectionName">
                            1. Select your plan
                        </div>
                            <ButtonGroup className="radioGroup">
                                <div className="radio" style={{color:'#D24848'}}><ToggleButton className="radioBtn" type="radio" checked={true}/> BASIC</div>
                                <div className="radio" style={{color:'#FFB33F'}}><ToggleButton className="radioBtn" type="radio"/> ADVANCED</div>
                                <div className="radio" style={{color:'#1FE1E9'}}><ToggleButton className="radioBtn" type="radio"/> PRO</div>
                            </ButtonGroup>
                    </div>
                    <div className="formsSection">
                        <div className="bilingInfo formColumn">
                            <div className="sectionName">
                                2. Billing Information
                            </div>
                            <PaymentForm label={"FULL NAME"}/>
                            <PaymentForm label={"BILLING ADDRESS"}/>
                            <div className="twoForms">
                                <PaymentForm label={"CITY"}/>
                                <div style={{padding: '20px'}}></div> {/*spacer element*/}
                                <PaymentForm label={"POSTAL CODE"}/>
                            </div>
                            <PaymentForm label={"COUNTRY"}/>
                        </div>
                        <div className="creditInfo formColumn">
                            <div className="sectionName">
                                3. Credit Card Information
                            </div>
                            <PaymentForm label={"CARDHOLDER'S NAME"}/>
                            <PaymentForm label={"CARD NUMBER"}/>
                            <div className="twoForms">
                                <PaymentForm label={"EXPIRY MONTH"}/>
                                <div style={{padding: '20px'}}></div> {/*spacer element*/}
                                <PaymentForm label={"EXPIRY YEAR"}/>
                            </div>
                            <PaymentForm label={"CVV"}/>
                        </div>
                    </div>
                    <div className="confirm">
                        <div  style={{paddingBottom:'30px'}}>By continuing, I acknowledge that I’ve read and agree to the <span className="blueText">Terms of Service</span> &amp; <span className="blueText">Privacy Policy.</span></div>
                        <GradientCTABtn text={"DOWNLOAD"}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Payment;