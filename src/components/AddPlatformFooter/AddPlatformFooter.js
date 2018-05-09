import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateToggle} from './../../ducks/reducer';
import { Well, Grid, Row, Col } from 'react-bootstrap';
import { FaSpotify, FaVine, FaYelp } from 'react-icons/lib/fa';
import NoResult from '../Results/NoResult/NoResult';
import AddPlatformButton from './AddPlatformButton/AddPlatformButton';
import './AddPlatformFooter.css';

class AddPlatformFooter extends Component {
    constructor() {
        super();

        this.updateIcon = this.updateIcon.bind(this);
    }

    updateIcon() {
        let { toggle } = this.props;
        toggle ? this.props.updateToggle({toggle: false}) : this.props.updateToggle({toggle: true});
    }
    render() {
        return (
            <Well className="fixed-bottom" bsSize="small">
                <Grid>
                    <Row>
                        <span onClick={(e)=>this.updateIcon()}>
                            <Col xs={6}>
                                <AddPlatformButton/>
                            </Col>
                        </span>
                        <Col xs={2}>
                            <FaYelp size={32}/>      
                        </Col>
                        <Col xs={2}>
                            <FaVine size={32}/>      
                        </Col>
                        <Col xs={2}>
                            <FaSpotify size={32}/>      
                        </Col>
                    </Row>
                </Grid>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        toggle: state.toggle
    }
}

export default connect(mapStateToProps, {updateToggle})(AddPlatformFooter);