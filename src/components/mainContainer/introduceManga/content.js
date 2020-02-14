import React, { Component } from 'react';
class content extends Component {
    render() {
        let { introduce } = this.props;
        return (
            <div className="content row">
                <div className="list-title">
                    <span className="glyphicon glyphicon-file" aria-hidden="true" /> Nội Dung
                </div>
                <p>
                    {introduce}
                </p>
            </div>
        )
    }
}
export default content;