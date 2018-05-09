import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateHandle, getHandle, updateToggle} from './../../ducks/reducer';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import SearchIcon from 'react-icons/lib/md/search';
import Icon from '../Icon/Icon';
import NoResult from '../Results/NoResult/NoResult';
import './Search.css';

class Search extends Component {
    constructor() {
        super();
        
        this.updateIcon = this.updateIcon.bind(this);
    }

    updateIcon() {
        let { toggle } = this.props;
        toggle ? this.props.updateToggle({toggle: false}) : this.props.updateToggle({toggle: true});
    }

    render() {
        let { handle, platform, toggle } = this.props;
    return (
            <div>
                <form>
                    <FormGroup bsSize="large">
                        <InputGroup>
                            <InputGroup.Addon>
                                <span onClick={(e)=>this.updateIcon()}>
                                    <Icon value={platform}/>
                                </span>
                            </InputGroup.Addon>
                            <FormControl
                                type="text"
                                placeholder="handle"
                                value={handle}
                                onChange={(e)=>this.props.updateHandle(e.target.value)} 
                                onKeyDown={(e)=>e.keyCode===13?this.props.getHandle(handle):null}/>
                                    
                        </InputGroup>
                    </FormGroup>
                </form>
               { toggle ? <NoResult/> : null }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        handle: state.handle,
        platform: state.platform,
        toggle: state.toggle
    }
}

export default connect(mapStateToProps, {updateHandle, getHandle, updateToggle})(Search);