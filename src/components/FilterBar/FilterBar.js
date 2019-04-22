import React, { Component } from 'react';
import './FilterBar.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const queryString = require('query-string');

class FilterBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            gender: '',
            minAge: null,
            maxAge: null,
            purpose: '',
            withPhoto: false
        };
    }

    handleFiltersChange(fieldName, fieldValue) {
        this.setState({
            [fieldName]: fieldValue
        })
    }
    onSearchClick() {
        const queryParams = '?' + queryString.stringify(this.state);

        // Getting new users data to store based on filer. And push query to URL.
        this.props.getAllUsers(queryParams);
        this.props.history.push({pathname: '/users', search: queryParams});
    }
    render() {
        return (
            <div className="FilterBar-container">
                <div className="filters">
                    <div className="filterColumn">
                        <input placeholder="first name" defaultValue={this.state.firstName}
                               onChange={(e) => this.handleFiltersChange('firstName',e.target.value)}/>
                            <div className="withPhotoContainer">
                                <input id="withPhoto" type="checkbox" defaultChecked={this.state.withPhoto}
                                       onChange={() => this.handleFiltersChange('withPhoto', !this.state.withPhoto)}/>
                                <label> With photo</label>
                            </div>
                            <select defaultValue={this.state.gender}
                                    onChange={(e) => this.handleFiltersChange('gender', e.target.value)}>
                                <option value="">gender</option>
                                <option value="man">man</option>
                                <option value="woman">woman</option>
                            </select>
                    </div>
                    <div className="separator"/>
                    <div className="filterColumn">
                        <input placeholder="min age" onChange={(e) => this.handleFiltersChange('minAge', e.target.value)}/>
                        <input placeholder="max age" onChange={(e) => this.handleFiltersChange('maxAge', e.target.value)}/>
                        <select defaultValue={this.state.purpose}
                                onChange={(e) => this.handleFiltersChange('purpose', e.target.value)}>
                            <option value="">purpose</option>
                            <option value="friendship">friendship</option>
                            <option value="relationship">relationship</option>
                            <option value="sex">sex</option>
                        </select>
                    </div>
                    <div className="filterAccept">
                        <button onClick={() => this.onSearchClick()}>Find <FontAwesomeIcon icon="search" /></button>
                </div>
            </div>
    </div>
        );
    }

}

export default FilterBar;
