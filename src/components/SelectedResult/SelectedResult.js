import React, { Component } from 'react';
import {  Well, Grid, Row, Col, Image } from 'react-bootstrap';
import  { connect } from 'react-redux'
import Icon from '../Icon/Icon';
import './SelectedResult.css';


class SelectedResult extends React.Component {
    render() {
        let { activePlatform, activeHandle, activeProfilePic } = this.props.activeList;
        let { fakeimg } = this.props;
        return (
            <Well 
                bsSize="small">
                <Grid>
                    <Row>
                        <Col className="nopadding" xs={2}>
                            <Image rounded
                                alt=""
                                src={fakeimg} />     
                        </Col>
                        <Col xs={8}>
                            <p className="presize">{`@` + activeHandle}</p>
                        </Col>
                        <Col className="nopadding" xs={2}>
                            <p className="presize">active</p>    
                        </Col>
                    </Row>
                </Grid>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeList: state.activeList,
        fakeimg: state.fakeimg
    }
}

export default connect(mapStateToProps)(SelectedResult);
