import React, { Component } from 'react';
import Chapters from './chapters';
import Information from './information';
import Content from './content';
import './style.scss';

class introduceManga extends Component {
    render() {
        let { mangaEditing, accountLogined, idManga } = this.props;
        return (
            <div className="information row">
                <Information mangaEditing={mangaEditing} accountLogined={accountLogined}idManga={idManga}/>
                <Content introduce={mangaEditing.introduce} />
                <Chapters listChaper={mangaEditing.listChaper} mangaName={mangaEditing.name}/>
            </div>
        )
    }
}
export default introduceManga;