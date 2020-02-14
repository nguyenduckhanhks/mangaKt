import React, { Component } from 'react';
import './style.scss';
import Control from './control';
import ListImg from './listImg';

class readManga extends Component{
    render(){
        let { listImages, mangaEditing, idChap } = this.props;
        return(
            <div>
                <Control mangaEditing={mangaEditing} idChap={idChap}/>
                <ListImg listImages={listImages}/>
            </div>
        )
    }
}

export default readManga;