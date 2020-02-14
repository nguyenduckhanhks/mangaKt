import React, { Component } from 'react';

class listImg extends Component {

    renderImages = (listImages) => {
        if (listImages) {
            return listImages.map((image, index) => {
                return (
                    <div className="text-center" key={index}>
                        <img src={image} className="img-fluid" alt="img" />
                    </div>
                )
            })
        }
    }

    render() {
        let { listImages } = this.props;
        return (
            <div className="container">
                <div className="list-img">
                    {this.renderImages(listImages)}
                </div>
            </div>
        )
    }
}

export default listImg;