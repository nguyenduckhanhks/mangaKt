import React, { Component } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/footer';

import './../style.scss';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../../actions/index';

class signInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: ''
        }
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onSignIn = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        let { isLogIn, authError } = this.props;
        if(isLogIn) return <Redirect to={`/`}/>
        return (
            <div>
                <Header />
                <div className="container main-container">
                    <div id="logreg-forms">
                        <form className="form-signin">
                            <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: "center", color: "black" }}> Sign in</h1>
                            <div className="social-login">
                                <button className="btn facebook-btn social-btn" type="button"><span style={{ fontSize: 15 + "px" }}> Sign in with Facebook</span> </button>
                                <button className="btn google-btn social-btn" type="button"><span style={{ fontSize: 15 + "px" }}> Sign in with Google+</span> </button>
                            </div>
                            <p style={{ textAlign: "center", color: "black" }}> OR  </p>
                            <input type="email" id="inputEmail" name="userName" className="form-control" placeholder="Email address" required="" onChange={this.inputOnchange} />
                            <input type="password" id="inputPassword" name='passWord' className="form-control" placeholder="Password" required="" onChange={this.inputOnchange} />

                            <button className="btn btn-success btn-block" onClick={this.onSignIn}><i className="fas fa-sign-in-alt"></i> Sign in</button>
                            <Link to={'/reset-pass-word'}>Forgot password?</Link>
                            <h5 style={{color:"red"}}>{authError?authError:null}</h5>
                            <hr />
                            <Link to={'/sign-up'}><button className="btn btn-primary btn-block" type="button" id="btn-signup">Sign up New Account</button></Link>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogIn: state.authLogin.isLogIn,
        authError: state.authLogin.authError,
        account: state.authLogin.account
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signIn: (user) => {
            dispatch(actions.signInReques(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signInPage);