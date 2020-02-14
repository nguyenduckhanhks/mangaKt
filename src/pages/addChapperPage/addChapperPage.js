import React, { Component } from 'react';
import * as actions from './../../actions/index';
import Header from './../../components/header/index';
import Footer from './../../components/footer/footer';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';

class addChaperPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.mangaEditing.listChaper ? this.props.match.params.id + '-chap-' + (this.props.mangaEditing.listChaper.length + 1):'',
            imgs: [],
            img:''
        }
    }

    onChange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onAddChaper = () =>{
        this.props.addChaperReques(this.state);
    }

    onAddImg = () => {
        let listImg = this.state.imgs;
        listImg.push(this.state.img);
        this.setState({
            img:'',
            imgs:listImg
        })
    }
    removeImg = (index) => {
        let imgs = this.state.imgs;
        imgs.splice(index,1);
        this.setState({
            imgs
        })
    }
    renderImgs = (imgs) => {
        return imgs.map((img,index)=>{
            return(
                <div className="row"  key={index}>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <img src={img} className="img-responsive" alt="avatar" style={{width:151+"px",height:197+"px"}}/>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <button type="button" className="btn btn-warning" value={index}
                        onClick={()=>this.removeImg(index)}>X</button>
                    </div>
                    
                </div>
            )
        })
    }
    render(){
        let chapter = this.state;
        if(!(this.props.accountLogined && this.props.accountLogined.isAdmin))  return(<div></div>)
        return(
            <div>
                <Header/>
                <div className="main-container container">
                    <div id="logreg-forms">
                        <form className="form-signup">
                            <input type="text" name="img" value={chapter.img} className="form-control" placeholder="image url"onChange={this.onChange}/>
                            
                            <button type="button" className="btn btn-success" onClick={this.onAddImg}>Add Image</button><br/>
                            {this.renderImgs(chapter.imgs)} <br/>
                            <Link style={{color:'white'}}to={'/'} type="button" className="btn btn-success" onClick={this.onAddChaper}>Add</Link><br/>
                            <Link style={{color:'white'}} to={'/'} role="button" className="btn btn-warning">Close</Link><br/>
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
        mangaEditing: state.mangaEditing,
        accountLogined: state.authLogin.account
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        addChaperReques: (chapter) => {
            dispatch(actions.addChapterReques(chapter))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(addChaperPage);