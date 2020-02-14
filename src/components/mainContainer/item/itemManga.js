import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './itemManga.scss';

class itemManga extends Component {
    render() {
        var { type,manga } = this.props;
        return (
            type === 1 && manga !== undefined ?
                <Link className="item_1" to={`/truyen/${manga.path}/${manga.id}`} role="button">
                    <img src={manga.avt} alt=""></img>
                    <div className="manga-caption">
                        <h3 className="text-center">{manga.name}</h3>
                        <div className="described text-center">
                            Chapter {manga.listChaper.length} &nbsp; <span className="glyphicon glyphicon-heart"></span> {manga.view}
                </div> 
                    </div>
                </Link>
                : type === 2 && manga !== undefined ?
                <div className="item_2">
                    <Link to={`/truyen/${manga.path}/${manga.id}`}>
                        <img src={manga.avt} alt="" />
                        <div>{manga.name}</div> <br />
                        Chapter {manga.listChaper.length} <br/><span className="glyphicon glyphicon-heart"></span> {manga.view}
                    </Link>
                </div>:""
        );
    }
}

export default itemManga;