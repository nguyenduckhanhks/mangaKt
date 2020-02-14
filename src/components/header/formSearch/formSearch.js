import React, { Component } from 'react';
import './formSearch.scss';

class formSearch extends Component {
    render() {
        return (
            <form className="nav navbar-center form-inline">
                <div className="form-group">
                    <input type="email" className="form-control main-nav-top-section-search-input" placeholder="Search...." />
                </div>

                <button type="submit" className="btn btn-primary main-nav-top-section-search-btn">
                    <span className="glyphicon glyphicon-search"></span>
                </button>
            </form>
        )
    }
}

export default formSearch;