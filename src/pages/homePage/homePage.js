import React, { Component } from 'react';
import './homePage.scss';
import Header from './../../components/header/index';
import MainCarousel from './../../components/mainContainer/carousel/carousel';
import LeftSidebar from './../../components/leftSidebar/leftSidebar';
import History from './../../components/history/history';
import Footer from './../../components/footer/footer';
import Catalogys from './../../components/mainContainer/catalogys/catalogys';

import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class homePage extends Component {
    componentDidMount(){
        this.props.fetchCatalogysReques();
    }
    
    fetchMainCarousel = (catalogys) => {
        catalogys.forEach(catalogy => {
            if(catalogy.name === 'hot') {
                return catalogy;
            }
        });
    }

    render() {
        var { catalogys } = this.props;
        return (
            <div className="home-page">
                <Header />
                <LeftSidebar />
                <div className="container main-container">

                    <MainCarousel listItem={catalogys.filter(e=>e.name==='hot')}/>
                    <History />
                    {this.showTypeMangas(catalogys)}

                </div>
                <Footer/>
            </div>
        )
    }
    showTypeMangas = (catalogys) => {
        var result = null;
        if(catalogys&&catalogys.length > 0){
            result = catalogys.map((catalogy,index)=>{
                return(<Catalogys key={index}
                            catalogy={catalogy}
                        />)
            })
        }
        return result;
    }
}

const mapStatetoProps = (state) => {
    return{
        catalogys: state.catalogys
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return{
        fetchCatalogysReques: ()=>{ dispatch(actions.fetchCatalogysReques())}
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(homePage);