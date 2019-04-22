import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect'
import './UserProfile.sass';
import { FadeLoader } from "react-spinners";
import { getUserById, getPhotosByUserId } from "../../actions/actionCreator";
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class UserProfile extends Component {

    handlePhotoClick(photoId) {
        this.props.history.push('/photo/' + photoId);
    }

    renderLoader() {
        return <FadeLoader
            sizeUnit={"px"}
            size={60}
            color={'#000000'}
            loading={this.props.isFetching}
        />
    }

    renderPhotos() {
        const photos = this.props.photos.map((p) => {
            return (
                <div className={'photo'}
                     key={p.id}>
                    <img src={p.url} onClick={() => {this.handlePhotoClick(p.id)}} alt={'picture'}/>
                </div>
            )
        });
        return (photos);
    }

    render() {
        console.log(this.props);
        return (
            <div className={"UserProfile-container"}>
                {
                    this.props.displayedUser ? this.renderUser() : this.renderLoader()
                }
            </div>
        );
    }
    componentDidMount() {
        const userId = this.props.match.params.id;
       // console.log(this.props);
        this.props.getUserById(userId);
        this.props.getPhotosByUserId(userId);
    }

    renderUser() {
        return (
            <div className="contentContainer">
                <div className="linkDiv">
                    <a className="back">Back</a>
                </div>
                <div className="header">
                    <div className="fullName">{this.props.displayedUser.firstName + ' ' + this.props.displayedUser.lastName}</div>
                    <div className="generalInfo">
                        <span className="age">{<Moment fromNow ago date={this.props.displayedUser.birthDate} />}, </span>
                        <span className="purpose">want to have a {this.props.displayedUser.purpose}</span>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="profilePictureWrap">
                        <div className="profilePicture" style={{ backgroundImage: 'url(' + this.props.displayedUser.profilePicture + ')' }}/>
                    </div>
                    <div className="userInformation">
                        <span className="title">Personal information</span>
                        <div className="infoTable">
                            <div className="row">
                                <div className="column">Civil status: married</div>
                                <div className="column">Education: High</div>
                            </div>
                            <div className="row">
                                <div className="column">Religion: Christian</div>
                                <div className="column">Tattoos: No</div>
                            </div>
                            <div className="row">
                                <div className="column">Height: 180</div>
                                <div className="column">Weight: 57kg</div>
                            </div>
                            <div className="row">
                                <div className="column">Contexture: Contexture</div>
                                <div className="column">Eyes: Blue</div>
                            </div>
                            <div className="row">
                                <div className="column">Children: No</div>
                                <div className="column">Work: Programmer</div>
                            </div>
                            <div className="row">
                                <div className="column">Sign: Sign</div>
                                <div className="column">Hair: White</div>
                            </div>
                            <div className="row">
                                <div className="column">Smoker: No</div>
                                <div className="column">Piercings: Piercings</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="actionButtons">
                    <button className="action messageButton">
                        <FontAwesomeIcon icon="envelope"/> Send a message
                    </button>
                    <button className="action">
                        <FontAwesomeIcon icon="gift"/> Send a present
                    </button>
                    <button className="action">Or</button>
                </div>
                <div className="photoGallery">
                    <div className="galleryTitleContainer">
                        <span className="title">Gallery</span>
                    </div>
                    <div className="photoList">
                        { this.renderPhotos() }
                    </div>
                </div>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.usersReducer.displayedUser.isFetching,
        displayedUser: state.usersReducer.displayedUser,
        photos: state.photoReducer.photos
    }
};

const mapDispatchToProps = (dispatch) => ({
    getUserById: (uid) => dispatch(getUserById(uid)),
    getPhotosByUserId: (uid) => dispatch(getPhotosByUserId(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
