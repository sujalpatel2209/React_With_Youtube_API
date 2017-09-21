import React, {Component} from 'react';
import ListItem from './video_list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return <ListItem video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}



export default VideoList;