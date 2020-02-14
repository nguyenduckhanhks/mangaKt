import React, { Component } from 'react';
import * as constant from './../../../constants/constant';

class control extends Component {
    renderlistChaper = (list, mangaName) => {
        if (list) {
            return list.map((item, index) => {
                return (
                    <option key={index} value={`${constant.URL}/${mangaName}/${item}`}>
                            Chapter {index + 1}
                    </option>
                )
            })
        }
    }

    selectChapters = () => {
        if(document.getElementById("listChapter")){
            let e = document.getElementById("listChapter")
            window.location = e.value
        }
    }
    render() {
        let { mangaEditing, idChap } = this.props;
        
        return (
            <div className="container main-container">
                <h2>{mangaEditing.name} - Chapter {idChap.match(/\w*$/)}</h2>
                <i>[Cập nhật lúc 11:12 11/12/2000]</i>
                <div className="control row text-center">
                    <span className="glyphicon glyphicon-home home" aria-hidden="true" />

                    <button type="button" className="btn btn-success btn-previous">
                        <span className="glyphicon glyphicon-chevron-left" />
                    </button>

                    <select id="listChapter" 
                            className="form-control option-chaper"
                            onChange = {this.selectChapters}>
                        {this.renderlistChaper(mangaEditing.listChaper, mangaEditing.name)}
                    </select>

                    <button type="button" className="btn btn-success btn-next">
                        <span className="glyphicon glyphicon-chevron-right" />
                    </button>
                </div>
            </div>
        )
    }
}

export default control;