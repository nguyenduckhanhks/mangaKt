import React, { Component } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/footer';

import './../style.scss';
import { Link } from 'react-router-dom';

class resetPassWord extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container main-container">
                    <div id="logreg-forms">
                        <form action="/reset/password/" className="form-reset">
                            <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required=""/>
                            <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                            <Link to={'/login'}>Back</Link>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default resetPassWord;