import React, { Component } from 'react';
import Header from './../../components/header/index';
import History from './../../components/history/history';
import IntroduceManga from './../../components/mainContainer/introduceManga/index';
import Footer from './../../components/footer/footer';

import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class introduceMangaPage extends Component {
    componentDidMount() {
        this.props.fetchMangaEditingReques(this.props.match.params.id);
    }
    render() {
        let { mangaEditing,accountLogined, match } = this.props
        return (
            <div>
                <Header />

                <div className="container main-container">
                    <IntroduceManga mangaEditing={mangaEditing} accountLogined={accountLogined} idManga={match.params.id} />
                    <History />
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangaEditing: state.mangaEditing,
        accountLogined : state.authLogin.account
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchMangaEditingReques: (id) => {
            dispatch(actions.fetchMangaEditingReques(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(introduceMangaPage);