import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect'
import './Photo.sass';
import { getPhotoById, getCommentsByPhotoId } from "../../actions/actionCreator";

class Photo extends Component {

    renderPhoto() {
        return (
            <div className={'Photo-photo'}>
                {
                    JSON.stringify(this.props.photo)
                }
            </div>
        )
    }
    renderComments() {
        return (
            <div className={'Photo-comments'}>
                {
                    JSON.stringify(this.props.comments)
                }
            </div>
        )
    }
    render() {
        console.log(this.props);
        return (
            <div className={"Photo-container"}>
                { this.props.photo ? this.renderPhoto() : <div>No photo here</div> }
                Comments
                { this.props.comments ? this.renderComments() : <div>No comments here</div> }
            </div>
        );
    }
    componentDidMount() {
        const photoId = this.props.match.params.id;
        this.props.getPhotoById(photoId);
        this.props.getCommentsByPhotoId(photoId);
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.photoReducer.isFetching,
        photo: state.photoReducer.displayedPhoto,
        comments: state.commentReducer.comments,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getPhotoById: (pid) => dispatch(getPhotoById(pid)),
    getCommentsByPhotoId: (pid) => dispatch(getCommentsByPhotoId(pid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
