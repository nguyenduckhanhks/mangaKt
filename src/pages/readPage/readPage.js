import React, { Component } from 'react';
import Header from './../../components/header/index';
import ReadManga from './../../components/mainContainer/readManga/index';
import Footer from './../../components/footer/footer';

import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class readPage extends Component {
    componentDidMount(){
        this.props.fetchChaperEditingReques(this.props.match.params.idChap);
        this.props.fetchMangaEditingReques(this.props.match.params.idChap.match(/^\w*/)[0])
    }
    render() {
        let { chaperEditing, mangaEditing } = this.props;
        let idChap = this.props.match.params.idChap;
        return (
            <div>
                <Header />
                <ReadManga listImages={chaperEditing.imgs} mangaEditing={mangaEditing} idChap={idChap}/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        mangaEditing : state.mangaEditing,
        chaperEditing : state.chaperEditing
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchChaperEditingReques: (id) => {
            dispatch(actions.fetchChaperEditingReques(id))
        },
        fetchMangaEditingReques: (id) => {
            dispatch(actions.fetchMangaEditingReques(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(readPage);