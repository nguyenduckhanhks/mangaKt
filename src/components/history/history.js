import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './history.scss';
import ItemManga from './../mainContainer/item/itemManga';
import { connect } from 'react-redux';
//import * as actions from './../../actions/index';

class history extends Component{
    showHIstoryItem = (historys) => {
        return historys.map((history, index) => {
            return(
                <ItemManga key={index} manga={history} type={2}/>
            )
        })
    }
    render(){
        let { historys } = this.props
        return(
            <div className="history">
                    <h4>Lịch sử đọc</h4>
                    <Link to="/" style={{fontStyle:"italic"}}>Xem tất cả</Link>
                    {this.showHIstoryItem(historys)}
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accountLogined: state.authLogin.account,
        historys: state.historyEditing
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(history);