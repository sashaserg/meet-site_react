import React, { Component } from 'react';
import './TextInput.sass';

class TextInput extends Component {

    render() {
        return (
            <div className="TextInput-container">
                <label className="label">{this.props.fieldTitle}</label>
                <input id={this.props.fieldName}
                type={this.props.fieldType}
                placeholder={this.props.placeholder}
                value={this.props.fieldValue}
                onChange={(e) => this.props.fieldChange(this.props.fieldName, e.target.value)}/>
                {
                    this.props.errorMessage ?
                    <span className="error">{this.props.errorMessage}</span> : ''
                }
            </div>
        );
    }
}

export default TextInput;
