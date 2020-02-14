import React, { Component } from 'react';
import './style.scss';
import Logo from './logo/logo';
import FormSearch from './formSearch/formSearch';
import Acount from './acount/acount';

class header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-fixed-top navbar-inverse" role="navigation">

                    <div className="container">
                        <Logo/>
                        <div className="navbar-collapse collpase">
                            <FormSearch/>
                            <Acount/>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default header;