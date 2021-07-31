import React from 'react';
import { Form } from 'react-bootstrap';

function PaymentForm(props){
    return (
        <Form style={{display:'flex', flexDirection:'column', paddingBottom:'30px', width: '100%'}}>
            <Form.Label className="formLabel">{props.label}</Form.Label>
            <Form.Control className="form" style={{width: '100%'}}/>
        </Form>
    )
}

export default PaymentForm;