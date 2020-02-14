import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './acount.scss';
import * as actions from './../../../actions/index';

import { connect } from 'react-redux';

class acount extends Component {
    LogOut = () => {
        this.props.signOut();
    }
    render() {
        let {nameAccountLogined} = this.props;
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to='/' data-toggle="dropdown" className="notification">
                        <span className="glyphicon glyphicon-bell"></span>
                    </Link>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/">A đã trả lời bình luận của bạn về một bài viết</Link>
                        </li>
                        <li className="divider"></li>
                    </ul>
                </li>
                <li className="main-nav-sign-in" role="button">
                    {nameAccountLogined?nameAccountLogined.name:
                    <Link to={'/login'}>Đăng Nhập</Link>}
                </li>
                {
                    nameAccountLogined ? <li className="main-nav-sign-up" role="button" onClick={this.LogOut}>Đăng Xuất</li>:
                    <li className="main-nav-sign-up" role="button"><Link to={'/sign-up'}>Đăng Ký</Link></li>
                }
                
            </ul>
        )
    }
}
const mapStateToProps = state => {
    return {
        nameAccountLogined : state.authLogin.account
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        signOut: () => {
            dispatch(actions.signOutReques())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(acount);