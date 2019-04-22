import React, { Component } from 'react';
import './Users.sass';
import connect from 'react-redux/es/connect/connect'
import { getAllUsers } from "../../actions/actionCreator";
import UsersListItem from '../../components/UsersListItem/UsersListItem'
import FilterBar from "../../components/FilterBar/FilterBar";
const queryString = require('query-string');

class Users extends Component {

    renderUsers() {
        return (
           <div className={'usersList'}>
               {
                   this.props.users.map( (u) => {
                       return <UsersListItem key={u.id} user={u} {...this.props}/>
                   })
               }
           </div>
        );
    }

    render() {
        return (
            <div className={'Users-container'}>
                <FilterBar {...this.props}/>
                { this.props.users ? this.renderUsers() : <p>No users</p>}
            </div>
        );
    }
    componentDidMount() {
        const query = this.props.history.location.search;
        this.props.getAllUsers(query);
    }
}
const mapStateToProps = (state) => {
  return {
      isFetching: state.usersReducer.isFetching,
      users: state.usersReducer.users
  }
};

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: (query) => dispatch(getAllUsers(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
