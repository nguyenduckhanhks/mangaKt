import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/index';
import Catalogys from '../../components/mainContainer/catalogys/catalogys';
import Footer from '../../components/footer/footer';
import LeftSidebar from '../../components/leftSidebar/leftSidebar';
import * as actions from './../../actions/index';

class typePage extends Component{
    componentDidMount(){
        this.props.fetchCatalogyEditingReques(this.props.match.params.catalogy)
    }
    
    render(){
        let { match,catalogyEditing } = this.props
        return(
            <div>
                <Header/>
                <LeftSidebar/>
                <div className="container main-container">
                    <Catalogys match={match}
                                catalogyEditing={catalogyEditing}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        catalogyEditing: state.catalogyEditing
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        fetchCatalogyEditingReques: (name)=>{
            dispatch(actions.fetchCatalogyEditingReques(name))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(typePage);