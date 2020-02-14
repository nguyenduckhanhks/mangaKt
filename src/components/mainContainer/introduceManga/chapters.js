import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class chapters extends Component {
    showListChaper = (listChaper, mangaName) => {
        if (listChaper) {
            return listChaper.map((chaper, index) => {
                return (
                    <Link to={`/${mangaName}/${chaper}`} key={index}>
                        <li className="row">
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                chapter {index + 1}
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                11/12/2000
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                10000
                            </div>
                        </li>
                    </Link>
                )
            })
        }
    }
    render() {
        let { listChaper,mangaName } = this.props
        return (
            <div className="chapters row">
                <div className="list-title">
                    <span className="glyphicon glyphicon-list" aria-hidden="true" /> Danh sách chương
                </div>
                <ul>
                    <li className="row heading">
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            Số chương
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            Cập nhật
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            Lượt xem
                        </div>
                    </li>
                    {this.showListChaper(listChaper,mangaName)}
                </ul>
            </div>
        )
    }
}
export default chapters