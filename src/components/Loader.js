import React, { Component } from 'react';
import { FadeLoader } from "react-spinners";

class Loader extends Component {
    render() {
        return (
            <FadeLoader
                sizeUnit={"px"}
                size={60}
                color={'#000000'}
                loading={this.props.isFetching}
            />
        )
    }
}

export default Loader;
