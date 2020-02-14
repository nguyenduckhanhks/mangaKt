import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Item from './../item/itemManga';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

class carousel extends Component {
    render() {
        let { listItem } = this.props;
        return (
            <div style={{ marginBottom: 20 + "px" }}>
                <h1>TRUYỆN ĐỀ CỬ</h1>
                <Carousel responsive={responsive} autoPlay={true} stopAutoPlayOnHover={true}>
                    {this.showMangas(listItem)}
                    <Item/>
                </Carousel>
            </div>
        )
    }
    showMangas = (listItem) => {
        var result = null;
        if (listItem && listItem[0]) {
            let mangas = listItem[0].mangas
            if (mangas && mangas.length > 0) {
                result = mangas.map((manga, index) => {
                    return <div className="item"
                        key={index}>
                        <Item type={1}
                            manga={manga} />
                    </div>
                });
            }
        }
        return result;
    }
}
export default carousel;