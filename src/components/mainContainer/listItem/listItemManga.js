import React,{ Component } from 'react';
import './listItemManga.scss';
import ItemManga from './../item/itemManga';

class listItem extends Component{
    render(){
        var { mangas } = this.props;
        return(
            <div className="list-item">
                {this.showMangas(mangas)}
            </div>
        );
    }
    showMangas=(mangas)=>{
        var result = null;
        if(mangas&&mangas.length > 0){
            result = mangas.map((manga,index)=>{
                return <div className="item"
                            key={index}>
                                <ItemManga type={1}
                                            manga={manga}/>
                        </div>
            });
        }
        return result;
    }
}
export default listItem;