import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class infomation extends Component {

    showMangaCatalogys = (catalogys) => {
        if (catalogys) {
            return catalogys.map((catalogy,index) => {
                return (<Link to={`/the-loai/${catalogy}`} role={"button"} key={index}>{catalogy} &nbsp;</Link>)
            })
        }
    }
    render() {
        let { mangaEditing,accountLogined, idManga } = this.props;
        let catalogys = mangaEditing.typeMangas;
        let listChaper = mangaEditing.listChaper;
        return (
            <div>
                <h1 className="text-center">{mangaEditing.name}</h1>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img
                        src={mangaEditing.avt}
                        className="img-responsive"
                        style={{ width: 198 + "px", height: 264 + "px" }}
                        alt="avatar" />
                </div>

                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <ul className="introduce">
                        <li className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;Tác giả
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                {mangaEditing.author}
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <span className="glyphicon glyphicon-signal" aria-hidden="true" />&nbsp;Tình trạng
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                {mangaEditing.status ? "Hoàn thiện" : "Đang cập nhật"}
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <span className="glyphicon glyphicon-tags" aria-hidden="true" />&nbsp;Thể loại
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                {this.showMangaCatalogys(catalogys)}
                            </div>
                        </li>
                        <li className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <span className="glyphicon glyphicon-heart" aria-hidden="true" />&nbsp;Lượt thích
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                {mangaEditing.view}
                            </div>
                        </li>
                    </ul>

                    <button type="button" className="btn btn-lg btn-success">
                        <span className="glyphicon glyphicon-heart" aria-hidden="true" />
                        &nbsp;Yêu thích</button> <br />

                    <Link to={listChaper && listChaper.length > 0 ? `/${mangaEditing.name}/${listChaper[0]}`:''} type="button" className="btn btn-warning">Đọc từ đầu</Link> &nbsp;

                    <Link to={listChaper && listChaper.length > 0 ? `/${mangaEditing.name}/${listChaper[listChaper.length - 1]}`:''} type="button" className="btn btn-warning">Đọc mới nhất</Link>&nbsp;

                    {(accountLogined && accountLogined.isAdmin) ? 
                    <Link to={`/admin/add-chaper/${idManga}`} type="button" className="btn btn-warning">Thêm Chapter</Link> :''}

                </div>
            </div>
        )
    }
}


export default infomation;