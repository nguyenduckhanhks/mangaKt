import React, { Component } from 'react';
import './leftSidebar.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class leftSidebar extends Component {
    render() {
        let { accountLogined } = this.props;
        return (
            <div className="left-column">
                <div className="side-bar-menu-item " role="button">HOT</div>
                <div className="side-bar-menu-item " role="button">THEO DÕI</div>
                <div className="side-bar-menu-item " role="button">LỊCH SỬ</div>
                <div className="side-bar-menu-item " role="button">THỂ LOẠI</div>
                <div className="side-bar-menu-item " role="button">CON TRAI</div>
                <div className="side-bar-menu-item " role="button">CON GÁI</div>
                <div className="side-bar-menu-item " role="button">GROUP</div>
                <div className="side-bar-menu-item " role="button">GÓP Ý</div>
                {(accountLogined && accountLogined.isAdmin) ? 
                    <div className="side-bar-menu-item " role="button"><Link to={'/add-manga'}>THÊM TRUYỆN</Link></div>:''}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accountLogined : state.authLogin.account
    }
}

export default connect(mapStateToProps,null)(leftSidebar);