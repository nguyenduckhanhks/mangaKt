import React, { Component } from 'react';
import './logo.scss';
import {Link } from 'react-router-dom'

class logo extends Component {
    render() {
        return (
            <div className="navbar-header">
                <Link to={'/'} className='navbar-brand'>
                    <img className="main-nav-top-section-image" src={require('./../../../image/logo.png')} alt="logo" />
                </Link>
            </div>
        );
    }
}
export default logo;