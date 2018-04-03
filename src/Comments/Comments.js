import React from 'react';
import {Grid,Row, Col} from 'react-bootstrap';
import './Comments.css';

const comments = (props) => {

    return (
            <div className="uperDiv">
            <Grid className="notesDiv">
                <Col xs={12} md={8} className="softEdge">
                    <p>{props.text}</p>
                </Col>
            </Grid>
            </div>
  
    )
};

export default comments;