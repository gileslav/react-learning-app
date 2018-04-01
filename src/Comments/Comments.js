import React from 'react';
import {Grid,Row, Col} from 'react-bootstrap';
import './Comments.css';

const comments = (props) => {

    return (
            <div className="formDiv">
                <Grid>
                <Col xs={6} md={4}>
                    
                </Col>
                <Col xs={6} md={4}>
                    <p>{props.title}</p>
                    <p>{props.text}</p>
                </Col>
                <Col xsHidden md={4}>
                    
                </Col>
            </Grid>
            </div>
    // <div className="Comments">
    //     <p>{props.title}</p>
    //     <p>{props.text}</p>
    // </div>
    )
};

export default comments;