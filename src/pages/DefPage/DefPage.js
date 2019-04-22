import React, { Component } from 'react';
import './DefPage.sass';
import { Route } from "react-router-dom";
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
class DefPage extends Component {

    render() {
        const { component: ComponentToDisplay} = this.props;
        return (
                <Route
                    render = { props => (
                        <div className={'DefPage-container'}>
                            <LeftSideBar/>
                            <ComponentToDisplay {...props}/>
                        </div>
                    )}
                />
        );
    }

}

export default DefPage;
