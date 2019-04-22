import React, { Component } from 'react';
import './Button.sass';

class Button extends Component {

    render() {
        return (
            <a className={this.props.type} onClick={() => this.props.handler()}>{this.props.name}</a>
        );
    }
}

export default Button;
