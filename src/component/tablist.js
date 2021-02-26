import React, { Component } from 'react';
import Itab from './Itab';

class Tablist extends Component {
    render() {
        return (
            this.props.tabs.map((tab) =>
            <Itab out={tab} activetab = {this.props.activetab} ctab={this.props.ctab}/>
            )
        )
    }
}

export default Tablist; 