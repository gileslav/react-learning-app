import React from 'react';
import {Form, FormGroup,Col,ControlLabel,FormControl,Checkbox,Button} from 'react-bootstrap';
import './AddingNewComment.css';

const addingNewComment = (props) => {

    return (
        <div className="formDiv">
        <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                    Email
            </Col>
                <Col sm={10}>
                    <FormControl type="text" placeholder="text" defaultValue={props.title}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Password
            </Col>
                <Col sm={10}>
                    <FormControl type="text" placeholder="text" defaultValue={props.text}/>
                </Col>
            </FormGroup>


            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button onClick={props.click}>Leave a comment</Button>
                </Col>
            </FormGroup>
        </Form>
        </div>

    )
};

export default addingNewComment;