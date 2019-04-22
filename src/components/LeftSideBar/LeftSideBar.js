import React, { Component } from 'react';
import './LeftSideBar.sass';
class LeftSideBar extends Component {

    render() {
        return (
            <div className="sideBar">
                <ul className="sideBarList">
                    <li className="sideBarItem popularity"><a>Popularity</a></li>
                    <li className="sideBarItem"><a>Guests</a></li>
                    <li className="sideBarItem"><a>Want to meet</a></li>
                    <li className="sideBarItem"><a>You want to meet</a></li>
                    <li className="sideBarItem"><a>Mutual sympathy</a></li>
                    <li className="sideBarItem"><a>Ratings</a></li>
                    <li className="sideBarItem"><a>Comments</a></li>
                    <li className="sideBarItem"><a>Favorites</a></li>
                </ul>
                <div className="searchStatistic">
                    <div className="info">You are on 120 place in search</div>
                    <div><a href="#">Lift yourself</a></div>
                </div>
            </div>
        );
    }

}

export default LeftSideBar;
