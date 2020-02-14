import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './catalogys.scss';
import ListItem from '../listItem/listItemManga';

class typeManga extends Component {

    render() {
        var { catalogy,match,catalogyEditing } = this.props;
        if (catalogy)
            return (
                <div className="type-manga">
                    <Link to={catalogy ? `/the-loai/${catalogy.path}` : ''}><h1>{catalogy.name}</h1></Link>
                    <ListItem mangas={catalogy.mangas} />
                </div>
            );
        else {
            return (
                <div className="type-manga">
                    <h1>{match.params.catalogy}</h1>
                    <ListItem mangas={catalogyEditing.mangas} />
                </div>
            )
        }
    }
}

export default typeManga;