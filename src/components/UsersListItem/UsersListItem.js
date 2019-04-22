import React, { Component } from 'react';
import './UsersListItem.sass';
import Moment from 'react-moment';
//import { withRouter } from "react-router";

class UsersListItem extends Component {

    getProfileUrl () {
        if (this.props.user.profilePicture) {
            return { 'backgroundImage': `url('${this.props.user.profilePicture}')` }
        } else {
            return { 'backgroundImage': `url('http://s3.amazonaws.com/37assets/svn/765-default-avatar.png')` }
        }
    }

    navigateToUserProfile (userId) {
        this.props.history.push('/users/' + userId);
    }

    render() {
        return (
            <div className="UsersListItem-container" onClick={ () => this.navigateToUserProfile(this.props.user.id)}>
                <div className="userItem">
                    <div className="profilePicture" style={ this.getProfileUrl() }>
                        <div className="indicator"/>
                    </div>
                    <div className="profileInfo">
                        <div className="title">
                            <span className="fullName">{this.props.user.firstName + ' ' + this.props.user.lastName}</span>
                        </div>
                        <p className="message">
                            {this.props.user.gender},
                            {<Moment fromNow ago date={this.props.user.birthDate} />},
                            {this.props.user.purpose}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

//const UserListItemWithRouter = withRouter(UsersListItem);
export default UsersListItem;
