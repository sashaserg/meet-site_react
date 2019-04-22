import React, { Component } from 'react';
import './Header.sass';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {

    render() {
        return (
            <div className={'Header-container'}>
                <div className="header">
                    <div className="logo"/>
                    <nav className="navigation">
                        <div className="navItem">
                            <Link to="/">
                                <FontAwesomeIcon icon="home"/><span className="text"> Home</span>
                            </Link></div>
                        <div className="navItem"><Link to="/login">Login</Link></div>
                        <div className="navItem"><Link to="/register">Sign up</Link></div>
                        <div className="navItem">
                            <Link to="/users">
                                <span className="text">Find people </span><FontAwesomeIcon icon="search"/>
                            </Link>
                        </div>
                    </nav>
                    <div className="userPanel">
                        <div className="userPic" style={{ backgroundImage: 'url(http://s3.amazonaws.com/37assets/svn/765-default-avatar.png)' }}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;
