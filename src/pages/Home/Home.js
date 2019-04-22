import React, { Component } from 'react';
import './Home.sass';

class Home extends Component {

    onLoginClick() {
        this.props.history.push('/login');
    }
    onSignUpClick() {
        this.props.history.push('/register');
    }
    render() {
        return (
            <div className="Home-container">
                <div className="bigPic"/>
                <div className="bigTitle">FIND YOUR LOVE</div>
                <div className="contentContainer">
                    <div className="enterContainer"><a onClick={() => this.onLoginClick()}>Have account already?</a></div>
                    <div className="register"><a onClick={() => this.onSignUpClick()}>don't have? Sign up for free!</a></div>
                </div>
            </div>
        );
    }

}

export default Home;
