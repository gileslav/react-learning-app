import React from 'react';
import {Grid,Row, Col} from 'react-bootstrap';
import './Comments.css';

const comments = (props) => {

    return (
            
            <Grid className="formDiv">
                <div className="softEdge">
                <Col xs={6} md={4}>
                    <p>{props.title}</p>
                </Col>
                
                <Col xs={12} md={8}>
                    <p>{props.text}</p>
                </Col>
                </div>
            </Grid>
            
  
    )
};

export default comments;