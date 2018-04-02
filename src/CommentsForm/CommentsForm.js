import React from 'react';
import {Form, FormGroup, SplitButton, MenuItem, ControlLabel,Button, Grid, Glyphicon, Row, Col, FormControl} from 'react-bootstrap';
import './CommentsForm.css';

const commentsForm = (props) => {
   
  return (

    
      <Grid className="blackBorder gridCentralize">
        <Row className="show-grid upperPart">
          
          <Col>
           <FormGroup className="inputZaObjavu">
           <FormControl type="text"/>
           </FormGroup>
          </Col>

        </Row>
        <div className="divWithSmallerWidth"></div>
        <Row className="show-grid lowerPart">
          <Col xs={6} md={4}>
              <Glyphicon glyph="glyphicon glyphicon-camera iconics" />
              <Glyphicon glyph="glyphicon glyphicon-envelope iconics" />
              <Glyphicon glyph="glyphicon glyphicon-map-marker iconics" />
              <Glyphicon glyph="glyphicon glyphicon-user iconics" />
              
          </Col>
          
          <Col xs={12} md={8}>
             <Form inline>
             
                <FormGroup controlId="formInlineName">
                  <Button bsStyle="info" onClick="{props.click}">Povecaj vidljivost objave</Button>
                </FormGroup>{' '}
                <SplitButton
                  id="pimariusDugme" 
                  bsStyle="primary"
                  title="Objavi">
                  <MenuItem eventKey="1">Proba</MenuItem>
                  <MenuItem eventKey="2">Test</MenuItem>
                </SplitButton>
                
              </Form>
          </Col>
           
        </Row>

      </Grid>   
      )
    }

export default commentsForm;