import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHandle } from './../../ducks/reducer';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import SearchIcon from 'react-icons/lib/md/search';
import './Search.css';

class Search extends Component {
    constructor() {
        super();

        this.state={
            handle: ''
        }
        
        this.updateHandle = this.updateHandle.bind(this);
        this.queryHandlesTable = this.queryHandlesTable.bind(this);
    }

    updateHandle( handle ) {
        this.setState({ handle });
        console.log(handle);
    }
    
    queryHandlesTable( key ) {
        if (key === 'Enter') {
            console.log(this.state.handle);
            this.props.getHandle(`@` + this.state.handle);
        }
    }

    render() {
        const { handle } = this.state;

        return (
            <form>
                <FormGroup bsSize="large">
                    <InputGroup>
                        <InputGroup.Addon>@</InputGroup.Addon>
                        <FormControl
                             type="text"
                             placeholder="handle" 
                             value={ handle }
                             onChange={(e)=>this.updateHandle(e.target.value)} 
                             onKeyUp={(e)=>this.queryHandlesTable(e.key)} />
                    </InputGroup>
                </FormGroup>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        handle: state.handle
    }
}

export default connect(mapStateToProps, {getHandle})(Search);