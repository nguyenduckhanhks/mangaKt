import React, { Component } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/footer';

import './../style.scss';
import { Link, Redirect } from 'react-router-dom';
import { connect} from 'react-redux';
import * as actions from './../../../actions/index';

class signUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            userName:'',
            passWord:'',
            repeatpass:''
        }
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onSignUp = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    
    render() {
        let {signUpError,isSignUp} = this.props;
        if(isSignUp) return <Redirect to={'/login'}/>
        return (
            <div>
                <Header />
                <div className="container main-container">
                    <div id="logreg-forms">
                        <form className="form-signup">
                            <div className="social-login">
                                <button className="btn facebook-btn social-btn" type="button"><span style={{fontSize:15+"px"}}><i className="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                            </div>
                            <div className="social-login">
                                <button className="btn google-btn social-btn" type="button"><span style={{fontSize:15+"px"}}><i className="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                            </div>
                            
                            <p style={{textAlign: "center",color:"black"}}>OR</p>

                            <input type="text" id="user-name" name="name" className="form-control" placeholder="Full name" required="" onChange={this.inputOnchange}/>
                            <input type="email" id="user-email" name="userName" className="form-control" placeholder="Email address" required onChange={this.inputOnchange}/>
                            <input type="password" id="user-pass" name="passWord" className="form-control" placeholder="Password" required onChange={this.inputOnchange}/>
                            <input type="password" id="user-repeatpass" name="repeatpass" className="form-control" placeholder="Repeat Password" required onChange={this.inputOnchange}/>

                            <button className="btn btn-primary btn-block" type="submit" onClick={this.onSignUp}><i className="fas fa-user-plus"></i> Sign Up</button>
                            <h5 style={{color:'red'}}>{signUpError ? signUpError : ''}</h5>
                            <Link to={'/login'}>Back</Link>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        signUpError: state.signUpReducer.signUpError,
        isSignUp: state.signUpReducer.isSignUp
    }
}
const mapDispatchToProps = (dispatch,props)=> {
    return{
        signUp: (account)=>{
            dispatch(actions.signUpReques(account))
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(signUpPage);