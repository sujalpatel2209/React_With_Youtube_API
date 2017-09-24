import React, {Component} from 'react';

class ListItem extends Component {

    render() {
        const video = this.props.video;
        return (
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img src={ video.snippet.thumbnails.default.url } className="media-object" alt=""/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            { video.snippet.title }
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default ListItem;