import React, { Component } from 'react';
import './Login.sass';
import connect from 'react-redux/es/connect/connect'
import { login } from "../../actions/actionCreator";
import TextInput from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoginBtnActive: true
        };
    }

    changeMethod (fieldName, fieldValue) {
        console.log(this);
        this.setState({
            [fieldName]: fieldValue
        });
    }

    onLoginClicked() {
        console.log('login clicked');
    }

    toRegisterPageHandler() {
        this.props.history.push('/register');
    }

    render() {
        return (
            <div className={'Login-container'}>
                <div className="loginContent">
                    <div className="header">
                        <h1>Sign in to meeting service<small>Enter your details below</small></h1>
                    </div>
                    <div className="form">
                        <TextInput fieldTitle="Email Address"
                        fieldName="email"
                        placeholder="email@email.com"
                        fieldType="email"
                        fieldValue={this.state.email}
                        fieldChange={(n, v) => this.changeMethod(n, v)}/>
                        <TextInput fieldTitle="Password"
                        fieldName="password"
                        placeholder="Enter your password"
                        fieldType="password"
                        fieldValue={this.state.password}
                        fieldChange={(n, v) => this.changeMethod(n, v)}/>
                <div className="btnContainer">
                    <Button name="Sign in"
                    type="primaryBtn"
                    handler={this.onLoginClicked}
                    isActive="isLoginBtnActive"/>
                </div>
                <a onClick={() => this.toRegisterPageHandler()} className="toRegistrationBtn">Not registered yet?</a>
                </div>

                </div>
            </div>
        );
    }
    componentDidMount() {
    }

}
const mapStateToProps = (state) => {
  return {
      user: state.authReducer.user
  }
};

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
