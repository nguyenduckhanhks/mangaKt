import React, { Component } from 'react';
import * as actions from './../../actions/index';
import Header from './../../components/header/index';
import Footer from './../../components/footer/footer';
import {Link } from 'react-router-dom';
import * as provider from './../../provider/provider'
import { connect } from 'react-redux';

class addMangaPage extends Component{
    componentDidMount(){
        this.props.fetchCatalogysReques();
    }

    constructor(props) {
        super(props);
        this.state = {
            id:provider.randomId(),
            author:'',
            avt:'',
            introduce:'',
            listChaper:[],
            name:'',
            path:'',
            status:false,
            typeMangas:[],
            typeMangasId:[],
            view:0
        }
    }

    onChange = (e) => {
        let target = e.target;
        if(target.type !== "checkbox"){
            this.setState({
                [target.name]: target.value
            })
        }else{
            let typeMangas = this.state.typeMangas;
            let typeMangasId = this.state.typeMangasId;
            if(target.checked){
                typeMangasId.push(target.id)
                typeMangas.push(target.value);
            }
            else{
                typeMangas.splice(typeMangas.indexOf(target.value),1);
                typeMangasId.splice(typeMangasId.indexOf(target.id),1);
            }
            this.setState({
                typeMangas
            })
        }
    }

    renderCatalogys = (catalogys) => {
        if(catalogys.length > 0){
            return catalogys.map((catalogy,index)=>{
                return(
                    <div className="checkbox"key={index}>
                        <label style={{color:"blue", fontSize:15+"px"}}>
                            <input type="checkbox" id={catalogy.id} value={catalogy.name}onChange={this.onChange}/>
                                {catalogy.name.toUpperCase()}
                        </label>
                    </div>
                )
            })
        }
    }

    onAddManga = () =>{
        this.props.addMangaReques(this.state);
    }
    
    render(){
        let manga = this.state;
        let {catalogys} = this.props;
        if(!(this.props.accountLogined && this.props.accountLogined.isAdmin))  return(<div></div>)
        return(
            <div>
                <Header/>
                <div className="main-container container">
                    <div id="logreg-forms">
                        <form className="form-signup">
                            <input type="text" name="name" className="form-control" placeholder="Manga name" onChange={this.onChange}/>
                            <textarea rows="5" name="introduce" className="form-control" placeholder="Details"onChange={this.onChange}/>
                            <input type="text" name="author" className="form-control" placeholder="Manga author"onChange={this.onChange}/>
                            <input type="text" name="avt" className="form-control" placeholder="Manga avatar image"onChange={this.onChange}/>
                            <img src={manga.avt} className="img-responsive" alt="avatar" style={{width:151+"px",height:197+"px"}}/>
                            {this.renderCatalogys(catalogys)}
                            <Link to={'/'} type="button" className="btn btn-success" onClick={this.onAddManga}>Add</Link>
                            <Link to={'/'} role="button" className="btn btn-warning">Close</Link>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        catalogys : state.catalogys,
        accountLogined: state.authLogin.account
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchCatalogysReques: ()=>{ dispatch(actions.fetchCatalogysReques())},
        addMangaReques: (manga) => {dispatch(actions.addMangaReques(manga))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(addMangaPage);